const name = 'HAPPY BIRTHDAY, SHRAVANI!';
const subLine = 'wishing you the most magical day';
const heartEmojis = ['❤️', '🌸', '💜', '✨', '🌹'];
const floaters = ['🎉', '🎊', '🌸', '💜', '⭐', '🌟', '🎈', '💖', '✨', '🦋', '🌺', '🎂'];

function typeWrite(element, text, speed, callback) {
  let i = 0;
  function tick() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(tick, speed);
    } else if (callback) {
      callback();
    }
  }
  tick();
}

function spawnParticle() {
  const container = document.getElementById('particles');
  const particle = document.createElement('div');
  const size = Math.random() * 3 + 1;
  particle.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${Math.random() > 0.5 ? '#ff6eb4' : '#c084fc'};
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    opacity: ${Math.random() * 0.6 + 0.2};
    animation: twinkle ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
    pointer-events: none;
  `;
  container.appendChild(particle);
}

function spawnFloater() {
  const container = document.getElementById('floatingElements');
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = floaters[Math.floor(Math.random() * floaters.length)];
  const left = Math.random() * 100;
  const duration = Math.random() * 8 + 6;
  const delay = Math.random() * 4;
  const size = Math.random() * 14 + 14;
  el.style.cssText = `
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${duration}s;
    animation-delay: ${delay}s;
  `;
  container.appendChild(el);
  setTimeout(() => el.remove(), (duration + delay) * 1000);
}

function addHearts() {
  const row = document.getElementById('heartsRow');
  heartEmojis.forEach((emoji, i) => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.className = 'heart';
      span.textContent = emoji;
      row.appendChild(span);
    }, i * 200);
  });
}

window.addEventListener('load', () => {
  for (let i = 0; i < 60; i++) spawnParticle();

  setInterval(spawnFloater, 1200);
  for (let i = 0; i < 5; i++) setTimeout(spawnFloater, i * 300);

  const nameEl = document.getElementById('nameTitle');
  const subEl = document.getElementById('subtitle');

  setTimeout(() => {
    typeWrite(nameEl, name, 60, () => {
      setTimeout(() => {
        typeWrite(subEl, subLine, 50, () => {
          setTimeout(addHearts, 300);
        });
      }, 300);
    });
  }, 400);
});
