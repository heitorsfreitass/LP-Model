// Initialize AOS animations
AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: true
});

// Scroll to top button
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('active');
    } else {
        scrollTop.classList.remove('active');
    }
});

scrollTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// WhatsApp button click event
document.querySelectorAll('a[href^="https://wa.me"]').forEach(button => {
    button.addEventListener('click', function() {
        // You can add analytics here
        console.log('WhatsApp button clicked');
    });
});