/* ===========================
   ARISE — SYSTEM JS
   Full RPG Fitness App Logic
=========================== */

const CHARACTERS = [
  {
    id: 'jinwoo',
    name: 'SUNG JINWOO',
    series: 'Solo Leveling',
    emoji: '🌑',
    tag: 'SHADOW MONARCH',
    physique: 'Lean & Muscular',
    goal: 'Cut fat, build lean calisthenics muscle, high endurance',
    priority: ['Core', 'Endurance', 'Calisthenics Strength'],
    trainingStyle: 'Calisthenics + Running',
    colors: { primary: '#7c3aed', secondary: '#a855f7', accent: '#1e1b4b', glow: '#7c3aed60' }
  },
  {
    id: 'yuji',
    name: 'YUJI ITADORI',
    series: 'Jujutsu Kaisen',
    emoji: '👊',
    tag: 'DIVERGENT FIST',
    physique: 'Dense Athletic',
    goal: 'Build functional mass, explosive power, thick legs and back',
    priority: ['Explosive Power', 'Full Body Strength', 'Conditioning'],
    trainingStyle: 'Plyometrics + Compound Lifts',
    colors: { primary: '#ec4899', secondary: '#f472b6', accent: '#1a0a1a', glow: '#ec489960' }
  },
  {
    id: 'goku',
    name: 'GOKU',
    series: 'Dragon Ball Z',
    emoji: '⚡',
    tag: 'SUPER SAIYAN',
    physique: 'Classic Muscular',
    goal: 'Build shoulder and arm mass while staying lean, classic proportions',
    priority: ['Muscle Mass', 'Shoulder Width', 'Leanness'],
    trainingStyle: 'Heavy Compounds + Martial Arts',
    colors: { primary: '#f59e0b', secondary: '#fbbf24', accent: '#1a1500', glow: '#f59e0b60' }
  },
  {
    id: 'baki',
    name: 'BAKI HANMA',
    series: 'Baki',
    emoji: '💀',
    tag: 'UNDERGROUND KING',
    physique: 'Extreme Shred',
    goal: 'Maximum definition, zero body fat, visible striations and vascularity',
    priority: ['Fat Loss', 'Core Definition', 'Vascularity'],
    trainingStyle: 'Grappling + Old-School Iron',
    colors: { primary: '#ef4444', secondary: '#f87171', accent: '#1a0000', glow: '#ef444460' }
  },
  {
    id: 'toji',
    name: 'TOJI FUSHIGURO',
    series: 'Jujutsu Kaisen',
    emoji: '🗡️',
    tag: 'SORCERER KILLER',
    physique: 'V-Taper Aesthetic',
    goal: 'Maximum shoulder-to-waist ratio, broad back, chiseled core',
    priority: ['Shoulder Width', 'Waist Reduction', 'Back Width'],
    trainingStyle: 'MMA + Compound Lifting',
    colors: { primary: '#22c55e', secondary: '#4ade80', accent: '#001a08', glow: '#22c55e60' }
  },
  {
    id: 'asta',
    name: 'ASTA',
    series: 'Black Clover',
    emoji: '⚔️',
    tag: 'ANTI-MAGIC DEVIL',
    physique: 'Compact Powerhouse',
    goal: 'Max muscle on smaller frame, big arms and back, shredded abs',
    priority: ['Arms', 'Back Width', 'Fat Loss'],
    trainingStyle: 'High-Rep Calisthenics + Carries',
    colors: { primary: '#dc2626', secondary: '#ef4444', accent: '#1a0000', glow: '#dc262660' }
  },
  {
    id: 'saitama',
    name: 'SAITAMA',
    series: 'One Punch Man',
    emoji: '👊',
    tag: 'CAPED BALDY',
    physique: 'Lean Athletic',
    goal: 'Lose fat, build baseline fitness, visible abs, total body endurance',
    priority: ['Fat Loss', 'Endurance', 'Core'],
    trainingStyle: 'OPM Calisthenics Routine',
    colors: { primary: '#eab308', secondary: '#facc15', accent: '#1a1200', glow: '#eab30860' }
  },
  {
    id: 'escanor',
    name: 'ESCANOR',
    series: 'Seven Deadly Sins',
    emoji: '☀️',
    tag: 'THE ONE',
    physique: 'Maximum Mass',
    goal: 'Pure size and strength — traps, shoulders, chest. Bulk focused.',
    priority: ['Trap Mass', 'Shoulder Size', 'Overall Bulk'],
    trainingStyle: 'Heavy Barbell Compounds',
    colors: { primary: '#f97316', secondary: '#fb923c', accent: '#1a0800', glow: '#f9731660' }
  },
  {
    id: 'garou',
    name: 'GAROU',
    series: 'One Punch Man',
    emoji: '🐺',
    tag: 'HERO HUNTER',
    physique: 'V-Taper Martial Artist',
    goal: 'Wide 3D shoulders, winged lats, slim waist, athletic explosive legs',
    priority: ['Shoulder Width', 'Lat Spread', 'Explosiveness'],
    trainingStyle: 'Martial Arts + Explosive Calisthenics',
    colors: { primary: '#94a3b8', secondary: '#cbd5e1', accent: '#0f1117', glow: '#94a3b860' }
  },
  {
    id: 'guts',
    name: 'GUTS',
    series: 'Berserk',
    emoji: '🗡️',
    tag: 'BLACK SWORDSMAN',
    physique: 'Raw Power',
    goal: 'Brutal strength and mass — shoulders, back, arms built to carry weight',
    priority: ['Raw Strength', 'Back Mass', 'Grip Strength'],
    trainingStyle: 'Heavy Carries + Powerlifting',
    colors: { primary: '#78716c', secondary: '#a8a29e', accent: '#0a0807', glow: '#78716c60' }
  },
  {
    id: 'maki',
    name: 'MAKI ZENIN',
    series: 'Jujutsu Kaisen',
    emoji: '🏹',
    tag: 'HEAVENLY RESTRICTION',
    physique: 'Lean & Toned',
    goal: 'Lean muscle, defined arms and shoulders, tight core, athletic legs',
    priority: ['Lean Muscle', 'Core Definition', 'Agility'],
    trainingStyle: 'HIIT Calisthenics + MMA',
    colors: { primary: '#10b981', secondary: '#34d399', accent: '#001a0f', glow: '#10b98160' }
  },
  {
    id: 'yoruichi',
    name: 'YORUICHI',
    series: 'Bleach',
    emoji: '⚡',
    tag: 'GODDESS OF FLASH',
    physique: 'Speed-Lean',
    goal: 'Explosive legs, defined core, low body fat, maximum agility',
    priority: ['Speed', 'Agility', 'Low Body Fat'],
    trainingStyle: 'Sprinting + Parkour + MMA',
    colors: { primary: '#a855f7', secondary: '#c084fc', accent: '#0f0020', glow: '#a855f760' }
  },
  {
    id: 'kale',
    name: 'KALE',
    series: 'Dragon Ball Super',
    emoji: '💚',
    tag: 'LEGENDARY SAIYAN',
    physique: 'Powerful & Strong',
    goal: 'Build maximum strength and muscle mass — thick legs, wide back, strong shoulders',
    priority: ['Leg Mass', 'Back Width', 'Overall Strength'],
    trainingStyle: 'Heavy Compound Lifts + Bulk',
    colors: { primary: '#16a34a', secondary: '#22c55e', accent: '#001a08', glow: '#16a34a60' }
  }
];

