// script.js

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active'); // Toggle active class
        mobileMenu.classList.toggle('hidden'); // Toggle visibility of mobile menu
    });

    // Optional: Close mobile menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden'); // Hide menu on link click
            mobileMenuButton.classList.remove('active'); // Remove active class
        });
    });
});
