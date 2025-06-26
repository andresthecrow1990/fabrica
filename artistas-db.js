// artistas-db.js

const laFabricaArtistas = [
    {
        nombre: 'MLS',
        imagen: '/images/artistas/mylab.webp', // NOTA: Reemplazar con la ruta real de la imagen.
        url: '/artistas/mls/',
        tagline: 'Pionero en la creación musical con IA. Fundador de La Fábrica de Música, una comunidad para exploradores sonoros.',
        descripcion: 'MLS es una figura visionaria en la vanguardia de la creación musical, un pionero que define su trabajo como una simbiosis entre la sensibilidad artística y el potencial ilimitado de la Inteligencia Artificial.',
        biografiaCompleta: 'MyLab (MLS) es una figura visionaria en la vanguardia de la creación musical, un pionero que define su trabajo como una simbiosis entre la sensibilidad artística y el potencial ilimitado de la Inteligencia Artificial. Es fundador de La Fábrica de Música, mucho más que un sello: una comunidad vibrante y un laboratorio para exploradores sonoros. Desde esta plataforma, MyLab no solo crea, sino que fomenta un ecosistema donde la experimentación es la norma y las barreras de género se disuelven. Su obra se ramifica en múltiples proyectos, cada uno con una identidad y un propósito únicos: \n\nMLS: Bajo este pseudónimo, MyLab actúa como el arquitecto principal dentro de La Fábrica. Es su firma para creaciones de una calidad musical excepcional, un maestro de la versatilidad capaz de abordar cualquier estilo —desde orquestaciones complejas hasta el pop más refinado— con una escala épica y una producción impecable. MLS es la prueba de que la IA puede alcanzar la excelencia en cualquier género. \n\nMyLabSoundsystem: Su canal para la electrónica más pura y sin concesiones. Aquí, MyLab desata su faceta más enérgica como productor y DJ, construyendo sesiones y temas que son un viaje de alta intensidad. Su rango sonoro abarca desde la hipnosis oscura del techno hasta la velocidad y la contundencia extrema del frenchcore y otros estilos hard, siempre enfocado en la pista de baile. \n\nEl Sapote de Sinaloa: Un personaje irreverente y satírico que fusiona de forma explosiva el narco rap con el folk tradicional mexicano. A través de El Sapote, MyLab explora con un humor ácido las crónicas de la calle y la cultura popular, creando un folk "guarro" y narrativo que es tan provocador como pegadizo. Es una crónica social contada con ingenio y descaro. \n\nViruela Anfibia: La encarnación del descontento hecho música. Este proyecto es la voz del rock más callejero, violento y reivindicativo. Con un sonido punkarra, crudo y directo, Viruela Anfibia es un grito de protesta. Sus canciones son himnos cargados de una energía urgente y sin filtros, un reflejo sonoro del caos y la rabia social. \n\nLa obra de MyLab, a través de sus múltiples facetas, no es solo una demostración de versatilidad, sino una declaración de principios: la tecnología es la herramienta, la creatividad es el motor, y el futuro de la música es un lienzo en blanco listo para ser pintado con sonidos nunca antes imaginados.',
        cancionDestacadaId: 'WVFEPzFCCrs',
        canales: [
            { plataforma: 'Spotify', nombre_canal: 'MyLab', url: 'https://open.spotify.com/intl-es/artist/53pSRrPj126l2LYeGHDyJa' },
            { plataforma: 'YouTube', nombre_canal: 'MyLab Sound', url: 'https://www.youtube.com/@MyLabSound' },
            { plataforma: 'Instagram', nombre_canal: 'mylab_stomptribe', url: 'https://www.instagram.com/mylab_stomptribe/' },
            { plataforma: 'Spotify', nombre_canal: 'El Sapote de Sinaloa', url: 'https://open.spotify.com/intl-es/artist/47pTqu7Tp7EMy9MFrf01rm' },
            { plataforma: 'YouTube', nombre_canal: 'El Sapote de Sinaloa Oficial', url: 'https://www.youtube.com/@sapoteds' },
            { plataforma: 'Instagram', nombre_canal: '@elsapotedesinaloa', url: 'https://www.instagram.com/elsapotedesinaloa/' },
            { plataforma: 'TikTok', nombre_canal: '@elsapotedesinaloa', url: 'https://www.tiktok.com/@elsapotedesinaloa' },
            { plataforma: 'Spotify', nombre_canal: 'Viruela Anfibia', url: 'https://open.spotify.com/intl-es/artist/3qw3P70tdd6Ik3DTOL3RBh' },
            { plataforma: 'YouTube', nombre_canal: 'ViruelaAnfibia', url: 'https://www.youtube.com/@viruelaanfibia' }
        ]
    },
    {
        nombre: 'AndyCrow',
        imagen: '/images/artistas/andy.webp',
        url: '/artistas/andycrow/',
        tagline: 'Su enfoque es la música romántica, con un toque clásico.',
        descripcion: 'Explora el universo sonoro de AndyCrow, un viaje musical retro lleno de sentimientos.',

        biografiaCompleta: 'AndyCrow es un compositor conocido por su habilidad para generar música a partir de sus propios cantos a capella. Miembro fundador de La Fábrica, su trabajo busca resaltar el legado de los artistas de antaño, buscando siempre darles un toque retro o clásico a sus composiciones musicales, destacando entre sus gustos, el bolero, la salsa, y las baladas.',

        cancionDestacadaId: 'SfzLPAIP2RI', // <-- Pega aquí el ID del video de YouTube

        canales: [
            {
                plataforma: 'YouTube',
                nombre_canal: 'Cantándole al amor',
                url: 'https://www.youtube.com/@Cant%C3%A1ndolealamor'
            },
            {
                plataforma: 'YouTube',
                nombre_canal: 'Happycitos',
                url: 'https://www.youtube.com/@Happycitos'
            },
            {
                plataforma: 'Spotify',
                nombre_canal: 'Cantándole al amor',
                url: 'https://open.spotify.com/artist/7CVkXqy6pJLL4kVxlE66ya'
            }
        ]
    },
    {
        nombre: 'Caronte',
        imagen: '/images/artistas/caronte.webp', // NOTA: Reemplazar con la ruta real de la imagen.
        url: '/artistas/caronte/',
        tagline: 'Dios creó al Hombre... el Hombre creó la música... Dios se olvidó del hombre.',
        descripcion: 'El Barquero Silba la melodía...',
        biografiaCompleta: 'Locutor de radio, Melómano, Irreverente, distópico, disléxico, discapaz, disfuncional, díscolo... y disconforme. Me encanta el Blues y la buena compañía...',
        cancionDestacadaId: 'UJ7K7hvyEQM',
        canales: [
            {
                plataforma: 'YouTube',
                nombre_canal: 'Canciones al Oído',
                url: 'http://www.youtube.com/@canciones-al-oido'
            },
            {
                plataforma: 'Ivoox',
                nombre_canal: 'Inoxidables',
                url: 'http://www.go.ivoox.com/sq/2330386'
            },
            {
                plataforma: 'Web',
                nombre_canal: 'Inoxidables',
                url: 'http://www.inoxidables.live'
            }
        ]
    },
    {
        nombre: 'COMET',
        imagen: '/images/artistas/Comet.webp',
        url: '/artistas/comet/',
        descripcion: 'La propuesta musical de COMET te espera. Explora sus creaciones en La Fábrica.'
    },
    {
        nombre: 'juanini',
        imagen: '/images/artistas/Juanini.webp', // NOTA: Reemplazar con la ruta real de la imagen.
        url: '/artistas/juanini/',
        tagline: 'Salve a la Diosa Jiafei :avocado: :lips: :avocado:',
        descripcion: 'Hago música cuando quiero y trato de hacerlas lo mejor posible.',
        biografiaCompleta: 'Suelo hacer musica desde hace relativamente poco, me centro sobretodo en la letra, por quiero que la letra cuente historias, o tengan significado, si bien escucho de todo , suelo centrarme en indie rock y rock español. Mi musica tambien busca recordar leyendas y mitología española',
        cancionDestacadaId: 'ID_VIDEO_NO_PROPORCIONADO', // NOTA: No se proporcionó un enlace a la canción.
        canales: [] // NOTA: No se proporcionaron canales en el formulario.
    },

    {
        nombre: 'NADADOR COMPULSIVO',
        imagen: '/images/artistas/Nadador.webp',
        url: '/artistas/nadador-compulsivo/',
        descripcion: 'La propuesta musical de Nadador Compulsivo te espera. Explora sus creaciones.'
    },
    {
        nombre: 'PURASANGRE',
        imagen: '/images/artistas/purasangre.webp',
        url: '/artistas/purasangre/',
        descripcion: 'Descubre la música y el estilo inconfundible de PURASANGRE en La Fábrica de Música.'
    },
    {
        nombre: 'RUDOLPH',
        imagen: '/images/artistas/Rudolph.webp',
        url: '/artistas/rudolph/',
        descripcion: 'Explora el universo sonoro de RUDOLPH AKB, un viaje musical único en La Fábrica.'
    },
    {
        nombre: 'Tammy',
        imagen: '/images/artistas/Tammy.webp',
        url: '/artistas/tammy/',
        descripcion: 'La propuesta musical de Tammy te espera. Explora sus creaciones en La Fábrica.'
    },
    {
        nombre: 'Txema Albert',
        imagen: '/images/artistas/txema.webp', // ¡OJO! Renombré el archivo
        url: '/artistas/txema-albert/',
        descripcion: 'Descubre la música y el estilo inconfundible de Txema Albert en La Fábrica.'
    },
    {
        nombre: 'The Zárister',
        imagen: '/images/artistas/zarister.webp', // NOTA: Reemplazar con la ruta real de la imagen.
        url: '/artistas/the-zarister/',
        tagline: 'Un poco de emoción, inspiración y un toque de magia, es la mezcla de The Zárister.',
        descripcion: 'La variedad y la creatividad predominan en las canciones de The Zárister, pero como siempre, con un toque de magia.',
        biografiaCompleta: 'The Zárister es un usuario de Suno AI español que usa Suno para expresar sus sentimientos, sus ideas e intenta dar para diferentes campos canciones sencillas para memorizar o aprender de historia o filosofía. The Zárister suele ser variable en el estilo, pero sus principales influencias para la gran mayoría de canciones proceden del rock, metal, country, pop y blues. Los artistas más influyentes de The Zárister son Bon Jovi, Billy Joel, Metallica, Hadadanza y Frank Sinatra, gracias a ello da juego a las canciones con diferentes estructuras en las canciones y buscando siempre que suenen y expresen lo que verdaderamente se quiere transmitir al receptor. El resto de cómo es The Zárister lo descubrirás a medida de que escuches sus canciones publicadas gracias a la Fábrica de la Música.',
        cancionDestacadaId: 'QSQDWkPg6jM',
        canales: [
            {
                plataforma: 'Suno AI',
                nombre_canal: 'The Zárister',
                url: 'https://suno.com/@thezarister'
            }
        ]
    },
    {
        nombre: 'BALTO',
        imagen: '/images/artistas/balta.jpg',
        url: '/artistas/balto/',
        descripcion: 'Explora el universo sonoro de The ZÁRISTER, un viaje musical único en La Fábrica.'
    },
    {
        nombre: 'CALLE ARMONÍA 13',
        imagen: '/images/artistas/calle-armonia.jpg',
        url: '/artistas/calle-13/',
        descripcion: 'Explora el universo sonoro de The ZÁRISTER, un viaje musical único en La Fábrica.'
    },
    {
        nombre: 'El_Mano_Meli',
        imagen: '/images/artistas/elmano.jpeg', // NOTA: Reemplazar con la ruta real de la imagen.
        url: '/artistas/el-mano-melo/',
        tagline: 'Algoritmos ancestrales. Sonidos del mañana para honrar el pasado.',
        descripcion: 'Fusiono el futuro y el pasado.',
        biografiaCompleta: "Ingeniero en Tecnologías de la Información de 36 años, pero la música siempre ha sido la espina clavada que nunca quise sacarme. En mi adolescencia, el trombón me abrió las puertas a ese universo, pero la vida me llevó por el camino de la tecnología, dejando la música como un eco constante en el fondo. Ese eco se convirtió en una llamada gracias a la inspiración que encontré en la música de temática vikinga y céltica. Me maravilló cómo lograban contar su mitología y honrar su cultura, fusionando instrumentos antiguos y nuevos, cánticos y tecnología de una manera épica y respetuosa. Inevitablemente me pregunté: '¿Por qué no existe algo así para la riqueza inmensa de México?'. Si bien hay propuestas valiosas en el rock y el metal, sentí la necesidad de crear algo diferente. Hoy, mis dos mundos han colisionado. La Inteligencia Artificial se ha convertido en mi instrumento, el puente que me permite saldar esa deuda con la música y, al mismo tiempo, rendir un homenaje sonoro a la grandeza de la Mesoamérica prehispánica. Este canal es el resultado de esa fusión: la lógica de la ingeniería al servicio de las leyendas ancestrales.",
        cancionDestacadaId: 'e0Q4xCnesaE',
        canales: [
            {
                plataforma: 'YouTube',
                nombre_canal: 'El Mano Melo',
                url: 'https://youtube.com/@el_manomelo?si=lHRfM3emlnYlPYPJ'
            },
            {
                plataforma: 'Spotify',
                nombre_canal: 'El_Mano_Melo',
                url: 'https://open.spotify.com/artist/1NYckRkO3bPduorVl4CDLF?si=sP8aOezPR0ecX31Ik1lyzA'
            },
            {
                plataforma: 'TikTok',
                nombre_canal: 'El_Mano_melo',
                url: 'https://www.tiktok.com/@el_mano_melo?_t=ZS-8xVGQmmNx5U&_r=1'
            }
        ]
    },
];