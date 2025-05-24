// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const crossIcon = document.querySelector('.cross-icon');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  crossIcon.classList.toggle('active');
});

// Hero Section Animation
const hero = document.querySelector('.hero');
const intro = document.querySelector('.intro');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    hero.classList.add('animate');
    intro.classList.add('animate');
  } else {
    hero.classList.remove('animate');
    intro.classList.remove('animate');
  }
});

// Portfolio Filtering
const portfolioItems = document.querySelectorAll('.my-card');
const filters = document.querySelectorAll('.filter');

filters.forEach((filter) => {
  filter.addEventListener('click', (e) => {
    const target = e.target;
    const category = target.dataset.category;
    portfolioItems.forEach((item) => {
      if (item.dataset.category === category) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

// About Section Animation
const about = document.querySelector('.about');
const aboutContent = document.querySelector('.about-content');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 800) {
    about.classList.add('animate');
    aboutContent.classList.add('animate');
  } else {
    about.classList.remove('animate');
    aboutContent.classList.remove('animate');
  }
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
const submitButton = document.querySelector('.submit-btn');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  fetch('/contact', {
    method: 'POST',
    body: formData,
  })
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch((error) => console.error(error));
});
