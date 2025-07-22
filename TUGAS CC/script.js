// Fitur interaktif: hamburger menu, light/dark mode, scroll to top

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');
    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('active');
    });

    // Light/Dark mode
    const modeToggle = document.querySelector('.mode-toggle');
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        modeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });

    // Scroll to top
    const scrollBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
