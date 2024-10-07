
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links');
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
    if (fullName === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }
    console.log('Form submitted:', fullName, email, subject, message);
});


const navLinksLi = document.querySelectorAll('.nav-links li a');

navLinksLi.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinksLi.forEach(item => item.parentElement.classList.remove('active'));
        
        // Add active class to the clicked link
        this.parentElement.classList.add('active');
    });
});
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.recommendations-row');
const dots = document.querySelectorAll('.dot');

let index = 0;
const cardWidth = document.querySelector('.recommendation-card').offsetWidth;
const totalCards = document.querySelectorAll('.recommendation-card').length;
const visibleCards = 3; // Adjust this based on how many cards should be visible at once
const maxIndex = totalCards - visibleCards;

nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

function updateCarousel() {
    const cardWidth = document.querySelector('.recommendation-card').offsetWidth;
    slider.style.transform = `translateX(-${index * cardWidth}px)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Ensure carousel updates on window resize
window.addEventListener('resize', () => {
    updateCarousel();
});

// Initialize carousel
updateCarousel();


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Loop through each link and add a click event listener
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target section id from the href attribute
            const targetId = this.getAttribute('href');

            // Check if the target id is valid (not just #)
            if (targetId !== "#") {
                // Scroll to the target section
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Smooth scroll
                        block: 'start' // Align to the start of the section
                    });
                }
            }
        });
    });
});