// ===========================
// DATA CONSTANTS
// ===========================

const RANKS = [
  { id: 'F',   label: 'F',        name: 'Beginner Hunter',   xpNeeded: 500,   color: '#94a3b8', questXP: 150 },
  { id: 'E',   label: 'E',        name: 'Iron Hunter',       xpNeeded: 1200,  color: '#22c55e', questXP: 200 },
  { id: 'D',   label: 'D',        name: 'Bronze Hunter',     xpNeeded: 2500,  color: '#3b82f6', questXP: 275 },
  { id: 'C',   label: 'C',        name: 'Silver Hunter',     xpNeeded: 5000,  color: '#06b6d4', questXP: 375 },
  { id: 'B',   label: 'B',        name: 'Gold Hunter',       xpNeeded: 9000,  color: '#a855f7', questXP: 500 },
  { id: 'A',   label: 'A',        name: 'Platinum Hunter',   xpNeeded: 15000, color: '#f59e0b', questXP: 700 },
  { id: 'S',   label: 'S',        name: 'Shadow Hunter',     xpNeeded: 25000, color: '#ef4444', questXP: 1000 },
  { id: 'NAT', label: '★',       name: 'National Level',    xpNeeded: 99999, color: '#f97316', questXP: 1500 },
];

const CHARACTER_QUESTS = {
  jinwoo: [
    { name: "Shadow Monarch's Ascent", exercises: [
      { name: 'Shadow Push-ups', target: '100 total reps' },
      { name: 'Gate Sprints', target: '10 km run' },
      { name: 'Dungeon Sit-ups', target: '100 total reps' },
      { name: 'Hunter Squats', target: '100 total reps' },
    ]},
    { name: "E-Rank Daily Trial", exercises: [
      { name: 'Stealth Pull-ups', target: '3 × 10 reps' },
      { name: 'Shadow Plank', target: '3 × 60 sec' },
      { name: 'Arise Leg Raises', target: '3 × 15 reps' },
      { name: 'System Run', target: '5 km' },
    ]},
  ],
  yuji: [
    { name: "Divergent Fist Training", exercises: [
      { name: 'Curse Burpees', target: '3 × 15 reps' },
      { name: 'Itadori Broad Jumps', target: '3 × 10 reps' },
      { name: 'Black Flash Push-ups', target: '4 × 20 reps' },
      { name: 'Jujutsu Sprint', target: '5 km' },
    ]},
    { name: "Sorcerer Conditioning", exercises: [
      { name: 'Explosive Squat Jumps', target: '3 × 12 reps' },
      { name: 'Cursed Pull-ups', target: '3 × 8 reps' },
      { name: 'Core Curse Holds', target: '3 × 45 sec' },
      { name: 'Bear Crawls', target: '3 × 20 meters' },
    ]},
  ],
  goku: [
    { name: "Super Saiyan Protocol", exercises: [
      { name: 'Kamehameha Push-ups', target: '4 × 20 reps' },
      { name: 'Gravity Chamber Squats', target: '4 × 15 reps' },
      { name: 'Saiyan Pull-ups', target: '4 × 10 reps' },
      { name: 'Zenkai Run', target: '8 km' },
    ]},
    { name: "Hyperbolic Time Chamber", exercises: [
      { name: 'Weighted Overhead Press', target: '4 × 10 reps' },
      { name: 'Dragon Fist Burpees', target: '3 × 20 reps' },
      { name: 'Saiyan Deadlift', target: '3 × 8 reps' },
      { name: 'Spirit Bomb Plank', target: '3 × 90 sec' },
    ]},
  ],
  baki: [
    { name: "Underground Arena Circuit", exercises: [
      { name: 'Grappler Push-ups', target: '5 × 20 reps' },
      { name: 'Neck Bridge Hold', target: '3 × 30 sec' },
      { name: 'Demon Back Rows', target: '4 × 12 reps' },
      { name: 'Hanma Sit-ups', target: '5 × 30 reps' },
    ]},
    { name: "Baki's Imaginary Training", exercises: [
      { name: 'Grip Crush Deadhangs', target: '3 × 60 sec' },
      { name: 'Wrestler Squats', target: '4 × 20 reps' },
      { name: 'Ogre Burpees', target: '3 × 15 reps' },
      { name: 'Core Devastation Plank', target: '3 × 90 sec' },
    ]},
  ],
  toji: [
    { name: "Sorcerer Killer Protocol", exercises: [
      { name: 'Assassin Pull-ups', target: '5 × 10 reps' },
      { name: 'V-Taper Lateral Raises', target: '4 × 15 reps' },
      { name: 'Heavenly Restriction Rows', target: '4 × 12 reps' },
      { name: 'Waist Carver Plank', target: '3 × 90 sec' },
    ]},
    { name: "Zenin Clan Annihilation", exercises: [
      { name: 'Chain Whip Dips', target: '4 × 15 reps' },
      { name: 'Killer Overhead Press', target: '3 × 10 reps' },
      { name: 'MMA Sprint Intervals', target: '6 × 200m' },
      { name: 'Oblique Assassin Twists', target: '3 × 20 reps' },
    ]},
  ],
  asta: [
    { name: "Anti-Magic Devil Training", exercises: [
      { name: 'Grimoire Sword Swings', target: '3 × 50 reps' },
      { name: 'Black Clover Push-ups', target: '5 × 20 reps' },
      { name: 'Peasant Farmer Carries', target: '3 × 40 meters' },
      { name: 'No Magic Pull-ups', target: '4 × 8 reps' },
    ]},
    { name: "Devil Union Conditioning", exercises: [
      { name: 'Yami Squat Challenge', target: '100 total reps' },
      { name: 'Tree Climb Pull-ups', target: '3 × 10 reps' },
      { name: 'Asta Run', target: '5 km' },
      { name: 'Devil Core Sit-ups', target: '100 total reps' },
    ]},
  ],
  saitama: [
    { name: "Hero for Fun Daily Grind", exercises: [
      { name: 'OPM Push-ups', target: '100 total reps' },
      { name: 'OPM Sit-ups', target: '100 total reps' },
      { name: 'OPM Squats', target: '100 total reps' },
      { name: 'Caped Baldy Run', target: '10 km' },
    ]},
    { name: "C-Class Warm-Up", exercises: [
      { name: 'Hero Push-ups', target: '3 × 20 reps' },
      { name: 'One Punch Squats', target: '3 × 30 reps' },
      { name: 'Serious Plank', target: '3 × 60 sec' },
      { name: 'Training Run', target: '5 km' },
    ]},
  ],
  escanor: [
    { name: "Pride of the Lion's Sin", exercises: [
      { name: 'Solar Overhead Press', target: '5 × 8 reps' },
      { name: 'Sunshine Bench Press', target: '5 × 8 reps' },
      { name: 'Escanor Trap Shrugs', target: '4 × 15 reps' },
      { name: 'Pride Deadlift', target: '4 × 6 reps' },
    ]},
    { name: "The One Absolute Form", exercises: [
      { name: 'Boulder Squat', target: '5 × 10 reps' },
      { name: 'Titan Push Press', target: '4 × 8 reps' },
      { name: 'Rhitta Carries', target: '3 × 40 meters' },
      { name: 'Lion Roar Pull-ups', target: '4 × 8 reps' },
    ]},
  ],
  garou: [
    { name: "Hero Hunt Conditioning", exercises: [
      { name: 'Water Stream Pull-ups', target: '4 × 10 reps' },
      { name: 'Monster Squat Jumps', target: '4 × 12 reps' },
      { name: 'Fist of Flowing Water Push-ups', target: '4 × 20 reps' },
      { name: 'Hero Hunter Run', target: '6 km' },
    ]},
    { name: "Breaking the Limiter", exercises: [
      { name: 'Garou Lateral Raises', target: '4 × 15 reps' },
      { name: 'Bang Style Dips', target: '4 × 12 reps' },
      { name: 'Adaptive Plank Hold', target: '3 × 90 sec' },
      { name: 'Jump Rope Circuit', target: '15 min' },
    ]},
  ],
  guts: [
    { name: "The Black Swordsman's Trial", exercises: [
      { name: 'Dragonslayer Deadlift', target: '4 × 6 reps' },
      { name: 'Berserker Pull-ups', target: '5 × 8 reps' },
      { name: 'Berserk Farmer Carries', target: '4 × 40 meters' },
      { name: 'Apostle Crusher Push-ups', target: '4 × 15 reps' },
    ]},
    { name: "Eclipse Survivor Protocol", exercises: [
      { name: 'Casca Overhead Press', target: '4 × 8 reps' },
      { name: 'Guts Squat', target: '4 × 10 reps' },
      { name: 'Iron Skin Plank', target: '3 × 120 sec' },
      { name: 'Endurance March', target: '8 km' },
    ]},
  ],
  maki: [
    { name: "Heavenly Restriction Drill", exercises: [
      { name: 'Cursed Tool Pull-ups', target: '4 × 10 reps' },
      { name: 'Zenin Clan Push-ups', target: '4 × 20 reps' },
      { name: 'Staff Stance Plank', target: '3 × 60 sec' },
      { name: 'Maki Sprint Drill', target: '5 km' },
    ]},
    { name: "Sorcerer Without Cursed Energy", exercises: [
      { name: 'Explosive Clap Push-ups', target: '3 × 12 reps' },
      { name: 'Box Jump Pistol Squat', target: '3 × 8 reps' },
      { name: 'Weapon Master Rows', target: '4 × 12 reps' },
      { name: 'HIIT Combat Circuit', target: '20 min' },
    ]},
  ],
  yoruichi: [
    { name: "Flash Step Training", exercises: [
      { name: 'Shunpo Sprint Intervals', target: '8 × 100m' },
      { name: 'Goddess of Flash Jumps', target: '3 × 20 reps' },
      { name: 'Onmitsukido Push-ups', target: '4 × 15 reps' },
      { name: 'Shadow Run', target: '5 km' },
    ]},
    { name: "Kido Corps Conditioning", exercises: [
      { name: 'Assassin Burpees', target: '4 × 15 reps' },
      { name: 'Yoruichi Core Holds', target: '3 × 60 sec' },
      { name: 'Parkour Box Jumps', target: '3 × 15 reps' },
      { name: 'Speed Ladder Drills', target: '15 min' },
    ]},
  ],
  kale: [
    { name: "Legendary Saiyan Awakening", exercises: [
      { name: 'Broly Squat', target: '5 × 10 reps' },
      { name: 'Saiyan Deadlift', target: '4 × 8 reps' },
      { name: 'Kale Power Row', target: '4 × 10 reps' },
      { name: 'Super Saiyan Run', target: '6 km' },
    ]},
    { name: "Universe 6 Power Protocol", exercises: [
      { name: 'Berserker Squat Press', target: '4 × 10 reps' },
      { name: 'Legendary Pull-ups', target: '4 × 8 reps' },
      { name: 'Green Titan Carries', target: '3 × 40 meters' },
      { name: 'Caulifla Core Sit-ups', target: '4 × 25 reps' },
    ]},
  ],
  default: [
    { name: "Hunter's Daily Protocol", exercises: [
      { name: 'Push-ups', target: '3 × 20 reps' },
      { name: 'Squats', target: '3 × 20 reps' },
      { name: 'Plank', target: '3 × 60 sec' },
      { name: 'Run', target: '3 km' },
    ]},
  ],
};

