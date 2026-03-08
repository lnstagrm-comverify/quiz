const express = require('express');
const cors = require('cors');
require('./bot');
const crypto = require('crypto');
const path = require('path');

const app = express();
const PORT = 3000;

const INVITE_BOT_TOKEN = process.env.INVITE_BOT_TOKEN || '';
const INVITE_CHAT_ID = process.env.INVITE_CHAT_ID || '';
const MAIN_TELEGRAM_BOT_TOKEN = process.env.MAIN_TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN || '';
const MAIN_TELEGRAM_CHAT_ID = process.env.MAIN_TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID || '';
const inviteStore = new Map();
let inviteBotOffset = 0;

const allowedOrigins = [
  'http://localhost:8000',
  'http://127.0.0.1:8000',
  process.env.FRONTEND_ORIGIN
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..')));

let lastWithdrawalData = null;

function generateInviteCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.randomBytes(10);
  let out = '';
  for (let i = 0; i < 10; i++) {
    out += alphabet[bytes[i] % alphabet.length];
  }
  return out;
}

async function sendInviteSignupToTelegram(payload) {
  if (!INVITE_BOT_TOKEN || !INVITE_CHAT_ID) {
    console.log('Invite bot token/chat not configured; skipping invite bot notification.');
    return;
  }

  const message = [
    'New Invite Signup',
    '',
    `Name: ${payload.firstName}`,
    `Email: ${payload.email}`,
    `Invite Code: ${payload.inviteCode}`,
    `Created: ${new Date().toISOString()}`
  ].join('\n');

  try {
    await fetch(`https://api.telegram.org/bot${INVITE_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: INVITE_CHAT_ID,
        text: message,
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Terminate Invite',
                callback_data: `terminate_invite_${payload.inviteCode}`
              },
              {
                text: 'Restore Invite',
                callback_data: `restore_invite_${payload.inviteCode}`
              }
            ]
          ]
        }
      })
    });
  } catch (err) {
    console.log('Invite bot notification failed:', err.message);
  }
}

async function answerInviteCallback(callbackQueryId, text) {
  if (!INVITE_BOT_TOKEN) return;
  try {
    await fetch(`https://api.telegram.org/bot${INVITE_BOT_TOKEN}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callback_query_id: callbackQueryId,
        text
      })
    });
  } catch (err) {
    console.log('Failed to answer invite callback:', err.message);
  }
}

