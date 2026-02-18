/**
 * Ets Air Doctor - Contact & Navigation Script
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE NAVIGATION LOGIC ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            // Toggles the 'active' class to slide the menu in/out
            navLinks.classList.toggle('active');
            
            // Toggles the 'is-active' class for the hamburger animation
            mobileMenu.classList.toggle('is-active');
        });

        // Close menu when a link is clicked (useful for one-page navigation)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
        });
    }

    // --- 2. CONTACT FORM SUBMISSION ---
    const contactForm = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;

            // Visual feedback: Loading state
            status.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            status.style.color = "#0056b3";
            status.style.marginTop = "15px";
            status.style.fontWeight = "bold";

            // Simulation of an API call (1.5 seconds)
            setTimeout(() => {
                status.innerHTML = `✅ Merci ${name}, votre message a été envoyé avec succès !`;
                status.style.color = "#28a745"; // Success green
                
                // Reset form fields
                contactForm.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    status.innerHTML = "";
                }, 5000);

            }, 1500);
        });
    }
});