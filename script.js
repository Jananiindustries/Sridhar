document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const businessToggle = document.getElementById('business-toggle');
    const businessMenu = document.getElementById('business-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenuButton.classList.toggle('active'); // Toggle active class
        mobileMenu.classList.toggle('show'); // Toggle visibility of mobile menu
    });

    businessToggle.addEventListener('click', function() {
        businessMenu.classList.toggle('hidden'); // Toggle visibility of business menu
    });

    // Optional: Close mobile menu when a link is clicked
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show'); // Hide menu on link click
            mobileMenuButton.classList.remove('active'); // Remove active class
        });
    });
});
