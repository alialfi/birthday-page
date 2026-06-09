// ===== CONFIGURATION =====
const CONFETTI_COUNT = 60;
const HEART_EMOJIS = ['💖', '💗', '💕', '💝', '💞', '🩷', '🌸', '🦋', '✨'];
const BALLOON_COLORS = [
  'linear-gradient(135deg, #FF69B4, #FF1493)',
  'linear-gradient(135deg, #FFB6C1, #FF69B4)',
  'linear-gradient(135deg, #DDA0DD, #BA55D3)',
  'linear-gradient(135deg, #87CEEB, #4682B4)',
  'linear-gradient(135deg, #98FB98, #3CB371)',
  'linear-gradient(135deg, #FFD700, #FFA500)',
  'linear-gradient(135deg, #FF6B6B, #EE5A24)',
  'linear-gradient(135deg, #A8E6CF, #55E6C1)',
];
const CONFETTI_COLORS = [
  '#FF69B4', '#FF1493', '#FFB6C1', '#DDA0DD',
  '#87CEEB', '#FFD700', '#FFA500', '#98FB98',
  '#FF6B6B', '#BA55D3', '#00CED1', '#FF4500',
  '#7B68EE', '#FF85A2', '#FFC0CB',
];
const RIBBON_COLORS = [
  '#FF69B4', '#FFD700', '#87CEEB', '#DDA0DD',
  '#FFB6C1', '#98FB98', '#FF6B6B', '#BA55D3',
];

// ===== CONFETTI GENERATOR =====
function createConfetti() {
  const container = document.getElementById('confettiContainer');
  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    const shapes = ['rectangle', 'circle', 'strip'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.backgroundColor = color;
    confetti.style.animationDuration = (Math.random() * 4 + 4) + 's';
    confetti.style.animationDelay = (Math.random() * 8) + 's';
    confetti.style.opacity = (Math.random() * 0.4 + 0.5).toString();

    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
      confetti.style.width = (Math.random() * 8 + 6) + 'px';
      confetti.style.height = confetti.style.width;
    } else if (shape === 'strip') {
      confetti.style.width = (Math.random() * 4 + 3) + 'px';
      confetti.style.height = (Math.random() * 16 + 14) + 'px';
      confetti.style.borderRadius = '2px';
    } else {
      confetti.style.width = (Math.random() * 8 + 8) + 'px';
      confetti.style.height = (Math.random() * 6 + 10) + 'px';
      confetti.style.borderRadius = '2px';
    }

    container.appendChild(confetti);
  }
}

// ===== FLOATING HEARTS GENERATOR =====
function createFloatingHearts() {
  const container = document.getElementById('heartsContainer');
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (Math.random() * 18 + 14) + 'px';
    heart.style.animationDuration = (Math.random() * 6 + 6) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(heart);
  }
}

// ===== SPARKLES GENERATOR =====
function createSparkles() {
  const container = document.getElementById('sparklesContainer');
  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = (Math.random() * 5) + 's';
    sparkle.style.animationDuration = (Math.random() * 2 + 2) + 's';
    sparkle.style.width = (Math.random() * 4 + 3) + 'px';
    sparkle.style.height = sparkle.style.width;

    const colors = ['#FFD700', '#FF69B4', '#87CEEB', '#FFF', '#DDA0DD'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.background = color;
    sparkle.style.boxShadow = `0 0 6px 2px ${color}80`;

    container.appendChild(sparkle);
  }
}

// ===== STARS GENERATOR =====
function createStars() {
  const container = document.getElementById('starsContainer');
  const starEmojis = ['⭐', '🌟', '✨', '💫'];
  for (let i = 0; i < 12; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 80 + '%';
    star.style.animationDelay = (Math.random() * 6) + 's';
    star.style.animationDuration = (Math.random() * 3 + 3) + 's';
    star.style.fontSize = (Math.random() * 10 + 12) + 'px';
    container.appendChild(star);
  }
}

// ===== BALLOONS GENERATOR =====
function createBalloons() {
  const container = document.getElementById('balloonsContainer');
  for (let i = 0; i < 8; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = (Math.random() * 90 + 5) + '%';
    balloon.style.background = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
    balloon.style.animationDuration = (Math.random() * 8 + 10) + 's';
    balloon.style.animationDelay = (Math.random() * 12) + 's';

    const size = Math.random() * 20 + 50;
    balloon.style.width = size + 'px';
    balloon.style.height = (size * 1.25) + 'px';

    container.appendChild(balloon);
  }
}

// ===== RIBBONS GENERATOR =====
function createRibbons() {
  const container = document.getElementById('ribbonContainer');
  for (let i = 0; i < 20; i++) {
    const ribbon = document.createElement('div');
    ribbon.className = 'ribbon';
    ribbon.style.left = Math.random() * 100 + '%';
    ribbon.style.backgroundColor = RIBBON_COLORS[Math.floor(Math.random() * RIBBON_COLORS.length)];
    ribbon.style.animationDuration = (Math.random() * 4 + 5) + 's';
    ribbon.style.animationDelay = (Math.random() * 10) + 's';
    ribbon.style.width = (Math.random() * 5 + 4) + 'px';
    ribbon.style.height = (Math.random() * 40 + 50) + 'px';
    ribbon.style.opacity = (Math.random() * 0.4 + 0.3).toString();
    container.appendChild(ribbon);
  }
}

