document.addEventListener('DOMContentLoaded', () => {
  console.log('restaurant.js loaded successfully');

  // --- Smooth scrolling for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Sticky & Transparent Header (merged events) ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('sticky', window.scrollY > 100);
      header.classList.toggle('transparent', window.scrollY > 50);
    }
  });

  // --- Form validation ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();
      if (!email || !message) {
        e.preventDefault();
        alert('Please fill out all fields.');
      }
    });
  }
});
