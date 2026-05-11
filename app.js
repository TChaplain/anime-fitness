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
    priority: ['Lean Calisthenics Muscle', 'Core & Ab Definition', 'Running Endurance', 'Shoulder V-Taper'],
    trainingStyle: 'High-Volume Calisthenics + Running',
    colors: { primary: '#7c3aed', secondary: '#a855f7', accent: '#1e1b4b', glow: '#7c3aed60' }
  },
  {
    id: 'yuji',
    name: 'YUJI ITADORI',
    series: 'Jujutsu Kaisen',
    emoji: '👊',
    tag: 'DIVERGENT FIST',
    physique: 'Dense Athletic',
    goal: 'Build a stocky, powerful frame — thick explosive legs, dense torso, powerful arms — the physique of a combat athlete, not a bodybuilder',
    priority: ['Explosive Leg Mass', 'Thick Torso & Core Density', 'Arm Power & Size', 'Full Body Conditioning'],
    trainingStyle: 'Plyometrics + Compound Lifts + Combat Training',
    colors: { primary: '#ec4899', secondary: '#f472b6', accent: '#1a0a1a', glow: '#ec489960' }
  },
  {
    id: 'goku',
    name: 'GOKU',
    series: 'Dragon Ball Z',
    emoji: '⚡',
    tag: 'SUPER SAIYAN',
    physique: 'Classic Muscular',
    goal: 'Build a perfect V-taper with full round shoulders, thick chest, and a tight waist — the golden ratio bodybuilder proportions',
    priority: ['Shoulder Roundness & Width', 'Upper Chest Fullness', 'Waist Tightness', 'Overall Leanness & Symmetry'],
    trainingStyle: 'Classic Bodybuilding + Martial Arts Conditioning',
    colors: { primary: '#f59e0b', secondary: '#fbbf24', accent: '#1a1500', glow: '#f59e0b60' }
  },
  {
    id: 'baki',
    name: 'BAKI HANMA',
    series: 'Baki',
    emoji: '💀',
    tag: 'UNDERGROUND KING',
    physique: 'X-Frame Shred',
    goal: 'Build massive traps, thick neck, wide back and lats, then shred to single-digit body fat to reveal striations, vascularity, and deep obliques',
    priority: ['Trap & Neck Thickness', 'Back Width & Lat Spread', 'Core Shred & Obliques', 'Leg Mass', 'Full Body Vascularity'],
    trainingStyle: 'Grappling + Old-School Iron + High-Volume Bodybuilding',
    colors: { primary: '#ef4444', secondary: '#f87171', accent: '#1a0000', glow: '#ef444460' }
  },
  {
    id: 'toji',
    name: 'TOJI FUSHIGURO',
    series: 'Jujutsu Kaisen',
    emoji: '🗡️',
    tag: 'SORCERER KILLER',
    physique: 'V-Taper Aesthetic',
    goal: 'Maximum shoulder-to-waist ratio with broad capped shoulders, winged lats, thick arms, and extremely low body fat — the perfect V-taper fighter physique',
    priority: ['Shoulder Width & Capped Delts', 'Lat Spread & Back Width', 'Waist Tightness', 'Arm Thickness', 'Low Body Fat'],
    trainingStyle: 'MMA + Compound Lifting + Functional Conditioning',
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
    physique: 'Maximum Upper Body Mass',
    goal: 'Disproportionately massive chest, traps, and shoulders that dwarf the lower body — pure upper body bulk and thickness above all else',
    priority: ['Chest Thickness & Upper Chest', 'Trap & Upper Back Mass', 'Shoulder Size & Roundness', 'Arm Thickness', 'Overall Bulk'],
    trainingStyle: 'Heavy Barbell Compounds + Powerbuilding',
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
    priority: ['Shoulder Width & 3D Delts', 'Lat Spread', 'Explosive Athletic Legs', 'Shredded Midsection'],
    trainingStyle: 'Calisthenics + Martial Arts + Explosive Training',
    colors: { primary: '#94a3b8', secondary: '#cbd5e1', accent: '#0f1117', glow: '#94a3b860' }
  },
  {
    id: 'guts',
    name: 'GUTS',
    series: 'Berserk',
    emoji: '🗡️',
    tag: 'BLACK SWORDSMAN',
    physique: 'Raw Power',
    goal: 'Build a battle-hardened powerbuilder physique — thick mid/lower back, massive arms and forearms, dense traps, low body fat to keep it functional not bulky',
    priority: ['Mid & Lower Back Thickness', 'Arm & Forearm Mass', 'Trap & Neck Density', 'Grip Strength', 'Low Body Fat'],
    trainingStyle: 'Powerlifting + Heavy Carries + Kettlebell Work',
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
    priority: ['Functional Calisthenics Strength', 'Explosive Power & Agility', 'Core Definition & Grip', 'Lean Athletic Conditioning'],
    trainingStyle: 'Progressive Calisthenics + HIIT + MMA',
    colors: { primary: '#10b981', secondary: '#34d399', accent: '#001a0f', glow: '#10b98160' }
  },
  {
    id: 'yoruichi',
    name: 'YORUICHI',
    series: 'Bleach',
    emoji: '⚡',
    tag: 'GODDESS OF FLASH',
    physique: 'Speed-Lean',
    goal: 'Explosive sprinter legs with defined glutes and quads, tight shredded core, lean upper body — built for speed and agility not mass',
    priority: ['Quad & Glute Development', 'Low Body Fat', 'Explosive Speed', 'Core Definition', 'Agility & Mobility'],
    trainingStyle: 'Sprinting + Plyometrics + MMA + Parkour',
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

const DUNGEON_RAIDS = {
  jinwoo: [
    {
      id: 'double_dungeon', rank: 'E', rankIndex: 1,
      name: "The Double Dungeon",
      desc: "A hidden dungeon beneath a D-rank gate. Statues that move. Commandments carved in stone. Survive the System's first test.",
      missions: [
        { name: 'Stone Guardian Sprint', desc: 'Run before the statues catch you', target: '3 km run' },
        { name: 'Commandment Push-ups', desc: 'One for each rule on the wall', target: '30 total reps' },
        { name: 'Arise Sit-ups', desc: 'Rise from the ground like a shadow', target: '30 total reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'red_gate', rank: 'D', rankIndex: 2,
      name: "Red Gate — Ice Bear's Den",
      desc: "A gate that seals on entry. Frozen wasteland. Ice Bears and Ice Elves block every path. No exit until the dungeon is cleared.",
      missions: [
        { name: 'Frozen Tundra Run', desc: 'Cover ground before the cold sets in', target: '5 km run' },
        { name: 'Ice Bear Takedowns', desc: 'Drop them before they drop you', target: '4 × 12 reps' },
        { name: 'Blizzard Plank', desc: 'Hold position in the storm', target: '3 × 60 sec' },
        { name: 'Shadow Extraction Pull-ups', desc: 'Rise up and claim your shadows', target: '3 × 10 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'instance_dungeon', rank: 'B', rankIndex: 4,
      name: "System Instance Dungeon",
      desc: "A dungeon only Jinwoo can see. Unique to the Player. The System has generated a trial specifically for your current level.",
      missions: [
        { name: 'Penalty Quest Push-ups', desc: 'The System demands 100', target: '100 total reps' },
        { name: 'Penalty Quest Sit-ups', desc: 'No mercy from the System', target: '100 total reps' },
        { name: 'Penalty Quest Squats', desc: 'Complete or face punishment', target: '100 total reps' },
        { name: 'System Run', desc: 'The original quest. Still applies.', target: '10 km run' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'monarchs_domain', rank: 'S', rankIndex: 6,
      name: "Domain of the Shadow Monarch",
      desc: "The throne room of Ashborn. An army of shadows waits. This is where the second Shadow Monarch proves his worth.",
      missions: [
        { name: 'Shadow Army Deployment', desc: 'Raise your soldiers from the ground', target: '5 × 20 reps' },
        { name: 'Monarch Deadlift', desc: 'Carry the weight of a kingdom', target: '5 × 8 reps' },
        { name: 'Sovereign Sprint', desc: 'Cross the shadow realm', target: '8 km run' },
        { name: 'Arise Conditioning', desc: 'The final trial of the monarch', target: '4 × 15 reps' },
        { name: 'Endurance Hold', desc: 'Stand as a ruler stands — unbroken', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  yuji: [
    {
      id: 'juvenile_detention', rank: 'E', rankIndex: 1,
      name: "Juvenile Detention — Curse Breakout",
      desc: "A curse has overrun a detention facility. Finger Bearers are loose. Clean it out before civilian casualties mount.",
      missions: [
        { name: 'Corridor Sprints', desc: 'Clear every hallway fast', target: '3 × 200m' },
        { name: 'Curse Takedown Burpees', desc: 'Drop the curses one by one', target: '3 × 15 reps' },
        { name: 'Restraint Holds', desc: 'Pin them down with raw strength', target: '3 × 45 sec' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'tokyo_high', rank: 'D', rankIndex: 2,
      name: "Tokyo Jujutsu High — Training Grounds",
      desc: "Gojo has locked you in the school training grounds. Semi-grade curses incoming. Survive and you graduate to the next level.",
      missions: [
        { name: 'Cursed Energy Squats', desc: 'Build the explosive legs Yuji is known for', target: '4 × 20 reps' },
        { name: 'Black Flash Conditioning', desc: 'Rate of force development — maximum intent', target: '3 × 12 reps' },
        { name: 'Divergent Fist Combos', desc: 'Shadow boxing, full power', target: '3 × 60 sec' },
        { name: 'Campus Run', desc: 'Lap the school grounds', target: '5 km run' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'mahito_domain', rank: 'B', rankIndex: 4,
      name: "Mahito's Domain — Idle Transfiguration",
      desc: "You've been pulled into Mahito's innate domain. The walls reshape. Your body is the only thing that's yours. Fight your way out.",
      missions: [
        { name: 'Soul Reinforcement Push-ups', desc: 'Harden your soul through reps', target: '5 × 20 reps' },
        { name: 'Transfiguration Evasion Run', desc: 'Keep moving or get reshaped', target: '6 km run' },
        { name: 'Full Cowl Squats', desc: 'Channel Sukuna\'s power into your legs', target: '4 × 15 reps' },
        { name: 'Idle Form Holds', desc: 'Resist the transfiguration', target: '4 × 60 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'shibuya_incident', rank: 'S', rankIndex: 6,
      name: "Shibuya Incident — Halloween Night",
      desc: "Thousands of civilians. Dozens of curses. No Gojo. Shibuya station is a warzone and you're the only one who can hit them.",
      missions: [
        { name: 'Station Assault Sprint', desc: 'Get through the crowds to the target', target: '8 km run' },
        { name: 'Black Flash Burpees', desc: 'Maximum power output, every rep', target: '5 × 15 reps' },
        { name: 'Disaster Curse Rows', desc: 'Pull them down before they escape', target: '5 × 12 reps' },
        { name: 'Sukuna Channel Holds', desc: 'Let the King\'s power flow — controlled', target: '3 × 90 sec' },
        { name: 'Final Stand Squats', desc: 'Legs that refuse to give out', target: '4 × 20 reps' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  goku: [
    {
      id: 'king_kai_planet', rank: 'E', rankIndex: 1,
      name: "King Kai's Planet",
      desc: "Ten times Earth's gravity. A tiny planet at the end of Snake Way. This is where Goku first learned the Kaio-ken. Your turn.",
      missions: [
        { name: 'Gravity Push-ups', desc: 'Every rep under 10x gravity', target: '4 × 15 reps' },
        { name: 'Snake Way Sprint', desc: 'The road that never ends', target: '5 km run' },
        { name: 'Chiaotzu Carry Squats', desc: 'Carry the load', target: '3 × 20 reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'planet_namek', rank: 'D', rankIndex: 2,
      name: "Planet Namek — Frieza's Assault",
      desc: "A dying planet with its own gravity. Frieza's forces everywhere. Fight through to reach the Dragon Balls before time runs out.",
      missions: [
        { name: 'Namekian Gravity Run', desc: 'Namek gravity — slightly higher than Earth', target: '6 km run' },
        { name: 'Frieza Force Push-ups', desc: 'Clear the soldiers', target: '4 × 20 reps' },
        { name: 'Kaioken Squats', desc: 'Double your output', target: '4 × 15 reps' },
        { name: 'Zenkai Sit-ups', desc: 'Get stronger from the beating', target: '4 × 20 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'hyperbolic_time_chamber', rank: 'B', rankIndex: 4,
      name: "Hyperbolic Time Chamber",
      desc: "One year inside. One day outside. 10x gravity. Thin air. Extreme temperatures. Goku and Gohan broke their limits here. Now it's yours.",
      missions: [
        { name: 'Super Saiyan Threshold Push-ups', desc: 'Push until transformation', target: '100 total reps' },
        { name: 'Gravity Chamber Deadlift', desc: 'Heavy compound under pressure', target: '4 × 8 reps' },
        { name: 'Endless Time Plank', desc: 'Time moves differently in here', target: '3 × 120 sec' },
        { name: 'Compressed Year Run', desc: 'A year\'s endurance in one session', target: '8 km run' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'tournament_of_power', rank: 'S', rankIndex: 6,
      name: "Tournament of Power — World's End Arena",
      desc: "No ring-outs forgiven here. 80 warriors. Universe survival on the line. Goku went Ultra Instinct in this arena. What will you unlock?",
      missions: [
        { name: 'Universal Pressure Squats', desc: 'The weight of a universe', target: '5 × 15 reps' },
        { name: 'Ultra Instinct Sprint', desc: 'React before you think', target: '10 km run' },
        { name: 'Spirit Bomb Overhead Press', desc: 'Gather energy from everything', target: '5 × 10 reps' },
        { name: 'Saiyan Beyond God Pull-ups', desc: 'Beyond your limits', target: '5 × 10 reps' },
        { name: 'Final Form Hold', desc: 'Hold the transformation', target: '3 × 90 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  baki: [
    {
      id: 'underground_arena', rank: 'E', rankIndex: 1,
      name: "Tokyo Underground Arena — First Blood",
      desc: "Below the Tokyo Dome. No rules. No weight classes. Fighters from across the world came here to test themselves. So did Baki at 13.",
      missions: [
        { name: 'Arena Entry Push-ups', dest: 'Earn your spot', target: '5 × 20 reps' },
        { name: 'Underground Sit-ups', desc: 'Core is everything in the pit', target: '50 total reps' },
        { name: 'Grappler Squats', desc: 'Low stance, explosive hips', target: '3 × 20 reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'death_row_challenge', rank: 'D', rankIndex: 2,
      name: "Death Row Convict Gauntlet",
      desc: "Five death row convicts escaped prisons worldwide to fight the strongest. Baki fought them all. One by one, they come for you.",
      missions: [
        { name: 'Convict Conditioning Pull-ups', desc: 'Prison strength — no equipment needed', target: '5 × 10 reps' },
        { name: 'Gauntlet Burpees', desc: 'Five opponents, five sets', target: '5 × 15 reps' },
        { name: 'Iron Neck Bridges', desc: 'The neck of a fighter, not a gym rat', target: '3 × 30 sec' },
        { name: 'Full Throttle Run', desc: 'Chase them down', target: '5 km run' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'pickle_fight', rank: 'B', rankIndex: 4,
      name: "Museum of Natural History — The Pickle Fight",
      desc: "A prehistoric man thawed from the ice. Pure instinct. No technique. Just millions of years of evolution and muscle memory. Good luck.",
      missions: [
        { name: 'Prehistoric Power Deadlifts', desc: 'Raw pulling strength', target: '4 × 8 reps' },
        { name: 'Primal Push-ups', desc: 'No finesse, just force', target: '100 total reps' },
        { name: 'Demon Back Rows', desc: 'Build the back that scares people', target: '5 × 12 reps' },
        { name: 'Survival Conditioning', desc: 'Outlast the prehistoric man', target: '3 × 90 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'yujiro_final', rank: 'S', rankIndex: 6,
      name: "Raitai Tournament — Father's Domain",
      desc: "The Ogre. The strongest creature on Earth. Yujiro Hanma is waiting. Every fight you've had was preparation for this moment.",
      missions: [
        { name: 'Ogre Conditioning Push-ups', desc: 'Match the Ogre\'s volume', target: '5 × 25 reps' },
        { name: 'Demon Back Deadlift', desc: 'Forge the back that looks like a demon', target: '5 × 6 reps' },
        { name: 'X-Frame Shred Run', desc: 'Burn the fat off the frame', target: '10 km run' },
        { name: 'Underground Champion Pull-ups', desc: 'The champion\'s pull', target: '5 × 12 reps' },
        { name: 'Hanma Core Plank', desc: 'The core of the Hanma bloodline', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  toji: [
    {
      id: 'tombs_corridor', rank: 'E', rankIndex: 1,
      name: "Tombs of the Star Corridor",
      desc: "The assassination contract that made Toji infamous. One target, impossible odds. He did it with zero cursed energy and a chain.",
      missions: [
        { name: 'Assassin Sprint', desc: 'Get in, get out', target: '3 × 200m' },
        { name: 'Sorcerer Killer Pull-ups', desc: 'The pull that defines the V-taper', target: '4 × 10 reps' },
        { name: 'Contract Plank', desc: 'Still as a shadow', target: '3 × 60 sec' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'gojo_young_fight', rank: 'D', rankIndex: 2,
      name: "Hidden Inventory Arc — Young Gojo's Limit",
      desc: "The only man to ever push Gojo Satoru to his absolute limit. No cursed energy. Just the body as weapon. The world watched.",
      missions: [
        { name: 'Heavenly Restriction Rows', desc: 'Your back without any cursed energy', target: '5 × 12 reps' },
        { name: 'Sorcerer Speed Intervals', desc: 'Faster than cursed techniques', target: '6 × 100m' },
        { name: 'Iron Body Push-ups', desc: 'No magic, just steel', target: '4 × 20 reps' },
        { name: 'Toji Lateral Raises', desc: 'Build the width that creates the V', target: '4 × 15 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'zenin_warehouse', rank: 'B', rankIndex: 4,
      name: "Zenin Clan Cursed Warehouse",
      desc: "A warehouse full of special grade cursed tools. Toji's natural habitat. He could use any of them — and he doesn't need cursed energy to do it.",
      missions: [
        { name: 'Weapon Master Dips', desc: 'Upper body built to wield anything', target: '4 × 15 reps' },
        { name: 'Cursed Tool Deadlift', desc: 'Carry the heavy weapons', target: '4 × 8 reps' },
        { name: 'Warehouse Sprint', desc: 'Navigate the space at full speed', target: '5 km run' },
        { name: 'V-Taper Overhead Press', desc: 'Shoulders that create the silhouette', target: '4 × 12 reps' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'reincarnation_battle', rank: 'S', rankIndex: 6,
      name: "Reincarnation — Toji Returns",
      desc: "A sorcerer's curse brought Toji back from the dead with 100% of his power. No mission. No contract. Just pure instinct and muscle memory.",
      missions: [
        { name: 'Reincarnation Pull-ups', desc: 'The body remembers everything', target: '5 × 12 reps' },
        { name: 'Instinct Sprints', desc: 'Move without thinking', target: '8 × 100m' },
        { name: 'Pure Physique Push-ups', desc: 'No technique. Just the body.', target: '100 total reps' },
        { name: 'Zero Cursed Energy Shred', desc: 'Cut to reveal the V-taper', target: '3 × 120 sec' },
        { name: 'Sorcerer Killer Final Form', desc: 'The completed physique of the Sorcerer Killer', target: '5 × 15 reps' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  asta: [
    {
      id: 'dungeon_exploration', rank: 'E', rankIndex: 1,
      name: "Clover Kingdom Dungeon — First Dive",
      desc: "Magic Knights dive into dungeons for treasure and intel. Asta went in with no mana and came out stronger. Your first gate awaits.",
      missions: [
        { name: 'Dungeon Entry Push-ups', desc: 'No magic, just muscle', target: '5 × 20 reps' },
        { name: 'Black Clover Sprint', desc: 'Run the dungeon corridors', target: '3 km run' },
        { name: 'Grimoire Sit-ups', desc: 'Core of a Black Bull', target: '50 total reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'underwater_temple', rank: 'D', rankIndex: 2,
      name: "Underwater Temple of the Sea God",
      desc: "Deep beneath the ocean. A gambler priest and his disciples guard the mana stone. Asta swam down with no mana and fought his way through.",
      missions: [
        { name: 'Deep Water Pull-ups', desc: 'Resistance in every direction', target: '4 × 10 reps' },
        { name: 'Temple Guardian Squats', desc: 'Heavy compound against the disciples', target: '4 × 20 reps' },
        { name: 'Sea God Carries', desc: 'Farmer carries through the deep', target: '3 × 40 meters' },
        { name: 'Anti-Magic Conditioning', desc: 'Hold position in the deep', target: '3 × 60 sec' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'spade_fortress', rank: 'B', rankIndex: 4,
      name: "Spade Kingdom Fortress Assault",
      desc: "The Dark Triad's fortress. Devils on every level. Asta went in to rescue Yami. Anti-magic against devil power — the only weapon that works.",
      missions: [
        { name: 'Fortress Breach Burpees', desc: 'Storm every floor', target: '5 × 15 reps' },
        { name: 'Devil Slayer Pull-ups', desc: 'Anti-magic requires a strong back', target: '5 × 10 reps' },
        { name: 'Black Bull Charge Run', desc: 'Charge the fortress', target: '6 km run' },
        { name: 'Liebe Union Push-ups', desc: 'Devil Union — double the output', target: '5 × 20 reps' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'qliphoth_underworld', rank: 'S', rankIndex: 6,
      name: "Tree of Qliphoth — Devil's Underworld",
      desc: "The underworld has opened. Seven levels of devils pouring into the world. Lucifero at the bottom. The boy from the peasant village stands against the king of devils.",
      missions: [
        { name: 'Qliphoth Descent Push-ups', desc: 'Deeper with every set', target: '100 total reps' },
        { name: 'Devil King Deadlift', desc: 'Lift against gravity itself', target: '5 × 8 reps' },
        { name: 'No Mana Sprint', desc: 'Run what magic cannot', target: '10 km run' },
        { name: 'Anti-Magic Rows', desc: 'The pulling strength to close a gate', target: '5 × 12 reps' },
        { name: 'Underworld Plank', desc: 'Stand between worlds', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  saitama: [
    {
      id: 'z_city_ghost_town', rank: 'E', rankIndex: 1,
      name: "Z-City Ghost Town — Mosquito Girl Outbreak",
      desc: "Genos's first battle. Saitama's first appearance. A Ghost Town overrun with Mosquito Girl's swarm. One punch solved it. Can you even get there?",
      missions: [
        { name: 'Ghost Town Jog', desc: 'Saitama\'s daily commute', target: '3 km run' },
        { name: 'Hero for Fun Push-ups', desc: 'First 33 of the daily hundred', target: '33 total reps' },
        { name: 'Mosquito Swat Squats', desc: 'Low stance, explosive up', target: '33 total reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'bang_dojo', rank: 'D', rankIndex: 2,
      name: "Bang's Dojo — Silver Fang Training",
      desc: "S-Class rank 3. Bang's Water Stream Rock Smashing Fist dojo sits on a mountain in Z-City. He invited Saitama in. Saitama trained his way.",
      missions: [
        { name: 'Dojo Push-ups', desc: 'The OPM basics never change', target: '100 total reps' },
        { name: 'Mountain Sit-ups', desc: 'A hundred every day', target: '100 total reps' },
        { name: 'Dojo Squats', desc: 'The third of three exercises', target: '100 total reps' },
        { name: 'Dojo Run', desc: 'Same run, every day', target: '5 km run' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'monster_association_hq', rank: 'B', rankIndex: 4,
      name: "Monster Association HQ — Underground Raid",
      desc: "1500 meters underground beneath Z-City Ghost Town. Over 500 monsters. Saitama wandered in looking for the noise. He found Orochi.",
      missions: [
        { name: 'Underground Descent Push-ups', desc: 'Level by level', target: '100 total reps' },
        { name: 'Orochi Chamber Squats', desc: 'The throne room fight', target: '4 × 25 reps' },
        { name: 'HQ Tunnel Run', desc: 'Navigate the underground', target: '6 km run' },
        { name: 'Monster Plank Hold', desc: 'Hold your ground', target: '3 × 90 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'boros_ship', rank: 'S', rankIndex: 6,
      name: "Lord Boros's Ship — Dominator of the Universe",
      desc: "A conqueror who traveled across the universe searching for a worthy opponent. He leveled A-City just landing. Saitama took the elevator to the roof.",
      missions: [
        { name: 'Hero for Fun Final Push-ups', desc: 'The last hundred', target: '100 total reps' },
        { name: 'Serious Series Squats', desc: 'No holding back', target: '100 total reps' },
        { name: 'Universal Run', desc: 'Saitama\'s serious run', target: '10 km run' },
        { name: 'Consecutive Normal Sit-ups', desc: 'A hundred more because why not', target: '100 total reps' },
        { name: 'Boros Final Stand Plank', desc: 'Hold the line against the universe', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  escanor: [
    {
      id: 'castellio_exile', rank: 'E', rankIndex: 1,
      name: "Kingdom of Castellio — The Exile Begins",
      desc: "A prince whose power emerged and terrified his own kingdom. Exiled. Wandering. Learning to carry weight that others cannot.",
      missions: [
        { name: 'Exile Carry Farmers Walk', desc: 'Carry what no one else can', target: '3 × 40 meters' },
        { name: 'Sunrise Push-ups', desc: 'Grow stronger as the sun rises', target: '4 × 15 reps' },
        { name: 'Outcast Squats', desc: 'Build before the world accepts you', target: '3 × 20 reps' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'lions_sin_tavern', rank: 'D', rankIndex: 2,
      name: "Boar Hat Tavern — The Pride Awakens",
      desc: "Where Escanor found his place among the Seven Deadly Sins. Where Merlin saw his power for the first time. The tavern that started everything.",
      missions: [
        { name: 'Rhitta Overhead Press', desc: 'Press the divine axe overhead', target: '5 × 8 reps' },
        { name: 'Lion Bench Press', desc: 'The chest of the Lion Sin', target: '5 × 10 reps' },
        { name: 'Trap Shrugs', desc: 'Traps that frame the upper body', target: '4 × 15 reps' },
        { name: 'Pride Deadlift', desc: 'The foundation of mass', target: '4 × 6 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'galand_fight', rank: 'B', rankIndex: 4,
      name: "Edinburgh — Galand's Judgement",
      desc: "Galand of the Ten Commandments. The demon whose touch turned people to stone. Escanor cleaved him in two at high noon with one swing of Rhitta.",
      missions: [
        { name: 'Solar Overhead Press', desc: 'Noon power — maximum output', target: '5 × 10 reps' },
        { name: 'Commandment Squat', desc: 'One for each commandment broken', target: '5 × 10 reps' },
        { name: 'Edinburgh Farmer Carries', desc: 'Heavy. Slow. Unstoppable.', target: '4 × 40 meters' },
        { name: 'High Noon Pull-ups', desc: 'Peak power, peak volume', target: '4 × 10 reps' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'the_one_form', rank: 'S', rankIndex: 6,
      name: "Camelot — The One Absolute Form",
      desc: "High noon. Escanor becomes The One — the invincible form that exists for only one minute. The strongest being alive. The sun itself.",
      missions: [
        { name: 'The One Push-ups', desc: 'Every rep at absolute peak', target: '100 total reps' },
        { name: 'Solar Gravity Deadlift', desc: 'The weight of the sun', target: '5 × 8 reps' },
        { name: 'Pride of the Lions Run', desc: 'The stride of the strongest', target: '8 km run' },
        { name: 'Sunshine Bench Press', desc: 'Chest first — always', target: '5 × 10 reps' },
        { name: 'Final Form Hold', desc: 'Hold The One form until the minute ends', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  garou: [
    {
      id: 'z_city_streets', rank: 'E', rankIndex: 1,
      name: "Z-City Streets — The Hero Hunt Begins",
      desc: "Garou declared war on heroes in Z-City. He started with B and A class heroes. He lost his dojo. He gained a mission.",
      missions: [
        { name: 'Street Fighter Pull-ups', desc: 'Garou\'s first night out', target: '3 × 10 reps' },
        { name: 'Hero Hunt Sprints', desc: 'Chase them through the streets', target: '3 × 200m' },
        { name: 'Martial Arts Plank', desc: 'Hold the ready stance', target: '3 × 45 sec' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'bang_dojo_garou', rank: 'D', rankIndex: 2,
      name: "Bang's Dojo — Before the Expulsion",
      desc: "Garou was Bang's greatest disciple before he went on a rampage. The same dojo that forged him now fuels his evolution.",
      missions: [
        { name: 'Water Stream Pull-ups', desc: 'The style that made Garou', target: '4 × 12 reps' },
        { name: 'Rock Smashing Push-ups', desc: 'Hard and fast', target: '4 × 20 reps' },
        { name: 'Limiter Breaking Lateral Raises', desc: 'Widen the shoulder to waist ratio', target: '4 × 15 reps' },
        { name: 'Dojo Sprint', desc: 'Mountain training', target: '5 km run' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'monster_cells', rank: 'B', rankIndex: 4,
      name: "Monsters Association Prison — Breaking the Limiter",
      desc: "Chained underground. Monster cells available. Garou rejected them all. He broke his own limits naturally, through pure combat.",
      missions: [
        { name: 'Natural Limiter Pull-ups', desc: 'No cells needed', target: '5 × 12 reps' },
        { name: 'Adaptive Squat Jumps', desc: 'Evolve mid-set', target: '4 × 15 reps' },
        { name: 'Adaptive Plank', desc: 'Hold until the body adapts', target: '3 × 90 sec' },
        { name: 'Hero Hunter Endurance Run', desc: 'Keep going even injured', target: '6 km run' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'cosmic_garou', rank: 'S', rankIndex: 6,
      name: "World's End — Cosmic Garou vs Saitama",
      desc: "God's power. Perfect counter to every technique. The most dangerous human in One Punch Man history. The final form before Saitama ended it.",
      missions: [
        { name: 'Cosmic Push-ups', desc: 'Channel the universe into every rep', target: '100 total reps' },
        { name: 'God Power Deadlift', desc: 'Cosmic gravity bearing down', target: '5 × 8 reps' },
        { name: 'World\'s End Sprint', desc: 'Run to the edge of human potential', target: '10 km run' },
        { name: 'Perfect Counter Rows', desc: 'Match every force with force', target: '5 × 12 reps' },
        { name: 'Evolution Hold', desc: 'Become more than human', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  guts: [
    {
      id: 'koka_town', rank: 'E', rankIndex: 1,
      name: "Koka Town — Snake Lord's Domain",
      desc: "Guts's first real fight as the Black Swordsman. A snake apostle terrorizing a town. The Dragon Slayer drawn for the first time in anger.",
      missions: [
        { name: 'Black Swordsman Push-ups', desc: 'The opening strike', target: '4 × 15 reps' },
        { name: 'Snake Lord Sprint', desc: 'Chase the apostle through town', target: '3 km run' },
        { name: 'Cannon Arm Core', desc: 'Stabilize for the shot', target: '3 × 45 sec' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'tower_of_conviction', rank: 'D', rankIndex: 2,
      name: "Tower of Conviction — Albion",
      desc: "Religious zealots. Possessed cultists. Father Mozgus and his angels on the roof. Guts fought his way up a crumbling tower to reach Casca.",
      missions: [
        { name: 'Tower Climb Pull-ups', desc: 'Floor by floor', target: '5 × 8 reps' },
        { name: 'Conviction Deadlift', desc: 'Lift with everything you have', target: '4 × 8 reps' },
        { name: 'Apostle Farmer Carries', desc: 'Carry what others cannot', target: '4 × 40 meters' },
        { name: 'Rooftop Push-ups', desc: 'The final fight at the top', target: '4 × 15 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'hill_of_swords', rank: 'B', rankIndex: 4,
      name: "Hill of Swords — Reunion with Griffith",
      desc: "A hill of grave markers. The graves of the Band of the Hawk. Guts stood here with rage and grief and swung at Griffith anyway. Zodd met him.",
      missions: [
        { name: 'Dragonslayer Deadlift', desc: 'Carry the weight of the Band', target: '5 × 6 reps' },
        { name: 'Grief and Rage Pull-ups', desc: 'The strength born from loss', target: '5 × 10 reps' },
        { name: 'Memorial Carries', desc: 'Carry their memory', target: '3 × 40 meters' },
        { name: 'Zodd Endurance Plank', desc: 'Hold against an immortal', target: '3 × 90 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'berserker_armor', rank: 'S', rankIndex: 6,
      name: "Elfhelm — Berserker Armor Unleashed",
      desc: "The armor that removes all limiters. Pain disappears. Wounds stop mattering. The body breaks itself to keep fighting. Guts paid every price.",
      missions: [
        { name: 'Berserker Push-ups', desc: 'Remove all limiters', target: '100 total reps' },
        { name: 'Dragonslayer Final Deadlift', desc: 'The heaviest pull of your life', target: '5 × 6 reps' },
        { name: 'Black Swordsman Endurance', desc: 'March through the pain', target: '10 km run' },
        { name: 'Armor Rows', desc: 'The back that carries war', target: '5 × 12 reps' },
        { name: 'Brand of Sacrifice Hold', desc: 'Hold through the pain', target: '4 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  maki: [
    {
      id: 'jujutsu_high_training', rank: 'E', rankIndex: 1,
      name: "Tokyo Jujutsu High — Proving Grounds",
      desc: "The family said she'd never be a sorcerer. She showed up anyway. Every day at Jujutsu High was a statement. This is where it started.",
      missions: [
        { name: 'Restriction Training Pull-ups', desc: 'No cursed energy. Just muscle.', target: '4 × 10 reps' },
        { name: 'Weapon Master Push-ups', desc: 'Upper body for the tools', target: '4 × 20 reps' },
        { name: 'Proving Ground Sprint', desc: 'Outrun the sorcerers', target: '3 km run' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'zenin_manor_assault', rank: 'D', rankIndex: 2,
      name: "Zenin Clan Manor — The Reckoning",
      desc: "The clan that denied her tried to kill her. She walked in alone after Mai's death. She left as the only one standing.",
      missions: [
        { name: 'Clan Assault Pull-ups', desc: 'Every rep for Mai', target: '5 × 10 reps' },
        { name: 'Restriction Push-ups', desc: 'Zero cursed energy, maximum force', target: '5 × 20 reps' },
        { name: 'Cursed Warehouse Sprint', desc: 'Through the compound', target: '5 km run' },
        { name: 'Playful Cloud Rows', desc: 'Wield the special grade weapon', target: '4 × 12 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'culling_game_colony', rank: 'B', rankIndex: 4,
      name: "Culling Game — Tokyo Colony",
      desc: "Kenjaku's death game. Barriers over real-world Japan. Maki entered to fight and rack up points. Her restriction made her untouchable in the colonies.",
      missions: [
        { name: 'Colony Assault Burpees', desc: 'Kill count climbing', target: '4 × 15 reps' },
        { name: 'Restriction Conditioning', desc: 'Superhuman physical output', target: '4 × 20 reps' },
        { name: 'Colony Sprint', desc: 'Cover the entire colony', target: '5 km run' },
        { name: 'Agility Plank', desc: 'Balance and core — combat ready', target: '3 × 60 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'toji_tier_maki', rank: 'S', rankIndex: 6,
      name: "Final Form — Toji Tier Restriction Complete",
      desc: "After Mai's death completed her restriction, Maki reached Toji's tier. Zero cursed energy. Superhuman body. The weapon that sorcery cannot track.",
      missions: [
        { name: 'Toji Tier Pull-ups', desc: 'The strength Toji had', target: '5 × 12 reps' },
        { name: 'Completed Restriction Push-ups', desc: 'Full output, no limits', target: '100 total reps' },
        { name: 'Heavenly Body Sprint', desc: 'Faster than cursed techniques', target: '8 km run' },
        { name: 'Playful Cloud Final Form', desc: 'Carry the invincible weapon', target: '5 × 15 reps' },
        { name: 'Weapon Stance Hold', desc: 'Still as the perfect fighter', target: '3 × 90 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  yoruichi: [
    {
      id: 'urahara_training_ground', rank: 'E', rankIndex: 1,
      name: "Urahara Shop — Underground Training Ground",
      desc: "Below the shop in the human world. Yoruichi trained here with Urahara as children beneath Sōkyoku Hill. This is where speed was born.",
      missions: [
        { name: 'Flash Step Sprints', desc: 'The first lesson in Shunpo', target: '4 × 100m' },
        { name: 'Onmitsukidō Push-ups', desc: 'Upper body for the assassin corps', target: '3 × 15 reps' },
        { name: 'Underground Core Hold', desc: 'Stillness before the flash', target: '3 × 45 sec' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'soul_society_infiltration', rank: 'D', rankIndex: 2,
      name: "Seireitei Infiltration — Breaking Into Soul Society",
      desc: "Yoruichi led Ichigo's team through Soul Society. She navigated the Seireitei alone while guiding the group. The Goddess of Flash at work.",
      missions: [
        { name: 'Seireitei Wall Sprint', desc: 'Over and through the walls', target: '6 × 100m' },
        { name: 'Shadow Run', desc: 'Move without being seen', target: '5 km run' },
        { name: 'Shunko Push-ups', desc: 'Kido reinforcing the body', target: '4 × 15 reps' },
        { name: 'Goddess Jumps', desc: 'Explosive leg power', target: '3 × 20 reps' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'sokyoku_hill_bankai', rank: 'B', rankIndex: 4,
      name: "Sōkyoku Hill — Bankai Training Ground",
      desc: "The hill Yoruichi and Urahara built as children. Where Ichigo and Renji achieved Bankai. Where Yoruichi herself forged her speed into legend.",
      missions: [
        { name: 'Hill Sprint Intervals', desc: 'Up and down Sōkyoku Hill', target: '8 × 100m' },
        { name: 'Hot Springs Recovery Run', desc: 'Active recovery in the mystic waters', target: '6 km run' },
        { name: 'Bankai Conditioning Burpees', desc: 'Compress years of training', target: '4 × 15 reps' },
        { name: 'Goddess of Flash Holds', desc: 'Hold Shunko charge position', target: '3 × 60 sec' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'aizen_final_battle', rank: 'S', rankIndex: 6,
      name: "Fake Karakura Town — Aizen Assault",
      desc: "The fake Karakura Town. Aizen with Hogyoku. Yoruichi appeared in armored form and attacked from above with enough force to destroy a city block.",
      missions: [
        { name: 'Shunko Armored Push-ups', desc: 'Reinforced body strikes', target: '100 total reps' },
        { name: 'Aerial Assault Jumps', desc: 'Drop from height, land running', target: '4 × 20 reps' },
        { name: 'Goddess Sprint', desc: 'The fastest in Soul Society', target: '10 km run' },
        { name: 'Thunder Clap Squats', desc: 'Explosive lower body from height', target: '5 × 15 reps' },
        { name: 'Flash Step Hold', desc: 'Compressed energy waiting to release', target: '3 × 90 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],

  kale: [
    {
      id: 'universe_6_tournament', rank: 'E', rankIndex: 1,
      name: "Tournament of Destroyers — First Appearance",
      desc: "Kale stood in the background while others fought. Then she transformed. Universe 6 had never seen power like hers. Neither had Universe 7.",
      missions: [
        { name: 'Universe 6 Squats', desc: 'Build the Saiyan foundation', target: '4 × 15 reps' },
        { name: 'Saiyan Push-ups', desc: 'The baseline for a Legendary', target: '4 × 20 reps' },
        { name: 'Caulifla Training Run', desc: 'Train alongside your friend', target: '3 km run' },
      ],
      xpReward: 300, goldReward: 150,
    },
    {
      id: 'legendary_awakening', rank: 'D', rankIndex: 2,
      name: "Universe 6 Arena — Legendary Super Saiyan Awakens",
      desc: "The Legendary Super Saiyan form appears once in generations. Broly in Universe 7. Kale in Universe 6. Uncontrolled power. Pure muscle.",
      missions: [
        { name: 'Legendary Deadlift', desc: 'The weight of a legend', target: '4 × 10 reps' },
        { name: 'Berserker Squat', desc: 'Low and powerful', target: '4 × 15 reps' },
        { name: 'Green Titan Rows', desc: 'Back width to match the power', target: '4 × 12 reps' },
        { name: 'Saiyan Run', desc: 'Cover ground at Saiyan speed', target: '5 km run' },
      ],
      xpReward: 600, goldReward: 300,
    },
    {
      id: 'tournament_of_power_kale', rank: 'B', rankIndex: 4,
      name: "Tournament of Power — Kefla Fusion",
      desc: "Kale and Caulifla fused into Kefla. The potara fusion of two Legendary Saiyans. The energy output overwhelmed Goku even in Ultra Instinct Sign.",
      missions: [
        { name: 'Fusion Power Squats', desc: 'Double the Saiyan output', target: '5 × 15 reps' },
        { name: 'Kefla Overhead Press', desc: 'Shoulder mass to match the fusion', target: '4 × 10 reps' },
        { name: 'Tournament Sprint', desc: 'Cover the arena', target: '6 km run' },
        { name: 'Legendary Pull-ups', desc: 'Back width for the strongest female Saiyan', target: '4 × 10 reps' },
      ],
      xpReward: 1200, goldReward: 600,
    },
    {
      id: 'super_dragon_ball_heroes', rank: 'S', rankIndex: 6,
      name: "Prison Planet — Legendary Super Saiyan Full Power",
      desc: "The controlled Legendary form. No more berserker rage. Full power, full awareness. The most powerful female Saiyan alive, in complete control.",
      missions: [
        { name: 'Full Power Squats', desc: 'Legendary control — maximum weight', target: '5 × 15 reps' },
        { name: 'Saiyan Deadlift', desc: 'The foundation of all Saiyan power', target: '5 × 8 reps' },
        { name: 'Legendary Run', desc: 'The stride of a legend', target: '10 km run' },
        { name: 'Titan Carries', desc: 'Carry the legacy of the Legendary Saiyan', target: '4 × 40 meters' },
        { name: 'Universe Plank', desc: 'Hold the power still', target: '3 × 120 sec' },
      ],
      xpReward: 2500, goldReward: 1250,
    },
  ],
};

function getTodaysQuest() {
  try {
    const charId = (state && state.characterId) ? state.characterId : 'default';
    const pool = CHARACTER_QUESTS[charId] || CHARACTER_QUESTS['default'];
    const day = new Date().getDate() + new Date().getMonth() * 31;
    const quest = pool[day % pool.length];
    const tier = (state && state.tier) ? state.tier : 'intermediate';

    // Deep clone so we never mutate the original data
    const scaled = {
      name: quest.name,
      exercises: quest.exercises.map(ex => ({
        name: ex.name,
        target: scaleTarget(ex.target, tier)
      }))
    };
    return scaled;
  } catch(e) {
    return CHARACTER_QUESTS['default'][0];
  }
}

function scaleTarget(target, tier) {
  if (tier === 'intermediate') return target;

  const up = tier === 'advanced';

  // '100 total reps' → scale the total
  if (/^\d+\s*total reps$/i.test(target)) {
    const n = parseInt(target);
    const scaled = up ? Math.round(n * 1.3 / 5) * 5 : Math.round(n * 0.7 / 5) * 5;
    return `${scaled} total reps`;
  }

  // 'N × M reps' → scale reps, keep sets
  if (/^\d+\s*×\s*\d+\s*reps$/i.test(target)) {
    const [sets, reps] = target.split('×').map(s => parseInt(s.trim()));
    const scaledReps = up ? Math.round(reps * 1.3) : Math.round(reps * 0.7);
    return `${sets} × ${scaledReps} reps`;
  }

  // 'N × M sec' → scale seconds, keep sets
  if (/^\d+\s*×\s*\d+\s*sec$/i.test(target)) {
    const [sets, secs] = target.split('×').map(s => parseInt(s.trim()));
    const scaledSecs = up ? Math.round(secs * 1.3 / 5) * 5 : Math.round(secs * 0.7 / 5) * 5;
    return `${sets} × ${scaledSecs} sec`;
  }

  // 'N km' → scale distance
  if (/^\d+(\.\d+)?\s*km$/i.test(target)) {
    const km = parseFloat(target);
    const scaledKm = up ? Math.round(km * 1.25 * 2) / 2 : Math.round(km * 0.7 * 2) / 2;
    return `${scaledKm} km`;
  }

  // 'N min' → scale duration
  if (/^\d+\s*min$/i.test(target)) {
    const mins = parseInt(target);
    const scaledMins = up ? Math.round(mins * 1.3 / 5) * 5 : Math.round(mins * 0.7 / 5) * 5;
    return `${scaledMins} min`;
  }

  // 'N × M meters' → scale meters, keep sets
  if (/^\d+\s*×\s*\d+\s*meters$/i.test(target)) {
    const [sets, meters] = target.split('×').map(s => parseInt(s.trim()));
    const scaledMeters = up ? Math.round(meters * 1.3 / 10) * 10 : Math.round(meters * 0.7 / 10) * 10;
    return `${sets} × ${scaledMeters} meters`;
  }

  // 'N × Mm' sprint intervals (e.g. '8 × 100m', '6 × 200m') → scale sets, keep distance
  if (/^\d+\s*×\s*\d+m$/i.test(target)) {
    const [sets, dist] = target.split('×').map(s => parseInt(s.trim()));
    const scaledSets = up ? sets + 2 : Math.max(2, sets - 2);
    return `${scaledSets} × ${dist}m`;
  }

  // Anything unrecognized — return as-is
  return target;
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
  gold: 0,
  characterId: '',
  assessmentDone: false,
  assessment: {},
  tier: 'beginner',
  physiqueRoadmap: [],
  questProgress: {},
  dungeonProgress: {},  // { gateId: { missions: [], completed: false } }
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
  loadCharacterTheme();
  if (!state.assessmentDone) {
    document.getElementById('character-select').classList.remove('hidden');
    renderCharacterSelect();
    return;
  }
  // Repair missing roadmap for existing saves
  if (state.assessmentDone) {
  buildPhysiqueRoadmap();
}
  document.getElementById('app').classList.remove('hidden');
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
  renderDungeons();
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
  if (!quest || !quest.exercises) return;
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
            ${!done && (state.questProgress[i] || 0) > 0 ? `<div class="quest-card-progress">LOGGED: ${state.questProgress[i]} reps</div>` : ''}
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
                <button class="qc-btn" onclick="incrementQuest(${i})">+1</button>
                <button class="qc-btn" onclick="incrementQuest(${i}, 5)">+5</button>
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

  // Physique Roadmap
  const roadmapEl = document.getElementById('physique-roadmap');
  if (roadmapEl && state.assessmentDone && (!state.physiqueRoadmap || state.physiqueRoadmap.length === 0)) {
  buildPhysiqueRoadmap();
}
if (roadmapEl && state.physiqueRoadmap && state.physiqueRoadmap.length > 0) {
    roadmapEl.innerHTML = state.physiqueRoadmap.map((s, i) => `
      <div class="phys-step">
        <div class="phys-phase">${s.phase}</div>
        <div class="phys-title">${s.title}</div>
        <div class="phys-desc">${s.desc}</div>
      </div>
    `).join('');
  }

  // Character path tag
  const pathTag = document.getElementById('profile-char-path');
  if (pathTag && state.characterId) {
    const char = CHARACTERS.find(c => c.id === state.characterId);
    pathTag.textContent = char ? `PATH: ${char.name} — ${char.physique}` : '';
  }
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
  startAssessment();
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
// ASSESSMENT
// ===========================

const ASSESS_STEPS = [
  {
    id: 'weight',
    question: 'What is your current body weight?',
    type: 'weight',
  },
  {
    id: 'bodyfat',
    question: 'How would you describe your current body?',
    type: 'options',
    options: [
      { label: 'Lean', sub: 'Can see abs or close to it', value: 'lean' },
      { label: 'Average', sub: 'Some muscle, some fat', value: 'average' },
      { label: 'Carrying Fat', sub: 'Want to lose noticeable weight', value: 'fat' },
      { label: 'Significantly Overweight', sub: 'Fat loss is the main priority', value: 'obese' },
    ]
  },
  {
    id: 'pushups',
    question: 'How many push-ups can you do in one set right now?',
    type: 'options',
    options: [
      { label: '0 – 5', sub: 'Just starting out', value: 'none' },
      { label: '6 – 15', sub: 'Getting there', value: 'low' },
      { label: '16 – 30', sub: 'Solid base', value: 'mid' },
      { label: '30+', sub: 'Strong foundation', value: 'high' },
    ]
  },
  {
    id: 'frequency',
    question: 'How often do you currently train?',
    type: 'options',
    options: [
      { label: 'Never / Just Starting', sub: 'No current routine', value: 'none' },
      { label: '1 – 2x per week', sub: 'Light activity', value: 'low' },
      { label: '3 – 4x per week', sub: 'Consistent', value: 'mid' },
      { label: '5+ per week', sub: 'Highly active', value: 'high' },
    ]
  },
  {
    id: 'goal',
    question: 'What is your primary goal right now?',
    type: 'options',
    options: [
      { label: 'Lose Fat First', sub: 'Cut before building', value: 'cut' },
      { label: 'Build Muscle', sub: 'Size and strength focus', value: 'bulk' },
      { label: 'Both Equally', sub: 'Recomposition', value: 'recomp' },
      { label: 'Pure Performance', sub: 'Speed, power, endurance', value: 'athletic' },
    ]
  },
];

let _assessStep = 0;
let _assessAnswers = {};
let _weightUnit = 'lbs';

function setWeightUnit(unit) {
  _weightUnit = unit;
  document.getElementById('unit-lbs').classList.toggle('active', unit === 'lbs');
  document.getElementById('unit-kg').classList.toggle('active', unit === 'kg');
}

function startAssessment() {
  // Skip assessment if already done
  if (state.assessmentDone) {
    document.getElementById('app').classList.remove('hidden');
    renderAll();
    return;
  }
  _assessStep = 0;
  _assessAnswers = {};
  const char = CHARACTERS.find(c => c.id === state.characterId);
  document.getElementById('assess-char-tag').textContent = `PATH TO ${char ? char.name : 'YOUR GOAL'}`;
  document.getElementById('assessment').classList.remove('hidden');
  renderAssessStep();
}

function renderAssessStep() {
  const step = ASSESS_STEPS[_assessStep];
  const total = ASSESS_STEPS.length;

  document.getElementById('assess-step-label').textContent = `STEP ${_assessStep + 1} OF ${total}`;
  document.getElementById('assess-progress-fill').style.width = `${((_assessStep) / total) * 100}%`;
  document.getElementById('assess-question').textContent = step.question;

  const optionsEl = document.getElementById('assess-options');
  const weightWrap = document.getElementById('assess-weight-wrap');

  if (step.type === 'weight') {
    optionsEl.innerHTML = '';
    optionsEl.classList.add('hidden');
    weightWrap.classList.remove('hidden');
    document.getElementById('assess-weight-val').value = '';
  } else {
    weightWrap.classList.add('hidden');
    optionsEl.classList.remove('hidden');
    optionsEl.innerHTML = step.options.map((opt, i) => `
      <div class="assess-option" onclick="selectAssessOption('${opt.value}')">
        <div class="assess-opt-label">${opt.label}</div>
        <div class="assess-opt-sub">${opt.sub}</div>
      </div>
    `).join('');
  }
}

function submitWeightStep() {
  const val = parseFloat(document.getElementById('assess-weight-val').value);
  if (!val || val < 50) { showToast('Please enter a valid weight.'); return; }
  const lbs = _weightUnit === 'kg' ? Math.round(val * 2.205) : val;
  _assessAnswers['weight'] = lbs;
  _assessAnswers['weightUnit'] = _weightUnit;
  advanceAssessment();
}

function selectAssessOption(value) {
  const step = ASSESS_STEPS[_assessStep];
  _assessAnswers[step.id] = value;

  // Flash selected
  document.querySelectorAll('.assess-option').forEach(el => el.classList.remove('selected'));
  event.currentTarget.classList.add('selected');

  setTimeout(() => advanceAssessment(), 300);
}

function advanceAssessment() {
  _assessStep++;
  if (_assessStep >= ASSESS_STEPS.length) {
    finishAssessment();
  } else {
    renderAssessStep();
  }
}

function finishAssessment() {
  // Calculate starting tier
  let score = 0;
  if (_assessAnswers.pushups === 'mid') score += 1;
  if (_assessAnswers.pushups === 'high') score += 2;
  if (_assessAnswers.frequency === 'mid') score += 1;
  if (_assessAnswers.frequency === 'high') score += 2;
  if (_assessAnswers.bodyfat === 'lean') score += 1;

  let tier = 'beginner';
  if (score >= 4) tier = 'advanced';
  else if (score >= 2) tier = 'intermediate';

  // Save to state
  state.assessment = _assessAnswers;
  state.tier = tier;
  state.assessmentDone = true;
  saveState();

  // Build physique gap analysis
  buildPhysiqueRoadmap();

  document.getElementById('assessment').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  renderAll();
  showToast(`Tier set: ${tier.toUpperCase()} — Path calibrated.`);
}

function buildPhysiqueRoadmap() {
  const char = CHARACTERS.find(c => c.id === state.characterId);
  if (!char) return;

  const bf = state.assessment.bodyfat;
  const goal = state.assessment.goal;
  const tier = state.tier;

  const steps = [];

  // Phase 0: Fat loss gate — only if they're carrying significant fat
  if (bf === 'fat' || bf === 'obese') {
    steps.push({
      phase: 'PHASE 1',
      title: 'Cut First — Reveal the Foundation',
      desc: `${char.name}'s physique only reads correctly at low body fat. Before building shape, you need to strip the excess. Caloric deficit + cardio + compound lifts 4x/week. Target: reach "average" body composition before Phase 2.`
    });
  }

  // Character-specific roadmap phases
  const ROADMAPS = {
    jinwoo: [
      { title: 'Build the Calisthenics Base', desc: 'Master push-ups, pull-ups, dips, and leg raises with volume. Jinwoo\'s body is built through high-rep bodyweight work — aim for 100 push-ups and 20 pull-ups before advancing.' },
      { title: 'Core & Ab Definition', desc: 'Visible abs are central to this physique. Daily weighted ab work — hanging leg raises, decline sit-ups, cable crunches. Target: visible 6-pack at 12% body fat or below.' },
      { title: 'Running Endurance', desc: 'Jinwoo runs constantly. Build to 10km at a steady pace, then add sprint intervals. This also keeps body fat low while building lean leg muscle.' },
      { title: 'Lean Muscle Polish', desc: 'Add weighted calisthenics — weighted pull-ups, ring dips, archer push-ups — to add density without bulk. Keep body fat under 12% throughout.' },
    ],
    yuji: [
      { title: 'Build Explosive Leg Power', desc: 'Yuji\'s physique starts from the ground up. Heavy squats, Romanian deadlifts, box jumps, and broad jumps 3x/week. Thick quads and hamstrings are his most defining feature.' },
      { title: 'Develop Torso Density', desc: 'A thick, blocky core and chest built for absorbing hits. Bench press, weighted dips, barbell rows, and heavy deadlifts. This isn\'t about aesthetics — it\'s about functional density.' },
      { title: 'Power & Arm Size', desc: 'Barbell curls, close-grip bench, dips, and push press for thick arms. Combine with plyometric push-ups and medicine ball slams for the explosive combat power.' },
      { title: 'Combat Conditioning', desc: 'Add conditioning circuits to keep body fat in the 10-14% range while maintaining mass. Sprint intervals, battle ropes, and heavy bag work 2x/week.' },
    ],
    goku: [
      { title: 'Build Round, 3D Shoulders', desc: 'The V-taper starts with shoulder width. Overhead press, lateral raises, rear delt flies, upright rows — hit all three delt heads. This is what creates Goku\'s iconic silhouette.' },
      { title: 'Develop Full Chest & Upper Back', desc: 'Flat and incline bench press, cable flyes for the upper chest. Barbell rows and lat pulldowns for the back. Together these create the wide frontal plane.' },
      { title: 'Tighten the Waist', desc: 'Goku has almost no waist. Avoid heavy oblique work that widens the midsection. Instead: plank variations, leg raises, and vacuum breathing to tighten the core wall.' },
      { title: 'Get Shredded — Reveal the Symmetry', desc: 'Cut to 8-11% body fat to reveal the proportions you\'ve built. At this stage everything comes together. Classic physique requires low body fat to see the V-taper properly.' },
    ],
    baki: [
      { title: 'Build Trap & Neck Thickness', desc: 'Baki\'s traps and neck are freakish — they frame his entire upper body. Heavy shrugs, face pulls, neck bridges, deadlifts, and farmer carries. This is what makes the X-frame silhouette visible from a distance.' },
      { title: 'Build Back Width & Lat Spread', desc: 'Wide lats create the top of the X. Pull-ups, lat pulldowns, straight-arm pulldowns, and dumbbell pullovers to build that demon back wingspan.' },
      { title: 'Oblique & Core Definition', desc: 'Baki\'s obliques are carved deep and his abs are thick. Weighted oblique work, hanging leg raises with a twist, dragon flags, and ab wheel rollouts. The waist must stay small for the X to read.' },
      { title: 'Leg Mass for the Bottom of the X', desc: 'Thick quads and hamstrings complete the X-frame. Heavy squats, leg press, Romanian deadlifts, and walking lunges. The legs need to match the upper body in width.' },
      { title: 'Shred to Single Digits', desc: 'Baki is visibly striated at full display. Cut to 6-9% body fat — every muscle needs to show. Increase cardio, tighten diet. Vascularity and striations only appear when body fat is extremely low.' },
    ],
    toji: [
      { title: 'Build Maximum Shoulder Width', desc: 'Toji\'s V-taper is defined by wide, capped shoulders. Heavy lateral raises, Arnold presses, cable lateral raises, upright rows. Make your shoulders the widest point of your body.' },
      { title: 'Widen the Back — Winged Lats', desc: 'Wide lats are the second pillar of the V-taper. Pull-ups, lat pulldowns, single-arm rows, and straight-arm cable pulldowns. The back should look like a pair of wings from the rear.' },
      { title: 'Tighten the Waist', desc: 'The ratio only works if the waist is small. No heavy side bends or oblique loading. Plank variations, ab vacuums, and leg raises to keep the waist tight and the V-taper sharp.' },
      { title: 'Cut & Reveal the V-Taper', desc: 'Toji stays lean year-round. Cut to 8-12% body fat to make the shoulder-to-waist ratio as dramatic as possible. At this stage the physique reads exactly like his.' },
    ],
    asta: [
      { title: 'Build Arm Size on a Compact Frame', desc: 'Asta is short with disproportionately thick arms. Barbell and dumbbell curls, close-grip bench, weighted dips, and tricep pushdowns for maximum arm size relative to frame.' },
      { title: 'Back Width for Visual Size', desc: 'Width matters more on a compact frame. Pull-ups, lat pulldowns, and dumbbell rows 3x/week. Wide lats make a shorter physique look much more impressive.' },
      { title: 'Cut for Shredded Abs', desc: 'Asta has no body fat. Get to sub-12% with high-rep conditioning work and a caloric deficit. His abs are thick and defined — direct weighted ab work daily.' },
      { title: 'Overall Density & Conditioning', desc: 'Carry work, high-rep calisthenics, and conditioning circuits to build the dense functional muscle that covers every inch of Asta\'s frame.' },
    ],
    saitama: [
      { title: 'Strip the Fat First', desc: 'Saitama is lean and athletic — not shredded. Get to 12-15% body fat through cardio and a moderate caloric deficit. The OPM routine (100 push-ups, sit-ups, squats + 10km run daily) works here literally.' },
      { title: 'Build Baseline Calisthenics Strength', desc: 'Push-ups, sit-ups, bodyweight squats, and running. Master these at high volume before adding resistance. Saitama\'s physique is functional, not bodybuilder-style.' },
      { title: 'Core Visibility', desc: 'A flat, defined stomach is the visual centerpiece. Lower ab work — leg raises, reverse crunches, planks — combined with diet to get visible abs at a comfortable body fat.' },
      { title: 'Maintain & Stay Lean', desc: 'The final phase is consistency. Saitama doesn\'t look like a bodybuilder — he looks like a guy who trains hard every single day. Consistent volume over time is the whole plan.' },
    ],
    escanor: [
      { title: 'Build a Massive Chest', desc: 'Escanor\'s chest is the first thing you see. Flat and incline barbell bench press as the primary movers. Add weighted dips and cable flyes. Prioritize upper chest to build the shelf-like appearance.' },
      { title: 'Overload the Traps & Upper Back', desc: 'Escanor\'s traps erupt from his neck and frame his entire upper body. Heavy barbell shrugs, power cleans, face pulls, and rack pulls. Traps should look disproportionately large.' },
      { title: 'Build Massive Round Shoulders', desc: 'Wide shoulders complete the overwhelming upper body. Seated overhead press, heavy lateral raises, and upright rows. Every head of the delt needs to be developed.' },
      { title: 'Add Arm Thickness', desc: 'Thick arms reinforce the overall mass. Heavy barbell curls, skull crushers, close-grip bench, and hammer curls. Arms should look proportionally large for the upper body.' },
      { title: 'Bulk Aggressively & Eat for Size', desc: 'Escanor\'s physique requires surplus eating. Caloric surplus of 300-500 above maintenance. Progressive overload on all major compounds every single week. This build takes years of consistent heavy work.' },
    ],
    garou: [
      { title: 'Build 3D Capped Shoulders', desc: 'Garou\'s silhouette is defined by wide, round shoulders. Lateral raises, overhead press, cable lateral raises, and rear delt flies. All three heads must be developed for the 3D look.' },
      { title: 'Build Winged Lats', desc: 'Pull-ups, lat pulldowns, straight-arm pulldowns, and rows. Garou\'s back tapers dramatically from shoulder to waist. Build the lats wide from every angle.' },
      { title: 'Develop Explosive Athletic Legs', desc: 'Garou has athletic, defined legs built for explosive movement. Bulgarian split squats, jump squats, box jumps, and sprints — not leg press machines. Lean and powerful, not bulky.' },
      { title: 'Cut to Reveal the V-Taper', desc: 'Get to 10-13% body fat. At this level the shoulder-to-waist ratio becomes dramatic and the martial artist aesthetic is clear. Garou is lean but not shredded — this is the target zone.' },
    ],
    guts: [
      { title: 'Build the Mid & Lower Back', desc: 'Guts\' most defining feature is his thick, slab-like back. Deadlifts, barbell rows, T-bar rows, and rack pulls build the mid and lower back thickness that makes him look like he was forged. This is the foundation.' },
      { title: 'Build Arm & Forearm Mass', desc: 'Thick arms and freakish forearms from carrying heavy weapons. Barbell curls, hammer curls, farmers carries, and dead hangs. The forearms specifically need direct loaded work — barbell wrist curls and reverse curls.' },
      { title: 'Build Trap & Neck Density', desc: 'Heavy shrugs, power shrugs, and farmer carries for trap thickness. Neck bridges for neck thickness. These combine with the back to create the battle-built upper body.' },
      { title: 'Powerbuilding & Leanness', desc: 'Guts is lean enough to show all the muscle with clear separation but not shredded. Target 10-14% body fat. Maintain with heavy compound work and minimal cardio — this is the powerbuilder zone.' },
    ],
    maki: [
      { title: 'Build Lean Muscle Across the Full Body', desc: 'Maki is lean, defined, and athletic — not bulky. Moderate weight, higher reps on compound lifts. Pull-ups, dips, squats, rows. Build muscle without adding unnecessary size.' },
      { title: 'Core Definition', desc: 'A tight, defined waist and visible abs are central to Maki\'s physique. Daily core work — planks, ab wheel, leg raises. Keep waist tight through diet and avoid heavy oblique loading that widens the midsection.' },
      { title: 'Agility & Athletic Conditioning', desc: 'HIIT circuits, sprint intervals, and agility ladder drills 2-3x/week. Maki is a fighter first — the conditioning work also keeps body fat low and maintains the lean athletic look.' },
      { title: 'Reach & Maintain 14-18% Body Fat', desc: 'The lean athletic physique reads best in this body fat range for women — visible muscle tone, no excess fat, athletic definition. Consistent diet management is the key to staying here long-term.' },
    ],
    yoruichi: [
      { title: 'Build Explosive Quad & Glute Development', desc: 'Yoruichi\'s legs are built like a sprinter\'s — thick quads, round glutes, defined hamstrings. Hip thrusts, Bulgarian split squats, Romanian deadlifts, and heavy squats. This is 60% of the work.' },
      { title: 'Sprint Training for Speed & Leg Definition', desc: 'Actual sprinting 2-3x/week defines the legs in a way weightlifting alone can\'t. 8x100m sprints or hill sprints. Sprinting builds the specific muscle distribution of a speed athlete.' },
      { title: 'Cut to Low Body Fat', desc: 'Lean, defined legs and a tight core require low body fat. Target 14-18% for women, maintaining through caloric discipline and cardio volume. The leg definition only fully appears when body fat is in this range.' },
      { title: 'Maintain Agility & Core Tightness', desc: 'Parkour-style conditioning, agility work, and core circuits to keep the waist tight and movement quality high. Yoruichi\'s physique is functional speed — not just aesthetics.' },
    ],
    kale: [
      { title: 'Build Maximum Leg Mass', desc: 'Kale\'s legs are her most distinctive feature — thick, powerful, and wide. Heavy back squats, leg press, Romanian deadlifts, and walking lunges with volume. Legs need to be trained like a top priority, not an afterthought.' },
      { title: 'Build a Wide, Thick Back', desc: 'Weighted pull-ups, barbell rows, T-bar rows, and lat pulldowns. A wide back combined with thick legs creates the powerful overall frame.' },
      { title: 'Build Overall Shoulder & Strength Mass', desc: 'Heavy overhead press, lateral raises, and shrugs to broaden the shoulders and complete the powerful silhouette. Everything should look proportionally large.' },
      { title: 'Bulk Phase — Eat for Size', desc: 'Kale\'s build requires actual mass. Eat in a moderate caloric surplus (200-400 over maintenance) while training heavy. This physique is not compatible with staying lean — prioritize building the size first, then refine.' },
    ],
  };

  const charPhases = ROADMAPS[char.id] || ROADMAPS['jinwoo'];

  charPhases.forEach((p, i) => {
    steps.push({
      phase: `PHASE ${steps.length + 1}`,
      title: p.title,
      desc: p.desc
    });
  });

  steps.push({
    phase: `PHASE ${steps.length + 1}`,
    title: 'Final Form — Maintain & Refine',
    desc: `You've built the foundation of ${char.name}'s physique. Now it's about consistency, progressive overload, and locking in the diet. The final form isn't a destination — it's a standard you hold.`
  });

  state.physiqueRoadmap = steps;
  saveState();
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

function incrementQuest(idx, amount = 1) {
  if (state.questCompletedToday) return;
  if (!state.questProgress) state.questProgress = {};
  state.questProgress[idx] = (state.questProgress[idx] || 0) + amount;
  saveState();
  renderQuestTab();
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

// ===========================
// DUNGEON RAIDS
// ===========================

function getDungeonGates() {
  const charId = state.characterId || 'default';
  return DUNGEON_RAIDS[charId] || DUNGEON_RAIDS['jinwoo'];
}

function renderDungeons() {
  function renderDungeons() {
  const list = document.getElementById('dungeon-gate-list');
  if (!list) return;

  if (!state.characterId) {
    list.innerHTML = '<div class="no-activity">Select a character to access dungeon gates.</div>';
    return;
  }

  const gates = getDungeonGates();
  if (!gates || gates.length === 0) {
    list.innerHTML = '<div class="no-activity">No gates found for this character.</div>';
    return;
  }
  const playerRankIndex = state.rankIndex;

  list.innerHTML = gates.map(gate => {
    const locked = gate.rankIndex > playerRankIndex;
    const dp = (state.dungeonProgress || {})[gate.id] || {};
    const completedMissions = dp.missions || [];
    const fullyCleared = dp.completed || false;
    const inProgress = completedMissions.length > 0 && !fullyCleared;

    const rankColors = {
      'E': '#22c55e', 'D': '#3b82f6', 'B': '#a855f7', 'S': '#ef4444'
    };
    const rankColor = rankColors[gate.rank] || '#94a3b8';

    if (locked) {
      return `
        <div class="gate-card locked">
          <div class="gate-lock-overlay">
            <div class="gate-lock-icon">🔒</div>
            <div class="gate-lock-text">REACH RANK ${gate.rank} TO UNLOCK</div>
          </div>
          <div class="gate-card-inner blurred">
            <div class="gate-rank-tag" style="color:${rankColor};border-color:${rankColor}30">${gate.rank}-RANK GATE</div>
            <div class="gate-name">${gate.name}</div>
            <div class="gate-desc">${gate.desc}</div>
          </div>
        </div>
      `;
    }

    if (fullyCleared) {
      return `
        <div class="gate-card cleared">
          <div class="gate-card-inner">
            <div class="gate-rank-tag" style="color:${rankColor};border-color:${rankColor}30">${gate.rank}-RANK GATE</div>
            <div class="gate-name">${gate.name}</div>
            <div class="gate-cleared-badge">⚔️ GATE CLEARED</div>
            <div class="gate-rewards">
              <span class="gate-xp">+${gate.xpReward} XP</span>
              <span class="gate-gold">+${gate.goldReward}G</span>
            </div>
          </div>
        </div>
      `;
    }

    if (inProgress) {
      return `
        <div class="gate-card active" id="gate-active-${gate.id}">
          <div class="gate-card-inner">
            <div class="gate-rank-tag" style="color:${rankColor};border-color:${rankColor}30">${gate.rank}-RANK GATE</div>
            <div class="gate-name">${gate.name}</div>
            <div class="gate-progress-label">MISSIONS: ${completedMissions.length} / ${gate.missions.length}</div>
            <div class="gate-mission-list">
              ${gate.missions.map((m, i) => {
                const done = completedMissions.includes(i);
                return `
                  <div class="gate-mission ${done ? 'mission-done' : ''}">
                    <div class="gate-mission-left">
                      <div class="gate-mission-name">${m.name}</div>
                      <div class="gate-mission-desc">${m.desc}</div>
                      <div class="gate-mission-target">${m.target}</div>
                    </div>
                    <div class="gate-mission-right">
                      ${done
                        ? `<span class="mission-done-tag">✓</span>`
                        : `<button class="mission-complete-btn" onclick="completeDungeonMission('${gate.id}', ${i})">DONE</button>`
                      }
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
            <div class="gate-rewards">
              <span class="gate-xp">+${gate.xpReward} XP</span>
              <span class="gate-gold">+${gate.goldReward}G</span>
            </div>
          </div>
        </div>
      `;
    }

    // Default: available, not started
    return `
      <div class="gate-card">
        <div class="gate-card-inner">
          <div class="gate-rank-tag" style="color:${rankColor};border-color:${rankColor}30">${gate.rank}-RANK GATE</div>
          <div class="gate-name">${gate.name}</div>
          <div class="gate-desc">${gate.desc}</div>
          <div class="gate-meta">
            <span class="gate-missions-count">${gate.missions.length} MISSIONS</span>
            <div class="gate-rewards">
              <span class="gate-xp">+${gate.xpReward} XP</span>
              <span class="gate-gold">+${gate.goldReward}G</span>
            </div>
          </div>
          <button class="enter-gate-btn" onclick="enterGate('${gate.id}')">ENTER GATE →</button>
        </div>
      </div>
    `;
  }).join('');
}

function enterGate(gateId) {
  if (!state.dungeonProgress) state.dungeonProgress = {};
  if (!state.dungeonProgress[gateId]) {
    state.dungeonProgress[gateId] = { missions: [], completed: false };
  }
  saveState();
  renderDungeons();
  showToast('Gate entered — complete all missions to clear it.');
}

function completeDungeonMission(gateId, missionIndex) {
  if (!state.dungeonProgress) state.dungeonProgress = {};
  if (!state.dungeonProgress[gateId]) {
    state.dungeonProgress[gateId] = { missions: [], completed: false };
  }

  const dp = state.dungeonProgress[gateId];
  if (dp.missions.includes(missionIndex)) return;

  dp.missions.push(missionIndex);

  const gate = getDungeonGates().find(g => g.id === gateId);
  if (!gate) return;

  if (dp.missions.length >= gate.missions.length) {
    dp.completed = true;
    state.gold = (state.gold || 0) + gate.goldReward;
    addXP(gate.xpReward);
    addActivity(`⚔️ Gate Cleared: ${gate.name}`, gate.xpReward);
    checkAchievements();
    showToast(`Gate cleared! +${gate.xpReward} XP +${gate.goldReward}G`);
  } else {
    showToast(`Mission complete — ${gate.missions.length - dp.missions.length} remaining.`);
  }

  saveState();
  renderAll();
}