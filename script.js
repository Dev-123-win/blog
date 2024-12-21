// Light/Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark-theme' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    // Toggle dark theme on body
    document.body.classList.toggle('dark-theme');

    // Save the selected theme in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
        themeToggle.textContent = '☀️';  // Change button text to sunlight
    } else {
        localStorage.setItem('theme', 'light-theme');
        themeToggle.textContent = '🌙';  // Change button text to moon
    }
});

// Search Functionality
const searchInput = document.getElementById('search-input');
const blogCards = document.querySelectorAll('.blog-card');
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    blogCards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(searchTerm) ? 'block' : 'none';
    });
});

// Read More Button Toggle
const readMoreBtns = document.querySelectorAll('.read-more-btn');
readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.blog-card'); // More specific targeting of the parent card
        const shortDesc = card.querySelector('.short-desc');
        const fullDesc = card.querySelector('.full-desc');

        if (fullDesc.style.display === 'none' || fullDesc.style.display === '') {
            fullDesc.style.display = 'block';
            shortDesc.style.display = 'none';
            btn.textContent = 'Read Less';
        } else {
            fullDesc.style.display = 'none';
            shortDesc.style.display = 'block';
            btn.textContent = 'Read More';
        }
    });
});

// GSAP Animations
gsap.from(".landing h1", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".landing p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".landing .btn", { duration: 1.5, scale: 0, opacity: 0, delay: 1, ease: "back.out(1.7)" });

gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2
    });
});

gsap.utils.toArray('.product-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: i * 0.2
    });
});