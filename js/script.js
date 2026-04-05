// Set current year in copyright
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// Search functionality
const searchBtn = document.getElementById('search-btn');
const searchContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const searchSubmit = document.getElementById('search-submit');

if (searchBtn && searchContainer) {
  searchBtn.addEventListener('click', () => {
    searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
    if (searchContainer.style.display === 'block') {
      searchInput.focus();
    }
  });

  searchSubmit.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      // For now, just alert the search query
      // In a real implementation, this would search the content or redirect to search results
      alert(`Searching for: ${query}`);
    }
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchSubmit.click();
    }
  });
}

const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
  });
});

faders.forEach(el => observer.observe(el));

// Slider control
let currentSlide = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}, 4000);