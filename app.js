// app.js - VERSIÓN FINAL CON PARÁMETROS CORREGIDOS

document.addEventListener("DOMContentLoaded", () => {
    
    // Definimos la función con el orden correcto: (selector, url, callback)
    const loadComponent = (selector, fileUrl, callback) => {
        // La ruta ahora es simple y absoluta desde la raíz.
        const fullUrl = `/${fileUrl}`; 
        
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
                    // Si hay una función de 'callback' (para el menú), la ejecutamos.
                    if (callback) callback(); 
                } else {
                    console.error(`Error: No se encontró el elemento con el selector '${selector}'`);
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

    // --- ¡AQUÍ ESTÁ LA CORRECCIÓN! ---
    // Ahora llamamos a la función con los parámetros en el orden correcto:
    // 1. El selector CSS (dónde va el HTML)
    // 2. La URL del archivo (qué HTML cargar)
    // 3. El callback (qué hacer después)

    loadComponent("#header-placeholder", "_header.html", activateHamburgerMenu);
    loadComponent("#footer-placeholder", "_footer.html");
});