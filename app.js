// app.js - VERSIÓN MEJORADA Y ROBUSTA
document.addEventListener("DOMContentLoaded", () => {
    
    // DEFINE EL NOMBRE DE TU PROYECTO AQUÍ UNA SOLA VEZ
    // Debe coincidir con el nombre de tu carpeta en Wamp y tu repositorio en GitHub.
    const projectName = "fabrica"; // <--- ¡LA CLAVE ESTÁ AQUÍ!

    const loadComponent = (selector, fileUrl) => {
        // Construimos la ruta absoluta desde la raíz del dominio, incluyendo el nombre del proyecto.
        const fullUrl = `/${projectName}/${fileUrl}`;
        
        fetch(fullUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error al cargar ${fullUrl}: ${response.statusText} (revisa el nombre del proyecto en app.js y la estructura de archivos)`);
                }
                return response.text();
            })
            .then(data => {
                // Comprobamos si el componente ya ha sido cargado para evitar bucles infinitos
                if (document.querySelector(selector).innerHTML === "") {
                    document.querySelector(selector).innerHTML = data;
                }
            })
            .catch(error => console.error(error));
    };

    // Cargar header y footer en sus contenedores
    loadComponent("#header-placeholder", "_header.html");
    loadComponent("#footer-placeholder", "_footer.html");
});