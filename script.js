// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close navigation when a link within the navMenu is clicked
navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') { 
    navMenu.classList.remove('show');
  }
});

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = this.getAttribute('href');
    const element = document.querySelector(target);

    if (element) { // Check if the target element exists
      const scrollTop = element.offsetTop;
      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  });
});