function getTodaysQuest() {
  const charId = state.characterId || 'default';
  const pool = CHARACTER_QUESTS[charId] || CHARACTER_QUESTS.default;
  const day = new Date().getDate() + new Date().getMonth() * 31;
  return pool[day % pool.length];
}

const ACHIEVEMENTS = [
  { id: 'first_quest',   icon: '⚔️', name: 'FIRST QUEST',     desc: 'Complete your first daily quest' },
  { id: 'streak_3',      icon: '🔥', name: '3-DAY STREAK',    desc: '3 days in a row' },
  { id: 'streak_7',      icon: '💥', name: '7-DAY STREAK',    desc: '7 days in a row' },
  { id: 'rank_e',        icon: '🟢', name: 'RANK E',          desc: 'Ascend to Iron Hunter' },
  { id: 'rank_d',        icon: '🔵', name: 'RANK D',          desc: 'Ascend to Bronze Hunter' },
  { id: 'rank_c',        icon: '🔷', name: 'RANK C',          desc: 'Ascend to Silver Hunter' },
  { id: 'rank_b',        icon: '🟣', name: 'RANK B',          desc: 'Ascend to Gold Hunter' },
  { id: 'rank_a',        icon: '🟡', name: 'RANK A',          desc: 'Ascend to Platinum Hunter' },
  { id: 'rank_s',        icon: '🔴', name: 'RANK S',          desc: 'Ascend to Shadow Hunter' },
  { id: 'log_10',        icon: '📋', name: '10 EXERCISES',    desc: 'Log 10 exercises total' },
  { id: 'log_50',        icon: '📊', name: '50 EXERCISES',    desc: 'Log 50 exercises total' },
  { id: 'quests_10',     icon: '🏆', name: '10 QUESTS',       desc: 'Complete 10 daily quests' },
];

