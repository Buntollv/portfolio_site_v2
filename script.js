// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Светлая тема';
    }
    
    // Обработчик переключения темы
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Меняем текст кнопки и сохраняем тему
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️ Светлая тема';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '🌙 Темная тема';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Здесь можно добавить отправку данных на сервер
            // Пока просто покажем сообщение
            alert(`Спасибо за сообщение, ${name}! Я свяжусь с вами в ближайшее время.`);
            
            // Очищаем форму
            feedbackForm.reset();
        });
    }
});