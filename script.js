document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('navbarNav');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '🌜 Toggle Light Mode';
        } else {
            themeToggle.innerHTML = '🌞 Toggle Dark Mode';
        }
    });

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});
