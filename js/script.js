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