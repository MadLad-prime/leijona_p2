document.addEventListener('DOMContentLoaded', () => {
    console.log('features.js loaded successfully');
  
    // --- Dropdown functionality ---
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    if (dropdownButton && dropdownContent) {
      dropdownButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
      });
  
      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
          dropdownContent.classList.remove('show');
        }
      });
    }
  
    // --- Slideshow functionality ---
    const slideContainer = document.querySelector('.slideshow .slide-container');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
  
    if (slides.length > 0 && slideContainer && dotsContainer) {
      slides[0].classList.add('active');
  
      // Create dots
      slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });
  
      function updateSlidePosition() {
        slideContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }
  
      function goToSlide(index) {
        currentSlide = index;
        updateSlidePosition();
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlidePosition();
      }
  
      // Auto-advance slides every 5 seconds
      setInterval(nextSlide, 5000);
    }
  
    // --- Menu display functionality ---
    const menuCategories = document.querySelectorAll('.menu-dropdown a');
    menuCategories.forEach(category => {
      category.addEventListener('click', (e) => {
        e.preventDefault();
        const targetCategory = document.querySelector(category.getAttribute('href'));
        if (targetCategory) {
          document.querySelectorAll('.category-title').forEach(title => title.classList.remove('active'));
          targetCategory.classList.add('active');
          targetCategory.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  