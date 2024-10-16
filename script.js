// Smooth scrolling for navigation
document.getElementById('home-link').addEventListener('click', function() {
    document.getElementById('home-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('events-link').addEventListener('click', function() {
    document.getElementById('events-section').scrollIntoView({ behavior: 'smooth' });
});

// Links to open new pages for members, testimonials, and contact
document.getElementById('members-link').addEventListener('click', function() {
    window.location.href = 'members.html'; // New page for members
});

document.getElementById('testimonial-link').addEventListener('click', function() {
    window.location.href = 'testimonial.html'; // New page for testimonials
});

document.getElementById('contact-link').addEventListener('click', function() {
    window.location.href = 'contact.html'; // New page for contact
});

// Add fun interaction on event boxes (change color on click)
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach((card) => {
    card.addEventListener('click', function() {
        // this.style.backgroundColor = '#ff9900';
        this.style.color = 'purple';
    });
});
// Social media links
document.querySelector('.fa-facebook').addEventListener('click', function() {
    window.open('https://www.facebook.com', '_blank'); // Opens Facebook link in a new tab
});

document.querySelector('.fa-instagram').addEventListener('click', function() {
    window.open('https://www.instagram.com', '_blank'); // Opens Instagram link in a new tab
});

document.querySelector('.fa-linkedin').addEventListener('click', function() {
    window.open('https://www.linkedin.com', '_blank'); // Opens LinkedIn link in a new tab
});

document.querySelector('.fa-twitter').addEventListener('click', function() {
    window.open('https://www.twitter.com', '_blank'); // Opens Twitter link in a new tab
});
