document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu if a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
});
function contactUs() {
    // You could link this to an email or a contact form
    window.location.href = "mailto:sales@example.com?subject=Inquiry about Toyota Prado TX";
}

function showDetails() {
    // This could open a modal or navigate to a new page
    alert("Displaying full specifications for the Toyota Prado TX...");
}