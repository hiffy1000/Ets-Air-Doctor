// Animation au défilement (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

// Sélectionner tous les éléments à animer
document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right")
  .forEach((el) => {
    observer.observe(el);
  });

// Smooth Scroll pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// On peut ajouter une fonction pour cloner les éléments dynamiquement si besoin,
// mais pour un site statique, le clonage manuel en HTML (comme fait plus haut)
// est plus performant pour le SEO et le temps de chargement.

const track = document.getElementById("sliderTrack");

// Optionnel: Augmenter la vitesse au scroll de la souris
track.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    track.style.animationDuration = "15s"; // Accélère
  } else {
    track.style.animationDuration = "40s"; // Ralentit
  }
});
// Gestion simple du menu mobile (basique pour l'exemple)
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active"); // Toggle X animation
  });
}
const rail = document.getElementById("productRail");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  const itemWidth = rail.querySelector(".product-item").offsetWidth + 20;
  rail.scrollLeft += itemWidth;
});

prevBtn.addEventListener("click", () => {
  const itemWidth = rail.querySelector(".product-item").offsetWidth + 20;
  rail.scrollLeft -= itemWidth;
});

// Close menu when clicking on a nav link
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});
const ticker = document.getElementById("tickerLoop");