// ===========================
// STATE
// ===========================

let state = {
  hunterName: '',
  xp: 0,
  level: 1,
  rankIndex: 0,
  streak: 0,
  lastQuestDate: null,
  questCompletedToday: false,
  questChecks: [],
  stats: { strength: 0, agility: 0, endurance: 0, discipline: 0 },
  workoutLog: [],
  activity: [],
  achievements: [],
  totalQuests: 0,
  totalLogEntries: 0,
};

// ===========================
// STORAGE
// ===========================

function saveState() {
  localStorage.setItem('arise_state', JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem('arise_state');
  if (raw) {
    try { state = { ...state, ...JSON.parse(raw) }; } catch(e) {}
  }
}

// ===========================
// UTILS
// ===========================

function todayStr() {
  return new Date().toISOString().split('T')[0];
}

function dateLabel() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).toUpperCase();
}

function currentRank() { return RANKS[state.rankIndex]; }

function xpForCurrentRank() {
  let total = 0;
  for (let i = 0; i < state.rankIndex; i++) total += RANKS[i].xpNeeded;
  return total;
}

function xpInCurrentRank() {
  return state.xp - xpForCurrentRank();
}

function xpNeededForNextRank() {
  return currentRank().xpNeeded;
}

// ===========================
// BOOT
// ===========================

