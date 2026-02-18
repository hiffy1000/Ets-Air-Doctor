document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // Close menu if a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });
});



// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with reveal class
document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

// Counter animation for stats
const counters = document.querySelectorAll(".counter");
const speed = 200;

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const increment = target / speed;

  const updateCount = () => {
    const count = +counter.innerText;
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

// Start counters when stats section comes into view
const statsContainer = document.querySelector(".stats-container");
if (statsContainer) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        counters.forEach((counter) => runCounter(counter));
        statsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  statsObserver.observe(statsContainer);
}
function ouvrirContact() {
  // Logique personnalisée (redirection ou modal)
  console.log("Ouverture du formulaire de contact...");
  alert("Merci ! Vous allez être redirigé vers le secrétariat de direction.");
}
