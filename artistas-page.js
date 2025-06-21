// artistas-page.js - VERSIÓN HOLOGRÁFICA

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('artist-grid');
    if (!grid) return; // Salir si no estamos en la página de artistas

    laFabricaArtistas.forEach(artista => {
        const artistCardLink = document.createElement('a');
        artistCardLink.className = 'artist-card-holo';
        artistCardLink.href = artista.url;

        // Esta es la nueva estructura HTML para la tarjeta
        artistCardLink.innerHTML = `
            <div class="holo-image-container">
                <img src="${artista.imagen}" alt="${artista.nombre}" class="holo-image">
                <div class="scanline-overlay"></div>
            </div>
            <div class="holo-info">
                <h3 class="holo-name">${artista.nombre}</h3>
                <p class="holo-desc">${artista.descripcion}</p>
            </div>
            <div class="holo-glow-border"></div>
        `;
        
        grid.appendChild(artistCardLink);
    });
});