window.addEventListener('load', () => {
  loadState();
  initTabs(); // always runs once, regardless of flow

  setTimeout(() => {
    document.getElementById('boot-screen').classList.add('hidden');

    if (!state.hunterName) {
      document.getElementById('onboarding').classList.remove('hidden');
    } else {
      launchApp();
    }
  }, 2400);
});

document.getElementById('begin-btn').addEventListener('click', () => {
  const name = document.getElementById('hunter-name-input').value.trim();
  if (!name) return;
  state.hunterName = name;
  saveState();
  document.getElementById('onboarding').classList.add('hidden');
  document.getElementById('character-select').classList.remove('hidden');
  renderCharacterSelect();
});

// ===========================
// LAUNCH APP
// ===========================

function launchApp() {
  checkDayRollover();
  document.getElementById('app').classList.remove('hidden');
  loadCharacterTheme();
  renderAll();
}

function checkDayRollover() {
  const today = todayStr();
  if (state.lastQuestDate && state.lastQuestDate !== today) {
    // New day — reset quest if not completed yesterday = penalize
    if (!state.questCompletedToday) {
      addXP(-50, false);
      addActivity('❌ Missed daily quest — 50 XP penalty');
    }
    state.questCompletedToday = false;
    state.questChecks = [];
  }
  if (!state.lastQuestDate) state.lastQuestDate = today;
}

// ===========================
// RENDER
// ===========================

function renderAll() {
  renderHeader();
  renderDashboard();
  renderQuestTab();
  renderProfile();
  renderLog();
}

function renderHeader() {
  document.getElementById('header-name').textContent = state.hunterName;
  document.getElementById('streak-count').textContent = state.streak;
  document.getElementById('gold-count').textContent = state.gold || 0;
}

function renderDashboard() {
  const rank = currentRank();
  const xpIn = xpInCurrentRank();
  const xpNeeded = xpNeededForNextRank();
  const pct = Math.min(100, Math.floor((xpIn / xpNeeded) * 100));

  document.getElementById('rank-badge').textContent = rank.label;
  document.getElementById('rank-badge').style.color = rank.color;
  document.getElementById('rank-badge').style.textShadow = `0 0 20px ${rank.color}80`;
  document.getElementById('rank-name').textContent = rank.name;
  document.getElementById('current-xp').textContent = xpIn.toLocaleString();
  document.getElementById('xp-needed').textContent = xpNeeded.toLocaleString();
  document.getElementById('xp-bar').style.width = pct + '%';
  document.getElementById('level-num').textContent = state.level;

  document.getElementById('stat-strength').textContent = state.stats.strength;
  document.getElementById('stat-agility').textContent = state.stats.agility;
  document.getElementById('stat-endurance').textContent = state.stats.endurance;
  document.getElementById('stat-discipline').textContent = state.stats.discipline;

  // Quest preview
  const quest = getTodaysQuest();
  document.getElementById('qp-title').textContent = quest.name;
  document.getElementById('qp-status').textContent = state.questCompletedToday ? '✅ COMPLETED' : '⚡ IN PROGRESS';

  // Recent activity
  const actDiv = document.getElementById('recent-activity');
  if (!state.activity || state.activity.length === 0) {
    actDiv.innerHTML = '<div class="no-activity">No activity yet. Complete your first quest.</div>';
  } else {
    actDiv.innerHTML = state.activity.slice(-5).reverse().map(a => `
      <div class="activity-item">
        <span>${a.text}</span>
        <span class="activity-xp">${a.xp > 0 ? '+' + a.xp + ' XP' : ''}</span>
      </div>
    `).join('');
  }
}

