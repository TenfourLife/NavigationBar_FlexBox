// No JavaScript is required for the basic functionality and design of the navbars in this example.
// However, if you want to add interactivity, such as toggling the nav for mobile views, you can add it here.

document.addEventListener('DOMContentLoaded', () => {
    // Example of how you might add mobile toggling functionality
    const navbars = document.querySelectorAll('.navbar');
    navbars.forEach(navbar => {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'toggle-button';
        toggleButton.textContent = '☰';
        navbar.appendChild(toggleButton);

        const navLinks = navbar.querySelector('.nav_links');
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    });
});
