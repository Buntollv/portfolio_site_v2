const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeButton(savedTheme === 'dark-theme');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    localStorage.setItem('theme', isDark ? 'dark-theme' : '');
    updateThemeButton(isDark);
});

function updateThemeButton(isDark) {
    themeToggle.textContent = isDark ? 'Светлая тема' : 'Тёмная тема'; // убрал эмодзи
}

document.getElementById('current-year').textContent = new Date().getFullYear();

const currentLocation = location.pathname;
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach(item => {
    if (item.getAttribute('href') === currentLocation.split('/').pop()) {
        item.classList.add('active');
    }
});

// Ripple effect for buttons on project cards
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;

  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');
  btn.appendChild(ripple);

  const rect = btn.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  ripple.style.width = ripple.style.height = `${diameter}px`;
  ripple.style.left = `${e.clientX - rect.left - radius}px`;
  ripple.style.top = `${e.clientY - rect.top - radius}px`;

  ripple.addEventListener('animationend', () => ripple.remove());
});