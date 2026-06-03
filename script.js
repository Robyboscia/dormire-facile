// Header scroll
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 50
    ? '0 2px 20px rgba(0,0,0,0.8)'
    : '0 -3px 15px 0 rgba(0,0,0,0.5)';
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.querySelector('.header-nav ul');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.innerHTML = mainNav.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
}

// Hero slideshow
const slides = document.querySelectorAll('.hero-slide');
if (slides.length > 1) {
  let current = 0;
  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5000);
}

// Scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .blog-card, .tailor-text, .proof-text').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});