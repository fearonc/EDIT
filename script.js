// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
