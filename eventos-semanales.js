// eventos-semanales.js - VERSIÓN COMPLETA

document.addEventListener('DOMContentLoaded', () => {
    // --- Verificación de datos ---
    if (typeof laFabricaEventos === 'undefined' || laFabricaEventos.length === 0) return;
    if (typeof laFabricaArtistas === 'undefined') return;

    // --- Selectores de los contenedores HTML ---
    const currentEventContainer = document.getElementById('current-event-banner');
    const votingEventContainer = document.getElementById('voting-event-box');
    const winnerShowcaseContainer = document.getElementById('winner-showcase');
    const leaderboardContainer = document.getElementById('leaderboard-table');
    const historyListContainer = document.getElementById('history-list');

    // --- Encontrar los eventos clave por su ESTADO ---
    const eventoParticipando = laFabricaEventos.find(e => e.estado === 'participando');
    const eventoVotacion = laFabricaEventos.find(e => e.estado === 'votacion');
    const ultimoGanador = laFabricaEventos.find(e => e.estado === 'finalizado'); // El más reciente finalizado
    const eventosFinalizados = laFabricaEventos.filter(e => e.estado === 'finalizado');

    // --- Ejecución de las funciones para construir cada sección ---
    renderParticipatingEvent(eventoParticipando);
    renderVotingEvent(eventoVotacion);
    renderWinnerShowcase(ultimoGanador);
    renderLeaderboard(eventosFinalizados);
    renderEventHistory(eventosFinalizados);

    // =======================================================
    // DEFINICIÓN DE LAS FUNCIONES DE RENDERIZADO
    // =======================================================

    function renderParticipatingEvent(evento) {
        if (evento && currentEventContainer) {
            currentEventContainer.innerHTML = `
                <div class="section-container">
                    <p class="current-event-week">${evento.semana}</p>
                    <h1 class="current-event-genre">${evento.genero}</h1>
                    <p class="current-event-description">¡El evento de esta semana está activo! Envía tus creaciones del género ${evento.genero} y participa.</p>
                    <a href="https://discord.com/invite/793p6CMpQ2" class="cta-button primary-cta">Participa en Discord</a>
                </div>
            `;
        }
    }

    function renderVotingEvent(evento) {
        if (evento && votingEventContainer) {
            votingEventContainer.innerHTML = `
                <div class="voting-event-box">
                    <h2>Semana de Votación: ${evento.genero}</h2>
                    <p>Las participaciones para este género ya están cerradas. ¡Escucha la playlist y apoya a tus favoritos con tu vista!</p>
                    <a href="${evento.playlistUrl}" class="cta-button secondary-cta" target="_blank">Ver Playlist en YouTube</a>
                </div>
            `;
        }
    }

    function renderWinnerShowcase(evento) {
        if (evento && evento.ganador && winnerShowcaseContainer) {
            winnerShowcaseContainer.innerHTML = `
                <h2 class="section-title">Ganador de la Semana</h2>
                <div class="winner-showcase-layout">
                    <div class="winner-video">
                        <iframe src="https://www.youtube.com/embed/${evento.ganador.videoId}" title="YouTube video player" allowfullscreen></iframe>
                    </div>
                    <div class="winner-info">
                        <p class="winner-title">${evento.genero} - ${evento.semana}</p>
                        <h3 class="winner-song">${evento.ganador.cancion}</h3>
                        <p class="winner-artist">por <a href="#">${evento.ganador.nombre}</a></p>
                    </div>
                </div>
            `;
        } else if (winnerShowcaseContainer) {
            winnerShowcaseContainer.style.display = 'none'; // Oculta la sección si no hay ganador que mostrar
        }
    }

    // =======================================================
    // FUNCIÓN 3: Calcula y rellena el PALMARÉS DE CAMPEONES
    // =======================================================
    function renderLeaderboard() {
        const winsCount = {};

        // Paso 1: Contar las victorias de cada artista
        laFabricaEventos.forEach(evento => {
            if (evento.estado === 'finalizado' && evento.ganador) {
                const winnerName = evento.ganador.nombre;
                winsCount[winnerName] = (winsCount[winnerName] || 0) + 1;
            }
        });

        // Paso 2: Convertir el conteo en una lista y ordenarla de mayor a menor
        const rankedArtists = Object.entries(winsCount)
            .map(([nombre, victorias]) => ({ nombre, victorias }))
            .sort((a, b) => b.victorias - a.victorias);

        // Paso 3: Generar el HTML para cada fila del ranking
        rankedArtists.forEach((artist, index) => {
            const artistData = laFabricaArtistas.find(dbArtist => dbArtist.nombre === artist.nombre);
            const avatar = artistData ? artistData.imagen : '/fabrica/images/artistas/default-avatar.png'; // Un avatar por defecto
            const rank = index + 1;

            const row = document.createElement('div');
            row.className = 'leaderboard-row';
            row.setAttribute('data-rank', rank);
            row.innerHTML = `
                <div class="leaderboard-rank">#${rank}</div>
                <div class="leaderboard-avatar"><img src="${avatar}" alt="${artist.nombre}"></div>
                <div class="leaderboard-name">${artist.nombre}</div>
                <div class="leaderboard-wins">${artist.victorias}</div>
            `;
            leaderboardContainer.appendChild(row);
        });
    }

    // =======================================================
    // FUNCIÓN 4: Rellena el HISTORIAL DE EVENTOS
    // =======================================================
    function renderEventHistory() {
        const pastEvents = laFabricaEventos.slice(1); // Tomamos todos los eventos menos el actual
        if (pastEvents.length > 0) {
            pastEvents.forEach(evento => {
                if (evento.ganador) {
                    const historyItem = document.createElement('div');
                    historyItem.className = 'history-item';
                    historyItem.innerHTML = `
                        <div>
                            <div class="history-item-genre">${evento.genero}</div>
                            <div class="history-item-details">${evento.semana}</div>
                        </div>
                        <div class="history-item-winner">Ganador: <span>${evento.ganador.nombre}</span></div>
                        <div class="history-item-song">${evento.ganador.cancion}</div>
                        <a href="${evento.playlistUrl || '#'}" class="cta-button secondary-cta" target="_blank">Ver Playlist</a>
                    `;
                    historyListContainer.appendChild(historyItem);
                }
            });
        }
    }
});