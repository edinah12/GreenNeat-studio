// Hamburger menu for mobile
const nav = document.getElementById('main-nav');
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Accordion for service sections
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((btn, idx) => {
  btn.addEventListener('click', function() {
    // Close others
    accordions.forEach((otherBtn, i) => {
      if (i !== idx) {
        otherBtn.classList.remove('active');
        otherBtn.nextElementSibling.classList.remove('show');
      }
    });
    // Toggle this one
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    panel.classList.toggle('show');
  });
});

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Testimonial Carousel
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
let testimonialIndex = 0;
let testimonialTimer;

function showTestimonial(idx) {
  testimonialSlides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    testimonialDots[i].classList.toggle('active', i === idx);
  });
  testimonialIndex = idx;
}

function nextTestimonial() {
  let nextIdx = (testimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(nextIdx);
}

function startTestimonialCarousel() {
  testimonialTimer = setInterval(nextTestimonial, 5000);
}

function stopTestimonialCarousel() {
  clearInterval(testimonialTimer);
}

testimonialDots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    showTestimonial(idx);
    stopTestimonialCarousel();
    startTestimonialCarousel();
  });
});

if (testimonialSlides.length > 0) {
  showTestimonial(0);
  startTestimonialCarousel();
} 