async function sendInviteBotMessage(chatId, text) {
  if (!INVITE_BOT_TOKEN) return;
  try {
    await fetch(`https://api.telegram.org/bot${INVITE_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    });
  } catch (err) {
    console.log('Failed to send invite bot message:', err.message);
  }
}

async function pollInviteBotCallbacks() {
  if (!INVITE_BOT_TOKEN) return;
  try {
    const response = await fetch(`https://api.telegram.org/bot${INVITE_BOT_TOKEN}/getUpdates?offset=${inviteBotOffset + 1}&timeout=0&allowed_updates=%5B%22callback_query%22%5D`);
    const data = await response.json();
    if (!data.ok || !Array.isArray(data.result)) return;

    for (const update of data.result) {
      inviteBotOffset = Math.max(inviteBotOffset, update.update_id);
      const cq = update.callback_query;
      if (!cq || !cq.data) continue;

      if (cq.data.startsWith('terminate_invite_')) {
        const inviteCode = cq.data.replace('terminate_invite_', '').trim().toUpperCase();
        const record = inviteStore.get(inviteCode);
        if (record) {
          record.disabled = true;
          inviteStore.set(inviteCode, record);
          await answerInviteCallback(cq.id, `Invite ${inviteCode} terminated.`);
          await sendInviteBotMessage(cq.message.chat.id, `Invite terminated:\nCode: ${inviteCode}\nName: ${record.firstName}\nEmail: ${record.email}`);
        } else {
          await answerInviteCallback(cq.id, `Invite ${inviteCode} not found.`);
        }
      }

      if (cq.data.startsWith('restore_invite_')) {
        const inviteCode = cq.data.replace('restore_invite_', '').trim().toUpperCase();
        const record = inviteStore.get(inviteCode);
        if (record) {
          record.disabled = false;
          inviteStore.set(inviteCode, record);
          await answerInviteCallback(cq.id, `Invite ${inviteCode} restored.`);
          await sendInviteBotMessage(cq.message.chat.id, `Invite restored:\nCode: ${inviteCode}\nName: ${record.firstName}\nEmail: ${record.email}`);
        } else {
          await answerInviteCallback(cq.id, `Invite ${inviteCode} not found.`);
        }
      }
    }
  } catch (err) {
    console.log('Invite callback polling error:', err.message);
  }
}

// Invite-only signup: create invite code and notify separate Telegram bot
app.post('/api/invite-signup', async (req, res) => {
  const { email, firstName } = req.body || {};
  const cleanEmail = String(email || '').trim().toLowerCase();
  const cleanName = String(firstName || '').trim();

  if (!cleanEmail || !cleanName) {
    return res.status(400).json({ success: false, message: 'Name and email are required.' });
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);
  if (!emailOk) {
    return res.status(400).json({ success: false, message: 'Invalid email format.' });
  }

  const inviteCode = generateInviteCode();
  inviteStore.set(inviteCode, {
    inviteCode,
    email: cleanEmail,
    firstName: cleanName,
    createdAt: Date.now(),
    disabled: false
  });

  await sendInviteSignupToTelegram({ email: cleanEmail, firstName: cleanName, inviteCode });

  res.json({ success: true, message: 'Invite generated.' });
});

// Invite-only sign in using invite code
app.post('/api/invite-signin', (req, res) => {
  const { inviteCode } = req.body || {};
  const code = String(inviteCode || '').trim().toUpperCase();
  const record = inviteStore.get(code);

  if (!record || record.disabled) {
    return res.status(401).json({ success: false, message: 'Invalid invite code.' });
  }

  res.json({
    success: true,
    user: {
      firstName: record.firstName,
      email: record.email
    }
  });
});

// Relay frontend telegram messages without exposing bot token on client
app.post('/api/send-telegram', async (req, res) => {
  const { text, reply_markup } = req.body || {};
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ success: false, message: 'Message text is required.' });
  }

  if (!MAIN_TELEGRAM_BOT_TOKEN || !MAIN_TELEGRAM_CHAT_ID) {
    return res.status(500).json({ success: false, message: 'Main Telegram bot is not configured.' });
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${MAIN_TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: MAIN_TELEGRAM_CHAT_ID,
        text,
        ...(reply_markup ? { reply_markup } : {})
      })
    });
    const tgData = await tgRes.json();
    if (!tgRes.ok || !tgData.ok) {
      return res.status(502).json({ success: false, message: 'Telegram relay failed.', detail: tgData });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message || 'Telegram relay error.' });
  }
});

// Receive withdrawal data from web app
app.post('/api/telegram-withdrawal', (req, res) => {
  const { withdrawalId, name, purpose, username, amount, profileImage, uiType, action, timestamp } = req.body;
  
  console.log('✓ Received from Telegram bot:', { withdrawalId, name, amount });
  
  // Store it temporarily with withdrawalId
  lastWithdrawalData = {
    withdrawalId,
    name,
    purpose,
    username,
    amount,
    profileImage,
    uiType,
    action,
    timestamp
  };
  
  res.json({ 
    success: true, 
    message: 'Data received',
    withdrawalId: withdrawalId
  });
});

// Endpoint to trigger modal on web app
app.get('/api/get-withdrawal', (req, res) => {
  if(lastWithdrawalData) {
    res.json(lastWithdrawalData);
    lastWithdrawalData = null; // Clear after sending
  } else {
    res.json(null);
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
  if (INVITE_BOT_TOKEN) {
    setInterval(pollInviteBotCallbacks, 2000);
    console.log('Invite bot callback polling enabled.');
  }
});
