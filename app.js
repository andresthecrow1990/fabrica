// app.js - VERSIÓN FINAL Y UNIFICADA

document.addEventListener("DOMContentLoaded", () => {
    
    const projectName = "fabrica"; // Nombre de tu proyecto/repositorio

    const loadComponent = (selector, fileUrl, callback) => {
        const fullUrl = `/${projectName}/${fileUrl}`;
        
        fetch(fullUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${fullUrl}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.querySelector(selector);
                if (element) {
                    element.innerHTML = data;
                    // Si hay una función de 'callback', la ejecutamos AHORA.
                    if (callback) callback(); 
                }
            })
            .catch(error => console.error(error));
    };

    // Función para activar el menú hamburguesa
    const activateHamburgerMenu = () => {
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const mainNav = document.querySelector('.main-nav');

        if (hamburgerMenu && mainNav) {
            hamburgerMenu.addEventListener('click', () => {
                hamburgerMenu.classList.toggle('is-active');
                mainNav.classList.toggle('is-active');
            });
        }
    };

    // Cargar header y LUEGO activar su funcionalidad
    loadComponent("#header-placeholder", "_header.html", activateHamburgerMenu);
    
    // Cargar footer (no necesita callback)
    loadComponent("#footer-placeholder", "_footer.html");
});