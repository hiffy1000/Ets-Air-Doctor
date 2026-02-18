document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const mobileMenu = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");
  const searchInput = document.getElementById("productSearch");
  const productCards = document.querySelectorAll(".product-card");
  const noResults = document.getElementById("noResults");

  // ===== 1. MOBILE MENU LOGIC =====

  const toggleMenu = () => {
    const isOpened = navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");

    // FIX: Prevents background scrolling when menu is open
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleMenu);
  }

  // Close menu when clicking a link
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = ""; // Restore scroll
    });
  });

  // ===== 2. PRODUCT FILTER LOGIC =====

  const filterProducts = () => {
    const query = searchInput.value.toLowerCase().trim();
    let foundCount = 0;

    productCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const desc = card.querySelector("p").textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = "flex"; // Match your CSS display
        foundCount++;
      } else {
        card.style.display = "none";
      }
    });

    // Handle 'No Results' visibility
    if (noResults) {
      noResults.style.display = foundCount === 0 ? "block" : "none";
    }
  };

  // Attach filter event to search input
  if (searchInput) {
    searchInput.addEventListener("input", filterProducts);
  }
});
 