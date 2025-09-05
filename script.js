// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to sections
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


// Contact form submission (placeholder)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Form submitted! Connect this to a backend or email service to actually send messages.");
});
