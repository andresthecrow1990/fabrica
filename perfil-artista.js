// perfil-artista.js - VERSIÓN CON BOTÓN "CARGAR MÁS"

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. OBTENER DATOS DEL ARTISTA (sin cambios) ---
    const pathParts = window.location.pathname.split('/').filter(part => part !== '');
    const artistSlug = pathParts[pathParts.length - 1];
    const artistData = laFabricaArtistas.find(artista => artista.url.includes(`/${artistSlug}/`));

    if (!artistData) {
        console.error('No se encontraron datos para el artista:', artistSlug);
        return;
    }

    // --- 2. RELLENAR INFO DEL ARTISTA (sin cambios) ---
    document.title = `${artistData.nombre} - Perfil de Artista`;
    document.getElementById('artist-image').src = artistData.imagen;
    document.getElementById('artist-image').alt = `Foto de ${artistData.nombre}`;
    document.getElementById('artist-name').textContent = artistData.nombre;
    document.getElementById('artist-tagline').textContent = artistData.tagline;
    document.getElementById('artist-bio-text').textContent = artistData.biografiaCompleta;
    
    // Rellenar canales... (sin cambios)
    const channelsList = document.getElementById('artist-channels-list');
    if (artistData.canales && artistData.canales.length > 0) {
        artistData.canales.forEach(canal => {
            const listItem = document.createElement('li');
            listItem.className = 'channel-item';
            let iconClass = 'fas fa-link';
            if (canal.plataforma.toLowerCase() === 'youtube') iconClass = 'fab fa-youtube';
            if (canal.plataforma.toLowerCase() === 'spotify') iconClass = 'fab fa-spotify';
            if (canal.plataforma.toLowerCase() === 'instagram') iconClass = 'fab fa-instagram';
            const displayName = canal.nombre_canal || canal.plataforma;
            listItem.innerHTML = `<a href="${canal.url}" target="_blank"><i class="${iconClass}"></i><span>${displayName}</span><i class="fas fa-external-link-alt link-arrow"></i></a>`;
            channelsList.appendChild(listItem);
        });
    } else {
        channelsList.innerHTML = '<li>No hay canales disponibles.</li>';
    }

    const heroVideoContainer = document.getElementById('hero-featured-video');

// Verificamos que el artista tenga una canción destacada y que el contenedor exista
if (artistData.cancionDestacadaId && heroVideoContainer) {
    const videoId = artistData.cancionDestacadaId;

    // Creamos e inyectamos el iframe del video
    heroVideoContainer.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/${videoId}" 
            title="Reproductor de YouTube: Canción Destacada" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
}
    // --- 3. LÓGICA DE LA GALERÍA DE MÚSICA CON "CARGAR MÁS" ---
    
    const musicGrid = document.getElementById('featured-music-grid');
    const loadMoreContainer = document.getElementById('load-more-container');
    const allArtistVideos = laFabricaVideos.filter(video => video.artista === artistData.nombre);

    const pageSize = 8; // <-- ¡Puedes cambiar este número! Muestra 8 videos a la vez.
    let currentPage = 1;

    // Función que muestra los videos de la página actual
    const displayVideos = () => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = currentPage * pageSize;
        const videosToShow = allArtistVideos.slice(startIndex, endIndex);

        videosToShow.forEach(video => {
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';
            videoWrapper.innerHTML = `
                <div class="video-container" data-youtube-id="${video.id}">
                    <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.titulo}" loading="lazy">
                    <div class="play-button"></div>
                </div>
                <div class="video-info">
                    <p class="video-title">${video.titulo}</p>
                    <p class="video-artist">${video.categoria}</p>
                </div>
            `;
            musicGrid.appendChild(videoWrapper);
        });

        // Ocultar el botón si ya no hay más videos que mostrar
        if (endIndex >= allArtistVideos.length) {
            const loadMoreBtn = document.getElementById('load-more-btn');
            if (loadMoreBtn) {
                loadMoreBtn.classList.add('hidden');
            }
        }
    };

    // Inicialización de la galería
    if (allArtistVideos.length > 0) {
        // Mostrar la primera página de videos
        displayVideos();

        // Si hay más videos que los que se muestran inicialmente, crear el botón
        if (allArtistVideos.length > pageSize) {
            const loadMoreBtn = document.createElement('button');
            loadMoreBtn.id = 'load-more-btn';
            loadMoreBtn.textContent = 'Cargar Más';
            loadMoreBtn.addEventListener('click', () => {
                currentPage++;
                displayVideos();
            });
            loadMoreContainer.appendChild(loadMoreBtn);
        }
    } else {
        musicGrid.innerHTML = '<p>Este artista aún no tiene música destacada en la fábrica.</p>';
    }

    // Activar la reproducción de video (sin cambios)
    musicGrid.addEventListener('click', (e) => {
        const videoContainer = e.target.closest('.video-container');
        if (videoContainer) {
            const videoId = videoContainer.dataset.youtubeId;
            videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        }
    });
});