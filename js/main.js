/* ======= NAVBAR MOBILE ======= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("opened");
});

/* ======= HERO CAROUSEL ======= */
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});
prevBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}
function resetInterval() {
  clearInterval(slideInterval);
  startCarousel();
}
startCarousel();

/* ======= FOOTER YEAR ======= */
document.getElementById("year").textContent = new Date().getFullYear();
