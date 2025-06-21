// musica.js - VERSIÓN SIMPLIFICADA (SIN FILTROS)

document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const tabsNav = document.querySelector('.tabs-nav');
    const galleryContent = document.querySelector('.gallery-content');

    // 1. CREAR LAS PESTAÑAS (igual que antes)
    const categorias = [...new Set(laFabricaVideos.map(video => video.categoria))];
    categorias.forEach(categoria => {
        const tabButton = document.createElement('button');
        tabButton.className = 'tab-button';
        tabButton.textContent = categoria;
        tabButton.setAttribute('data-categoria', categoria);
        tabsNav.appendChild(tabButton);
    });

    // 2. FUNCIÓN PARA MOSTRAR LOS VIDEOS DE UNA CATEGORÍA
    const mostrarVideos = (categoria) => {
        galleryContent.innerHTML = ''; // Limpiar la galería anterior

        const videosDeCategoria = laFabricaVideos.filter(video => video.categoria === categoria);
        
        // Contenedor para la cuadrícula de videos
        const videoGrid = document.createElement('div');
        videoGrid.className = 'video-grid';
        
        videosDeCategoria.forEach(video => {
            // Creamos un 'wrapper' para cada video y su info
            const videoWrapper = document.createElement('div');
            videoWrapper.className = 'video-wrapper';

            // ESTA ES LA PARTE QUE CONSTRUYE CADA TARJETA DE VIDEO
            videoWrapper.innerHTML = `
                <div class="video-container" data-youtube-id="${video.id}">
                    <img data-src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="${video.titulo}" loading="lazy">
                    <div class="play-button"></div>
                </div>
                <div class="video-info">
                    <p class="video-title">${video.titulo}</p>
                    <p class="video-artist">${video.artista}</p>
                </div>
            `;
            videoGrid.appendChild(videoWrapper);
        });

        galleryContent.appendChild(videoGrid);
        activarLazyLoading();
    };

    // 3. FUNCIÓN LAZY LOADING (igual que antes)
    const activarLazyLoading = () => {
        const imagenes = document.querySelectorAll('img[data-src]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        imagenes.forEach(img => observer.observe(img));
    };

    // 4. MANEJAR CLICS EN PESTAÑAS (igual que antes)
    tabsNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-button')) {
            const currentActive = tabsNav.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            e.target.classList.add('active');
            mostrarVideos(e.target.dataset.categoria);
        }
    });

    // 5. MANEJAR CLICS EN VIDEOS (igual que antes)
    galleryContent.addEventListener('click', (e) => {
        const videoContainer = e.target.closest('.video-container');
        if (videoContainer) {
            const videoId = videoContainer.dataset.youtubeId;
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            
            videoContainer.innerHTML = '';
            videoContainer.appendChild(iframe);
        }
    });

    // 6. INICIALIZAR LA GALERÍA (igual que antes)
    if (tabsNav.firstChild) {
        tabsNav.firstChild.click();
    }
});