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