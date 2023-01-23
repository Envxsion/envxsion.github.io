// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add event listener to all navigation links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    // Remove active class from all navigation links
    navLinks.forEach(link => {
      link.classList.remove("active");
    });

    // Add active class to clicked navigation link
    e.target.classList.add("active");
  });
});