function renderQuestTab() {
  const quest = getTodaysQuest();
  const rank = currentRank();

  document.getElementById('quest-date').textContent = dateLabel();
  document.getElementById('quest-rank-tag').textContent = `RANK ${rank.label}`;
  document.getElementById('quest-xp-reward').textContent = `+${rank.questXP} XP`;

  document.getElementById('streak-banner').classList.remove('hidden');

  const currentFilter = window._questFilter || 'all';
  const allExercises = quest.exercises;
  const doneCount = state.questChecks.length;

  document.getElementById('filter-count-all').textContent = allExercises.length;
  document.getElementById('filter-count-active').textContent = allExercises.length - doneCount;
  document.getElementById('filter-count-done').textContent = doneCount;

  const box = document.getElementById('quest-box');
  box.innerHTML = allExercises.map((ex, i) => {
    const done = state.questChecks.includes(i);
    if (currentFilter === 'active' && done) return '';
    if (currentFilter === 'done' && !done) return '';

    const isTimed = ex.target.toLowerCase().includes('sec') || ex.target.toLowerCase().includes('min');
    const timerSecs = parseTimerSeconds(ex.target);

    return `
      <div class="quest-card ${done ? 'done' : ''}">
        <div class="quest-card-top">
          <div class="quest-card-left">
            <div class="quest-card-rank">[${rank.label}-RANK] <span>DAILY</span></div>
            <div class="quest-card-name">${ex.name}</div>
            <div class="quest-card-desc">${ex.target}</div>
          </div>
        </div>
        <div class="quest-card-bottom">
          <div class="quest-card-rewards">
            <span class="qc-xp">EXP +${Math.floor(rank.questXP / allExercises.length)}</span>
            <span class="qc-gold">GOLD +${Math.floor((rank.questXP / allExercises.length) * 0.4)}</span>
          </div>
          <div class="quest-card-btns">
            ${done
              ? `<span class="quest-card-done-tag">✓ DONE</span>`
              : `${isTimed ? `<button class="qc-btn timer-btn-card" onclick="openTimer('${ex.name}', ${timerSecs})">⏱ TIMER</button>` : ''}
                 <button class="qc-btn check" onclick="toggleQuestCheck(${i})">✓</button>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  const btn = document.getElementById('complete-quest-btn');
  const msg = document.getElementById('quest-complete-msg');
  if (state.questCompletedToday) {
    btn.disabled = true;
    msg.classList.remove('hidden');
  } else {
    btn.disabled = false;
    msg.classList.add('hidden');
  }
}

function extractTarget(targetStr) {
  const match = targetStr.match(/(\d+)\s*(reps|km|min|sec|laps|total)/i);
  return match ? match[1] : '?';
}

function parseTimerSeconds(targetStr) {
  const secMatch = targetStr.match(/(\d+)\s*sec/i);
  if (secMatch) return parseInt(secMatch[1]);
  const minMatch = targetStr.match(/(\d+)\s*min/i);
  if (minMatch) return parseInt(minMatch[1]) * 60;
  return 60;
}

function renderProfile() {
  const rank = currentRank();
  const initial = state.hunterName ? state.hunterName[0] : 'H';

  document.getElementById('avatar-initial').textContent = initial;
  document.getElementById('profile-hunter-name').textContent = state.hunterName;
  document.getElementById('profile-rank-full').textContent = `RANK ${rank.label} — ${rank.name.toUpperCase()}`;
  document.getElementById('profile-level').textContent = state.level;

  // Stat bars (max 100)
  const maxStat = 100;
  function setBar(bar, val, label) {
    document.getElementById('sbar-' + bar).style.width = Math.min(100, (val / maxStat) * 100) + '%';
    document.getElementById('sbv-' + bar).textContent = val;
  }
  setBar('str', state.stats.strength);
  setBar('agi', state.stats.agility);
  setBar('end', state.stats.endurance);
  setBar('dis', state.stats.discipline);

  // Achievements
  const grid = document.getElementById('achievements-list');
  grid.innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = state.achievements.includes(a.id);
    return `
      <div class="achieve-card ${unlocked ? 'unlocked' : 'locked'}" title="${a.desc}">
        <div class="achieve-icon">${a.icon}</div>
        <div class="achieve-name">${a.name}</div>
      </div>
    `;
  }).join('');

  // Rank road
  const road = document.getElementById('rank-road');
  road.innerHTML = RANKS.map((r, i) => {
    let cls = '';
    if (i < state.rankIndex) cls = 'done';
    else if (i === state.rankIndex) cls = 'current';
    return `
      <div class="rr-step ${cls}">
        <div class="rr-dot">${r.label}</div>
        <div class="rr-lbl">${r.id}</div>
      </div>
    `;
  }).join('');
}

function renderLog() {
  const list = document.getElementById('log-history');
  if (!state.workoutLog || state.workoutLog.length === 0) {
    list.innerHTML = '<div class="no-activity">No workouts logged yet.</div>';
    return;
  }
  list.innerHTML = state.workoutLog.slice().reverse().map(entry => `
    <div class="log-item">
      <div class="log-item-left">
        <div class="log-item-name">${entry.exercise}</div>
        <div class="log-item-detail">${entry.sets} sets × ${entry.reps} reps${entry.weight ? ' · ' + entry.weight + ' lbs' : ''}</div>
      </div>
      <div class="log-item-date">${entry.date}</div>
    </div>
  `).join('');
}

  // ===========================
// CHARACTER SELECT
// ===========================

function renderCharacterSelect() {
  const grid = document.getElementById('cs-grid');
  grid.innerHTML = CHARACTERS.map(c => `
    <div class="cs-card" data-id="${c.id}" onclick="selectCharacter('${c.id}')">
      <div class="cs-emoji">${c.emoji}</div>
      <div class="cs-name">${c.name}</div>
      <div class="cs-series">${c.series}</div>
      <div class="cs-tag">${c.tag}</div>
      <div class="cs-physique">${c.physique}</div>
    </div>
  `).join('');
}

function selectCharacter(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return;
  state.characterId = id;
  applyCharacterTheme(char);
  saveState();
  document.getElementById('character-select').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  renderAll();
}

function applyCharacterTheme(char) {
  const root = document.documentElement;
  root.style.setProperty('--blue', char.colors.primary);
  root.style.setProperty('--cyan', char.colors.secondary);
  root.style.setProperty('--blue-glow', char.colors.glow);
  root.style.setProperty('--purple', char.colors.accent);
  root.style.setProperty('--purple-l', char.colors.primary);
}

function loadCharacterTheme() {
  if (state.characterId) {
    const char = CHARACTERS.find(c => c.id === state.characterId);
    if (char) applyCharacterTheme(char);
  }
}

// ===========================
// TABS
// ===========================

