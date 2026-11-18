// ===== js/script.js =====
document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Fade-in animation for sections
    const section = document.querySelector('section');
    if (section) {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.8s ease';
        setTimeout(() => { section.style.opacity = '1'; }, 50);
    }
});