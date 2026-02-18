document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate the hamburger icon to an 'X'
        const bars = document.querySelectorAll('.bar');
        bars[0].classList.toggle('rotate-down');
        bars[1].classList.toggle('fade-out');
        bars[2].classList.toggle('rotate-up');
    });

    // Close menu when a link is clicked (useful for one-page sites)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});