function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(s => {
    s.classList.toggle('hidden', s.id !== 'tab-' + tabId);
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ===========================
// QUEST LOGIC
// ===========================

function toggleQuestCheck(idx) {
  if (state.questCompletedToday) return;
  const pos = state.questChecks.indexOf(idx);
  if (pos === -1) state.questChecks.push(idx);
  else state.questChecks.splice(pos, 1);
  saveState();
  renderQuestTab();
}

document.getElementById('complete-quest-btn').addEventListener('click', () => {
  if (state.questCompletedToday) return;

  const quest = getTodaysQuest();
  const totalExercises = quest.exercises.length;
  const completedCount = state.questChecks.length;

  // Must check at least half
  if (completedCount < Math.ceil(totalExercises / 2)) {
    showToast('Complete at least half the exercises to submit.');
    return;
  }

  const rank = currentRank();
  const bonusMultiplier = completedCount === totalExercises ? 1 : 0.6;
  const xpEarned = Math.floor(rank.questXP * bonusMultiplier);

  state.questCompletedToday = true;
  state.lastQuestDate = todayStr();
  state.totalQuests = (state.totalQuests || 0) + 1;

  // Streak
  state.streak = (state.streak || 0) + 1;

  // Stat gains
  state.stats.strength    = Math.min(100, state.stats.strength + 2);
  state.stats.agility     = Math.min(100, state.stats.agility + 1);
  state.stats.endurance   = Math.min(100, state.stats.endurance + 2);
  state.stats.discipline  = Math.min(100, state.stats.discipline + 3);

addXP(xpEarned, true);
const goldEarned = Math.floor(xpEarned * 0.5);
state.gold = (state.gold || 0) + goldEarned;  // ADD THIS LINE
addActivity(quest.name, xpEarned);

  checkAchievements();
  saveState();
  renderAll();
});

// ===========================
// XP & LEVEL
// ===========================

function addXP(amount, canRankUp = true) {
  state.xp = Math.max(0, state.xp + amount);
  // Level up every 200 xp
  const newLevel = Math.floor(state.xp / 200) + 1;
  state.level = newLevel;

  if (canRankUp) checkRankUp();
}

function checkRankUp() {
  const totalNeeded = RANKS.slice(0, state.rankIndex + 1).reduce((s, r) => s + r.xpNeeded, 0);
  if (state.xp >= totalNeeded && state.rankIndex < RANKS.length - 1) {
    state.rankIndex++;
    showRankUp(RANKS[state.rankIndex]);
  }
}

function showRankUp(rank) {
  const overlay = document.getElementById('rankup-overlay');
  document.getElementById('rankup-new-rank').textContent = rank.label;
  document.getElementById('rankup-new-rank').style.color = rank.color;
  document.getElementById('rankup-subtitle').textContent = rank.name.toUpperCase();
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.add('hidden'), 3000);
  addActivity(`RANKED UP to ${rank.label} — ${rank.name}`, 0);
}

// ===========================
// WORKOUT LOG SUBMISSION
// ===========================

document.getElementById('log-submit-btn').addEventListener('click', () => {
  const exercise = document.getElementById('log-exercise').value;
  const sets = parseInt(document.getElementById('log-sets').value);
  const reps = parseInt(document.getElementById('log-reps').value);
  const weight = document.getElementById('log-weight').value;

  if (!exercise || !sets || !reps) {
    showToast('Please fill in exercise, sets, and reps.');
    return;
  }

  const entry = {
    exercise,
    sets,
    reps,
    weight: weight || null,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  };

  if (!state.workoutLog) state.workoutLog = [];
  state.workoutLog.push(entry);
  state.totalLogEntries = (state.totalLogEntries || 0) + 1;

  // XP for logging
  const logXP = 25;
  addXP(logXP);
  addActivity(`Logged: ${exercise} (${sets}×${reps})`, logXP);

  // Stat gains from exercise type
  const name = exercise.toLowerCase();
  if (name.includes('push') || name.includes('bench') || name.includes('press') || name.includes('dip')) {
    state.stats.strength = Math.min(100, state.stats.strength + 1);
  }
  if (name.includes('pull') || name.includes('row') || name.includes('deadlift')) {
    state.stats.strength = Math.min(100, state.stats.strength + 1);
  }
  if (name.includes('squat') || name.includes('leg') || name.includes('running') || name.includes('cycling')) {
    state.stats.agility = Math.min(100, state.stats.agility + 1);
  }
  if (name.includes('run') || name.includes('jump') || name.includes('swim') || name.includes('plank')) {
    state.stats.endurance = Math.min(100, state.stats.endurance + 1);
  }

  checkAchievements();
  saveState();
  renderAll();

  // Reset form
  document.getElementById('log-exercise').value = '';
  document.getElementById('log-sets').value = '';
  document.getElementById('log-reps').value = '';
  document.getElementById('log-weight').value = '';

  showToast(`+${logXP} XP — ${exercise} logged!`);
});

// ===========================
// ACTIVITY FEED
// ===========================

function addActivity(text, xp = 0) {
  if (!state.activity) state.activity = [];
  state.activity.push({ text, xp, time: Date.now() });
  if (state.activity.length > 20) state.activity.shift();
}

// ===========================
// ACHIEVEMENTS
// ===========================

function checkAchievements() {
  if (!state.achievements) state.achievements = [];

  const unlock = (id) => {
    if (!state.achievements.includes(id)) {
      state.achievements.push(id);
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      if (ach) showToast(`🏆 Achievement Unlocked: ${ach.name}`);
    }
  };

  if (state.totalQuests >= 1)  unlock('first_quest');
  if (state.streak >= 3)       unlock('streak_3');
  if (state.streak >= 7)       unlock('streak_7');
  if (state.rankIndex >= 1)    unlock('rank_e');
  if (state.rankIndex >= 2)    unlock('rank_d');
  if (state.rankIndex >= 3)    unlock('rank_c');
  if (state.rankIndex >= 4)    unlock('rank_b');
  if (state.rankIndex >= 5)    unlock('rank_a');
  if (state.rankIndex >= 6)    unlock('rank_s');
  if ((state.totalLogEntries || 0) >= 10)  unlock('log_10');
  if ((state.totalLogEntries || 0) >= 50)  unlock('log_50');
  if ((state.totalQuests || 0) >= 10)      unlock('quests_10');
}

// ===========================
// TOAST NOTIFICATIONS
// ===========================

function showToast(msg) {
  // Remove existing
  const old = document.getElementById('toast');
  if (old) old.remove();

  const toast = document.createElement('div');
  toast.id = 'toast';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    background: #0d1220;
    border: 1px solid #1e2d45;
    border-radius: 6px;
    color: #e2e8f0;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    padding: 0.65rem 1.2rem;
    z-index: 8000;
    white-space: nowrap;
    box-shadow: 0 4px 24px #00000080;
    animation: toastIn 0.3s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform: translateX(-50%) translateY(10px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2800);
}

// ===========================
// RESET
// ===========================

document.getElementById('reset-btn').addEventListener('click', () => {
  if (confirm('RESET ALL HUNTER DATA? This cannot be undone.')) {
    localStorage.removeItem('arise_state');
    location.reload();
  }
});

// ===========================
// RANKUP OVERLAY CLICK TO DISMISS
// ===========================

document.getElementById('rankup-overlay').addEventListener('click', () => {
  document.getElementById('rankup-overlay').classList.add('hidden');
});

// ===========================
// QUEST FILTER
// ===========================

window._questFilter = 'all';

function setQuestFilter(filter) {
  window._questFilter = filter;
  document.querySelectorAll('.qf-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.filter === filter);
  });
  renderQuestTab();
}

