// Load profile image dynamically
document.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.getElementById("profileImage");
  profileImage.src = "image"; // update path if needed
});

// Reveal on scroll
const faders = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
// Smooth scroll on 'Explore My Work' button
document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#projects');
  window.scrollTo({
    top: target.offsetTop - 50, // adjust for header height
    behavior: 'smooth'
  });
});