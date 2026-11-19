document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // 3. Fade-in animation for sections
    const section = document.querySelector('section');
    if (section) {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease';
        setTimeout(() => { section.style.opacity = '1'; }, 50);
    }
});