// ===========================
// TIMER
// ===========================

let _timerInterval = null;
let _timerRemaining = 0;
let _timerTotal = 0;

function openTimer(name, seconds) {
  _timerRemaining = seconds;
  _timerTotal = seconds;
  clearInterval(_timerInterval);
  _timerInterval = null;

  document.getElementById('timer-ex-name').textContent = name.toUpperCase();
  document.getElementById('timer-countdown').textContent = seconds;
  document.getElementById('timer-target-label').textContent = `Target: ${seconds >= 60 ? (seconds/60) + ' min' : seconds + ' sec'}`;
  document.getElementById('timer-start-btn').textContent = 'START';

  const circle = document.getElementById('timer-svg-circle');
  circle.style.strokeDashoffset = '0';

  document.getElementById('timer-modal').classList.remove('hidden');
}

function timerStart() {
  if (_timerInterval) {
    clearInterval(_timerInterval);
    _timerInterval = null;
    document.getElementById('timer-start-btn').textContent = 'RESUME';
    return;
  }

  document.getElementById('timer-start-btn').textContent = 'PAUSE';
  const circumference = 327;
  const circle = document.getElementById('timer-svg-circle');

  _timerInterval = setInterval(() => {
    _timerRemaining--;
    document.getElementById('timer-countdown').textContent = _timerRemaining;
    const offset = circumference * (1 - _timerRemaining / _timerTotal);
    circle.style.strokeDashoffset = offset;

    if (_timerRemaining <= 0) {
      clearInterval(_timerInterval);
      _timerInterval = null;
      document.getElementById('timer-modal').classList.add('hidden');
      showToast('⏱ Timer complete! Mark exercise done.');
    }
  }, 1000);
}

function timerCancel() {
  clearInterval(_timerInterval);
  _timerInterval = null;
  document.getElementById('timer-modal').classList.add('hidden');
}

function incrementQuest(idx) {
  // Visual feedback only — full check still requires the ✓ button
  showToast('+1 rep logged');
}

// ===========================
// BOSS BATTLE
// ===========================

let bossState = { hp: 100, max: 100, defeated: false };

function bossStrike(isHeavy) {
  if (bossState.defeated) return;

  if (isHeavy) {
    if ((state.gold || 0) < 50) {
      showToast('Not enough gold for heavy strike!');
      return;
    }
    state.gold = (state.gold || 0) - 50;
    bossState.hp = Math.max(0, bossState.hp - 30);
  } else {
    bossState.hp = Math.max(0, bossState.hp - 10);
  }

  const pct = (bossState.hp / bossState.max) * 100;
  document.getElementById('boss-hp-bar').style.width = pct + '%';
  document.getElementById('boss-hp-cur').textContent = bossState.hp;
  document.getElementById('gold-count').textContent = state.gold || 0;

  if (bossState.hp <= 0) {
    bossState.defeated = true;
    document.getElementById('boss-strike-btn').disabled = true;
    document.getElementById('boss-heavy-btn').disabled = true;
    document.getElementById('boss-complete-msg').classList.remove('hidden');

    const xpReward = parseInt(document.getElementById('boss-reward-xp').textContent) || 300;
    const goldReward = parseInt(document.getElementById('boss-reward-gold').textContent) || 150;
    state.gold = (state.gold || 0) + goldReward;
    document.getElementById('gold-count').textContent = state.gold;
    addXP(xpReward);
    addActivity('⚔️ Boss Defeated!', xpReward);
    saveState();
    showToast(`Boss defeated! +${xpReward} XP +${goldReward}G`);
  }

  saveState();
}

// ===========================
// GOLD INIT
// ===========================

function renderGold() {
  document.getElementById('gold-count').textContent = state.gold || 0;
}