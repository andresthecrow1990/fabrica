document.addEventListener('DOMContentLoaded', function() {

    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', function() {
            // Alterna la clase 'is-active' en el menú de hamburguesa y la navegación
            hamburgerMenu.classList.toggle('is-active');
            mainNav.classList.toggle('is-active');
        });
    }

});