// ===== CONFETTI BURST ON CLICK =====
function confettiBurst(x, y) {
  const burstCount = 30;
  for (let i = 0; i < burstCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = (Math.random() * 8 + 4) + 'px';
    particle.style.height = (Math.random() * 8 + 4) + 'px';
    particle.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
    particle.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '100';
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / burstCount;
    const velocity = Math.random() * 200 + 100;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;

    particle.animate([
      { 
        transform: 'translate(0, 0) scale(1) rotate(0deg)', 
        opacity: 1 
      },
      { 
        transform: `translate(${dx}px, ${dy + 150}px) scale(0) rotate(${Math.random() * 720}deg)`, 
        opacity: 0 
      }
    ], {
      duration: Math.random() * 800 + 600,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }).onfinish = () => particle.remove();
  }
}

// ===== CLICK HANDLER FOR BURST =====
document.addEventListener('click', function(e) {
  confettiBurst(e.clientX, e.clientY);
});

// ===== MUSIC TOGGLE (Plays birthday melody via Web Audio API) =====
let audioCtx = null;
let isPlaying = false;
let melodyInterval = null;

function playBirthdayMelody() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  // Happy Birthday melody - notes in Hz
  const melody = [
    { freq: 262, dur: 0.3 }, // C
    { freq: 262, dur: 0.3 }, // C
    { freq: 294, dur: 0.6 }, // D
    { freq: 262, dur: 0.6 }, // C
    { freq: 349, dur: 0.6 }, // F
    { freq: 330, dur: 1.0 }, // E
    { freq: 0,   dur: 0.2 }, // rest

    { freq: 262, dur: 0.3 }, // C
    { freq: 262, dur: 0.3 }, // C
    { freq: 294, dur: 0.6 }, // D
    { freq: 262, dur: 0.6 }, // C
    { freq: 392, dur: 0.6 }, // G
    { freq: 349, dur: 1.0 }, // F
    { freq: 0,   dur: 0.2 }, // rest

    { freq: 262, dur: 0.3 }, // C
    { freq: 262, dur: 0.3 }, // C
    { freq: 523, dur: 0.6 }, // C5
    { freq: 440, dur: 0.6 }, // A
    { freq: 349, dur: 0.6 }, // F
    { freq: 330, dur: 0.6 }, // E
    { freq: 294, dur: 0.8 }, // D
    { freq: 0,   dur: 0.2 }, // rest

    { freq: 466, dur: 0.3 }, // Bb
    { freq: 466, dur: 0.3 }, // Bb
    { freq: 440, dur: 0.6 }, // A
    { freq: 349, dur: 0.6 }, // F
    { freq: 392, dur: 0.6 }, // G
    { freq: 349, dur: 1.2 }, // F
  ];

  let time = audioCtx.currentTime + 0.1;

  melody.forEach(note => {
    if (note.freq > 0) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.value = note.freq;

      // Add a second oscillator for richer sound
      const osc2 = audioCtx.createOscillator();
      const gain2 = audioCtx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.value = note.freq;

      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(0.15, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, time + note.dur - 0.05);

      gain2.gain.setValueAtTime(0, time);
      gain2.gain.linearRampToValueAtTime(0.08, time + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, time + note.dur - 0.05);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(time);
      osc.stop(time + note.dur);

      osc2.connect(gain2);
      gain2.connect(audioCtx.destination);
      osc2.start(time);
      osc2.stop(time + note.dur);
    }
    time += note.dur;
  });

  // Return total duration for looping
  return melody.reduce((sum, n) => sum + n.dur, 0) * 1000;
}

const musicBtn = document.getElementById('musicBtn');
musicBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // Prevent confetti burst on music button
  
  if (!isPlaying) {
    const duration = playBirthdayMelody();
    isPlaying = true;
    musicBtn.classList.add('playing');
    musicBtn.textContent = '🔊';

    // Loop the melody
    melodyInterval = setInterval(() => {
      if (isPlaying) {
        playBirthdayMelody();
      }
    }, duration + 500);
  } else {
    isPlaying = false;
    musicBtn.classList.remove('playing');
    musicBtn.textContent = '🎵';
    if (melodyInterval) {
      clearInterval(melodyInterval);
      melodyInterval = null;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
    }
  }
});

// ===== GREETING CARD HOVER TILT EFFECT =====
const card = document.getElementById('greetingCard');
card.addEventListener('mousemove', function(e) {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -5;
  const rotateY = ((x - centerX) / centerX) * 5;

  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  card.style.transition = 'transform 0.1s ease';
});

card.addEventListener('mouseleave', function() {
  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
  card.style.transition = 'transform 0.5s ease';
});

// ===== INITIALIZE ALL EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
  createConfetti();
  createFloatingHearts();
  createSparkles();
  createStars();
  createBalloons();
  createRibbons();

  // Initial confetti burst in the center after a short delay
  setTimeout(() => {
    confettiBurst(window.innerWidth / 2, window.innerHeight / 2);
  }, 1500);
});
