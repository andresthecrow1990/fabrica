// videos.js - AHORA CON EL CAMPO 'artista'

const laFabricaVideos = [
    // --- CATEGORÍA SALSA ---
    {
        id: 'ySBWW2s-Anc',
        categoria: 'Salsa',
        titulo: 'Fuerza y Sabor',
        artista: 'Calle Armonía 13' // <-- NUEVO CAMPO
    },
    {
        id: '8MjBzrY7kUo',
        categoria: 'Salsa',
        titulo: 'Que le Digo al Corazón',
        artista: 'AndyCrow' // <-- NUEVO CAMPO
    },

    {
        id: 'kC7rxNo4t5k',
        categoria: 'Salsa',
        titulo: 'Nadie sabe lo que tiene',
        artista: 'Balto' // <-- NUEVO CAMPO
    },

    {
        id: '3p1ODh6gxuQ',
        categoria: 'Salsa',
        titulo: 'Cuba te llevo en la piel',
        artista: 'Calle Armonía 13' // <-- NUEVO CAMPO
    },
    {
        id: 'c4aIp65klk8',
        categoria: 'Salsa',
        titulo: 'La cubana de mis sueños',
        artista: 'MLS' // <-- NUEVO CAMPO
    },
        {
        id: '4_IscdtFnGY',
        categoria: 'Salsa',
        titulo: 'Dame Eso',
        artista: 'Eme Latina' // <-- NUEVO CAMPO
    },

    {
        id: 'YJrMnIAtq-g',
        categoria: 'Salsa',
        titulo: 'SALSA VOL.5',
        artista: 'Varios Artistas'
    },
    {
        id: 'Zdpjo9GwGw8',
        categoria: 'Ranchera',
        titulo: 'CHULA DE MIS AMORES',
        artista: 'No especificado'
    },
    {
        id: 'bixtpvh91yQ',
        categoria: 'Ranchera',
        titulo: '"Estos Celos" (Homenaje a Vicente Fernández)',
        artista: 'CARONTE'
    },
    {
        id: '_ZxS_-pkRag',
        categoria: 'Salsa',
        titulo: 'PADRE (Estilo Rubén Blades)',
        artista: 'MLS'
    },
    {
        id: 'zDlZ9i8aKDE',
        categoria: 'Ranchera',
        titulo: 'Mil Gracias, Mamá',
        artista: 'No especificado'
    },
    {
        id: '-hi1KBMeh40',
        categoria: 'Ranchera',
        titulo: 'LA CUCARACHA (Estilo Vicente Fernández)',
        artista: 'No especificado'
    },
    {
        id: 'Bbhoa2CCBf0',
        categoria: 'Fechas Especiales',
        titulo: 'ALBÚM COMPLETO - Canciones día del padre',
        artista: 'La Fábrica de Música'
    },
    {
        id: 'RtJV1VNMe4Q',
        categoria: 'Ranchera',
        titulo: 'Nuevo Disco 2025 Tributo al mas grande!',
        artista: 'Homenaje LFDM'
    },
    {
        id: 'dMRXHJCS4sw',
        categoria: 'Flamenco',
        titulo: 'LA CERDA (Cancion Peppa Pig)',
        artista: 'MLS'
    },
    {
        id: 'vyb98UOM0XQ',
        categoria: 'Fechas Especiales',
        titulo: 'Gracias Papá',
        artista: 'No especificado'
    },
    {
        id: 'ySBWW2s-Anc',
        categoria: 'Salsa',
        titulo: 'Fuerza y Sabor',
        artista: 'CALLE ARMONÍA 13'
    },
    {
        id: 'Ffr8lhURvgo',
        categoria: 'Fechas Especiales',
        titulo: 'Mi Jefe Chido',
        artista: 'Picardía Musical'
    },
    {
        id: 'mWxS25bYemQ',
        categoria: 'Ranchera',
        titulo: 'Santa Lupita (Tributo a Chente Fernández)',
        artista: 'No especificado'
    },
    {
        id: 'znaGErTDpmI',
        categoria: 'Flamenco',
        titulo: 'Ladrón',
        artista: 'MLS'
    },
    {
        id: 'k9L2ZwXM8Lg',
        categoria: 'Salsa',
        titulo: 'GUANTANAMERA (Tributo a Rubén Blades)',
        artista: 'MLS'
    },
    {
        id: 'QEOag0a0A-I',
        categoria: 'Fechas Especiales',
        titulo: 'Feliz Día',
        artista: 'MLS'
    },
    {
        id: 'nm8TCw0EH4k',
        categoria: 'Ranchera',
        titulo: 'BANDIDO BUENO (Tributo a Vicente Fernández)',
        artista: 'No especificado'
    },
    {
        id: 'qrDwhOlb1WE',
        categoria: 'Ranchera',
        titulo: 'Si no estás (Tributo a Vicente Fernandez)',
        artista: 'La Fábrica de Música'
    },
    {
        id: 'pmCS9xvrtZE',
        categoria: 'Ranchera',
        titulo: 'Solo Tú y Nadie Más',
        artista: 'No especificado'
    },
    {
        id: 'tPunq15hoZM',
        categoria: 'Bolero',
        titulo: 'Por Ti Papá',
        artista: 'No especificado'
    },
    {
        id: 'UisRN5vgugs',
        categoria: 'Salsa',
        titulo: 'Corre (Homenaje a Rubén Blades)',
        artista: 'MLS'
    },
    {
        id: 'ByAWIfKcqxY',
        categoria: 'Salsa',
        titulo: 'Madre de Mi Corazón',
        artista: 'No especificado'
    },
    {
        id: 'qDcpQmNOnCw',
        categoria: 'Flamenco',
        titulo: 'Endulza tu Alma',
        artista: 'The Zárister'
    },
    {
        id: 'B_8ttKfty2s',
        categoria: 'Fechas Especiales',
        titulo: 'Papá',
        artista: 'Balto'
    },
    {
        id: 'cTxE09iuIZ0',
        categoria: 'Bolero',
        titulo: 'Mi Mundo (Estilo Luis Miguel)',
        artista: 'No especificado'
    },
    {
        id: 'l0WeDgGSLbM',
        categoria: 'Bolero',
        titulo: 'Contrato Roto',
        artista: 'No especificado'
    },
    {
        id: 'NHqnnIBrR4o',
        categoria: 'Ranchera',
        titulo: 'ADELITA (Tributo a Vicente Fernández)',
        artista: 'MLS'
    },
    {
        id: 'lFXFrZAiNqY',
        categoria: 'Fechas Especiales',
        titulo: 'HÉROES SILENCIOSOS',
        artista: 'No especificado'
    },
    {
        id: 'OFs2t0bdgVo',
        categoria: 'Fechas Especiales',
        titulo: '"Merci Maman"',
        artista: 'No especificado'
    },
    {
        id: 'c4aIp65klk8',
        categoria: 'Salsa',
        titulo: 'LA CUBANA DE MIS SUEÑOS',
        artista: 'MLS'
    },
    {
        id: 'nf8ZiJ2jWNg',
        categoria: 'Rock',
        titulo: 'ROCK ALTERNATIVO VOL 12',
        artista: 'La Fábrica de Música'
    },
    {
        id: 'eUm4Hy-a8sM',
        categoria: 'Salsa',
        titulo: '"Rosa ""La Manguera"""',
        artista: 'No especificado'
    },
    {
        id: 'Eo7bKPlvOhw',
        categoria: 'Fechas Especiales',
        titulo: 'VIEJO (Himno para el Jefe)',
        artista: 'No especificado'
    },
    {
        id: '3p1ODh6gxuQ',
        categoria: 'Salsa',
        titulo: 'Cuba, te llevo en la piel',
        artista: 'CALLE ARMONIA 13'
    },
    {
        id: 'Ljg5AcgApa4',
        categoria: 'Bolero',
        titulo: 'Mil Flores',
        artista: 'TAMMY'
    },
    {
        id: 'kC7rxNo4t5k',
        categoria: 'Salsa',
        titulo: 'Nadie Sabe Lo Que Tiene (Estilo Marc Anthony)',
        artista: 'Balto'
    },
    {
        id: 'vVWAuQtkSqk',
        categoria: 'Funk',
        titulo: 'FUNK VOL.10',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'AjkiOJmhmoA',
        categoria: 'Flamenco',
        titulo: 'PADRE',
        artista: 'Duende Gitano'
    },
    {
        id: 'WpdaQtkA8MU',
        categoria: 'Rock',
        titulo: 'PUNK ROCK 2025',
        artista: 'No especificado'
    },
    {
        id: '3zoIb_4bvwc',
        categoria: 'Swing',
        titulo: 'Swing Clandestino',
        artista: 'MLS'
    },
    {
        id: 'moZiVfe8iHw',
        categoria: 'Salsa',
        titulo: 'TE HUELEN MAL LOS PIES (Parodia Devórame otra vez)',
        artista: 'MLS'
    },
    {
        id: '8df-HElFHOo',
        categoria: 'Flamenco',
        titulo: 'Para Mamá',
        artista: 'No especificado'
    },
    {
        id: 'Nli97K69JD4',
        categoria: 'Fechas Especiales',
        titulo: 'Madrecita...',
        artista: 'Balto'
    },
    {
        id: 'XyWZTQi-Wyc',
        categoria: 'Rap',
        titulo: 'QUEVEDO vs GONGORA',
        artista: 'Barrena'
    },
    {
        id: 'SvIqp9HGGM0',
        categoria: 'Salsa',
        titulo: 'Toma Salsa',
        artista: 'Rudolph'
    },
    {
        id: '426TWvuXYWM',
        categoria: 'Ranchera',
        titulo: 'Mi Dulce Tormenta',
        artista: 'Tammy'
    },
    {
        id: '4xpHXfC_C9A',
        categoria: 'Ranchera',
        titulo: 'ADIOS PAPA FRANCISCO',
        artista: 'No especificado'
    },
    {
        id: '1d3nCfERt3s',
        categoria: 'Bolero',
        titulo: 'Un Jopo De Abril',
        artista: 'Txema Albert'
    },
    {
        id: 'goTC7V2KhK4',
        categoria: 'Rock',
        titulo: '¡Feminismo! - Una Crítica constructiva',
        artista: 'No especificado'
    },
    {
        id: 'CvG5zyQgNx0',
        categoria: 'Ranchera',
        titulo: 'DE JALISCO VENGO',
        artista: 'Caronte'
    },
    {
        id: 'UZPKKXZx3pc',
        categoria: 'Fechas Especiales',
        titulo: 'Maman t\'es la meilleure',
        artista: 'MLS'
    },
    {
        id: 'sOEDBnGxevc',
        categoria: 'Ranchera',
        titulo: 'Canción Cumpleaños Feliz',
        artista: 'No especificado'
    },
    {
        id: '4ACEM2ALBww',
        categoria: 'Ranchera',
        titulo: 'Bajo la Sombra del Olivo',
        artista: 'Purasangre'
    },
    {
        id: '9MPrrk0Qxys',
        categoria: 'Rock',
        titulo: 'El Bolero de Pedro',
        artista: 'Rudolph AKB'
    },
    {
        id: '4_IscdtFnGY',
        categoria: 'Salsa',
        titulo: 'Dame de Eso',
        artista: 'EME LATINA'
    },

    {
        id: '5W7oNJysHf0',
        categoria: 'Rock',
        titulo: 'Rock Alternativo vol 12',
        artista: 'LFDM RECORDS'
    },
    {
        id: 'WGNYpqR9Qjk',
        categoria: 'Salsa',
        titulo: 'SALSA 2025',
        artista: 'LFDM Recs.'
    },
    {
        id: 'qmLDJC3HITU',
        categoria: 'Salsa',
        titulo: 'LA HE LIAO PARDA (PARODIA)',
        artista: 'MLS'
    },
    {
        id: '2BWOdvzjjhQ',
        categoria: 'Funk',
        titulo: 'FUNK VOL.10 - Nueva Música FUNKY',
        artista: 'Lafabricademusica Records'
    },
    {
        id: '1fvs_gf8nEM',
        categoria: 'Flamenco',
        titulo: 'FLAMENCO VOL.6',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'zTD_C6ywPIw',
        categoria: 'Rock',
        titulo: '4 Cigarros y Media Botella',
        artista: 'Purasangre'
    },
    {
        id: '_OwofGue6oo',
        categoria: 'Rock',
        titulo: 'Paper Chains',
        artista: 'BALTO'
    },
    {
        id: '4hLqa8UItm8',
        categoria: 'Swing',
        titulo: 'SWING MUSIC VOL.8',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'TqzoabZuB0c',
        categoria: 'Blues',
        titulo: '"Blues con 2 Cojones"',
        artista: 'MLS'
    },
    {
        id: 'In_AOZcr5W4',
        categoria: 'Blues',
        titulo: 'BLUES Disco Completo vol.13',
        artista: 'LFDM RECORDS'
    },
    {
        id: 'KhEHfdvuLk8',
        categoria: 'Rock',
        titulo: 'PUNK ROCK VOL. 11 (Full Album Stream)',
        artista: 'La Fábrica de Música Records'
    },
    {
        id: '8zLIWEbi7XI',
        categoria: 'Salsa',
        titulo: 'Creo en Ti',
        artista: 'Tammy'
    },
    {
        id: 'MSy4si9Vu8g',
        categoria: 'Rock',
        titulo: 'Our Tiny Revolution',
        artista: 'Balto'
    },
    {
        id: 'gYbcyFc2itY',
        categoria: 'Blues',
        titulo: 'EL SEÑOR Y LA GUITARRA',
        artista: 'The Zârister'
    },
    {
        id: 'iiSGZxTNJ8Y',
        categoria: 'Salsa',
        titulo: '"La Vida Es Corta"',
        artista: 'AndyCrow'
    },
    {
        id: 'pal_faFr0oE',
        categoria: 'Rock',
        titulo: 'AY, LOLA, LOLA...',
        artista: 'Juanini'
    },
    {
        id: '0yJ5pEnYIQM',
        categoria: 'Flamenco',
        titulo: 'Sigue el Ritmo (Estilo Rosalía)',
        artista: 'No especificado'
    },
    {
        id: 'jt0Z3ZjkL4Y',
        categoria: 'Salsa',
        titulo: 'Baila Sal-sa-sa-sa-sa',
        artista: 'The Zárister'
    },
    {
        id: 'qFbjwTht9-E',
        categoria: 'Blues',
        titulo: 'Blues Maldito',
        artista: 'CARONTE'
    },
    {
        id: 'FeHDmu3dEUg',
        categoria: 'Blues',
        titulo: 'The King (Tributo a B.B. King)',
        artista: 'No especificado'
    },
    {
        id: 'gl0HkVliPhI',
        categoria: 'Bolero',
        titulo: 'Corazón Indomable',
        artista: 'MLS'
    },
    {
        id: 'y0s3AxcPDKE',
        categoria: 'Ranchera',
        titulo: 'rancheras 2025 - NUEVO DISCO',
        artista: 'LA FÁBRICA DE MÚSICA'
    },
    {
        id: 'MgTm8SKJQGU',
        categoria: 'Swing',
        titulo: 'Ballerina Capuccina',
        artista: 'No especificado'
    },
    {
        id: 'aQncZxxxS8s',
        categoria: 'Salsa',
        titulo: 'EL BICHITO',
        artista: 'RUDOLPH AKB'
    },
    {
        id: 'zHY8mORyMiQ',
        categoria: 'Blues',
        titulo: 'BLUES',
        artista: 'LFDM'
    },
    {
        id: 'X-zSljh9UhU',
        categoria: 'Blues',
        titulo: 'BLUES DE LAS BOLAS AZULES',
        artista: 'Picardía Musical'
    },
    {
        id: 'wwpeE7EbVLM',
        categoria: 'Rock',
        titulo: 'A La Nanita Nana',
        artista: 'MLS'
    },
    {
        id: 'Z5bwj8KwXY8',
        categoria: 'Rock',
        titulo: 'PRIMAVERA EN TUS OJOS',
        artista: 'Rudolph AKB'
    },
    {
        id: 'pZxIvhfxcVE',
        categoria: 'Flamenco',
        titulo: 'FLAMINGO FLAMENCO',
        artista: 'Picardia Musical'
    },
    {
        id: 'z5vgSTRxorE',
        categoria: 'Rock',
        titulo: 'Drinkin\' With My Old Man',
        artista: 'MLS'
    },
    {
        id: 'lLGKI5LoH9w',
        categoria: 'Bolero',
        titulo: 'Luna en la Oscuridad',
        artista: 'MLS'
    },
    {
        id: '3d1ITvw-Svw',
        categoria: 'Rock',
        titulo: 'Fake it Like you Mean it',
        artista: 'Comet'
    },
    {
        id: 's7Pu0AwrRZM',
        categoria: 'Bolero',
        titulo: '"Por un Abrazo"',
        artista: 'THE ZÁRISTER'
    },
    {
        id: 'VwMcTwYiCgg',
        categoria: 'Fechas Especiales',
        titulo: '"Bonne fête, Maman" (Estilo Angèle)',
        artista: 'MLS'
    },
    {
        id: 'hrnTC2KyZok',
        categoria: 'Salsa',
        titulo: 'Baila Conmigo',
        artista: 'Tammy'
    },
    {
        id: 'yEV9g0Sth-Q',
        categoria: 'Rock',
        titulo: 'Sin Ti',
        artista: 'MLS'
    },
    {
        id: 'DSlU1lMQbFE',
        categoria: 'Blues',
        titulo: 'A Blues For Her',
        artista: 'Caronte'
    },
    {
        id: 'G0Y4vwu-P8c',
        categoria: 'Rock',
        titulo: 'Try Anyway',
        artista: 'EME LATINA'
    },
    {
        id: 'pOa8OsyeQek',
        categoria: 'Rock',
        titulo: 'Hasta el Ultimo Segundo',
        artista: 'NADADOR COMPULSIVO'
    },
    {
        id: 'svDpKm5Qtlo',
        categoria: 'Salsa',
        titulo: 'Pretty Woman',
        artista: 'Nadador Compulsivo'
    },
    {
        id: 'DK3_oGY4gVA',
        categoria: 'Fechas Especiales',
        titulo: '"Papá, papá..."',
        artista: 'MLS'
    },
    {
        id: '8BImJcPncEk',
        categoria: 'Rock',
        titulo: 'La culpable eres tú',
        artista: 'La Fábrica de Música'
    },
    {
        id: 'WEToV8FvELA',
        categoria: 'Flamenco',
        titulo: 'El Bastón de mi Vida',
        artista: 'PuraSangre'
    },
    {
        id: 'n_LLaxcsiU0',
        categoria: 'Bolero',
        titulo: 'Bolero del Naufragio',
        artista: 'PuraSangre'
    },
    {
        id: 'qHkU6hHZZjc',
        categoria: 'Rap',
        titulo: 'TU PRIMERA VEZ...',
        artista: 'PICARDIA MUSICAL'
    },
    {
        id: 'NOo3HfzL-e0',
        categoria: 'Ranchera',
        titulo: 'Las Bellezas de Jalisco',
        artista: 'No especificado'
    },
    {
        id: 'WkOoUBPXh_4',
        categoria: 'Blues',
        titulo: 'El Blues del Cachondeo',
        artista: 'Rudolph AKB'
    },
    {
        id: '--vwkaLuIPw',
        categoria: 'Rock',
        titulo: 'But You\'re Blind',
        artista: 'Tammy'
    },
    {
        id: 'LepsMuXqEFY',
        categoria: 'Swing',
        titulo: 'Tick Tock',
        artista: 'La fabrica de musica'
    },
    {
        id: 'Sq_9PYiugRU',
        categoria: 'Flamenco',
        titulo: 'RUMBA KINKI',
        artista: 'MLS'
    },
    {
        id: 'bkePkXvL8K0',
        categoria: 'Rock',
        titulo: 'Sois Escoria',
        artista: 'TAMMY'
    },
    {
        id: '8q2--XRVrcM',
        categoria: 'Rock',
        titulo: 'Habrá Paz',
        artista: 'The Zarister'
    },
    {
        id: 'L_9u7m3swvg',
        categoria: 'Flamenco',
        titulo: 'Adiós Amor',
        artista: 'AndyCrow'
    },
    {
        id: 'L7dP1Q7GXaE',
        categoria: 'Rock',
        titulo: '¿Aún Recuerdas que...?',
        artista: 'The Zárister'
    },
    {
        id: 'iXx7nfEPdts',
        categoria: 'Salsa',
        titulo: 'CONDENADOS',
        artista: 'STORMTEMPLAR'
    },
    {
        id: 'SoVunOBxvoU',
        categoria: 'Rock',
        titulo: 'CANTOS DE VIDA Y ESPERANZA IX',
        artista: 'Barrena'
    },
    {
        id: 'rcn9gKKYIwY',
        categoria: 'Funk',
        titulo: 'Move That Soul',
        artista: 'EME Latina'
    },
    {
        id: '7Z6Dbqk0ZoA',
        categoria: 'Blues',
        titulo: 'Burnt Letters',
        artista: 'Comet'
    },
    {
        id: 'jIMws6UILtw',
        categoria: 'Fechas Especiales',
        titulo: 'SEMANA SANTA 2025 Edición Especial',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'mAIzj4FAH4w',
        categoria: 'Ranchera',
        titulo: 'Borracho de la Arbolada',
        artista: 'TRAMBOLIKO MARIACHI'
    },
    {
        id: 'ulxGqYhnX4Y',
        categoria: 'Rock',
        titulo: '7 PECADOS DIGITALES',
        artista: 'Nadador Compulsivo'
    },
    {
        id: '-0P63dnHjEk',
        categoria: 'Fechas Especiales',
        titulo: 'MERENGUE DE CELEBRACIÓN 1000 SUBS',
        artista: 'Picardía Musical & BALTO'
    },
    {
        id: '40dWRztPskU',
        categoria: 'Flamenco',
        titulo: 'BAILA CONMIGO, PITUFINA',
        artista: 'Rudolph AKB'
    },
    {
        id: '52En3WoHMSU',
        categoria: 'Flamenco',
        titulo: 'Si Tú Supieras (Estilo Rosalía)',
        artista: 'Tammy'
    },
    {
        id: '87hld3pus5o',
        categoria: 'Rock',
        titulo: 'RESACA (de adolescencia)',
        artista: 'CARONTE'
    },
    {
        id: '9oeazV62U8k',
        categoria: 'Rock',
        titulo: 'Busty Ladies',
        artista: 'MLS'
    },
    {
        id: 'XEMl59MnuxA',
        categoria: 'Flamenco',
        titulo: 'VOLAR',
        artista: 'TAMMY'
    },
    {
        id: '-XTcEV7fO5A',
        categoria: 'Swing',
        titulo: '"Not until the Ring"',
        artista: 'Balto'
    },
    {
        id: 'b1fD8Xs84vU',
        categoria: 'Rock',
        titulo: 'A LA SOMBRA DEL OLIVO',
        artista: 'Nadador Compulsivo ft. Juanini'
    },
    {
        id: 'BezOgi4tJFc',
        categoria: 'Rock',
        titulo: '"Our Tiny Revolution"',
        artista: 'Balto'
    },
    {
        id: 'CVJZAAnF-2k',
        categoria: 'Rock',
        titulo: 'Broken Inside',
        artista: 'RUDOLPH AKB'
    },
    {
        id: 'EwOT1aJfEk4',
        categoria: 'Rock',
        titulo: 'LADILLAS CARADURAS',
        artista: 'Viruela Anfibia'
    },
    {
        id: 'GtJdh8FhHhU',
        categoria: 'Rock',
        titulo: 'A CONTRAPIÉ',
        artista: 'Caronte'
    },
    {
        id: 'J-zgqlS3L7I',
        categoria: 'Rock',
        titulo: 'QUE TE PERDONE DIOS',
        artista: 'Nadador Compulsivo'
    },
    {
        id: 'd3GNTZY5N44',
        categoria: 'Ranchera',
        titulo: 'Aunque Me Cueste La Vida',
        artista: 'RUDOLPH'
    },
    {
        id: 'eSzfzG86wfs',
        categoria: 'Blues',
        titulo: 'Dark Boulevard',
        artista: 'MLS'
    },
    {
        id: 'cwGQDzE-ido',
        categoria: 'Rock',
        titulo: 'Surf Rock VOL.3',
        artista: 'Lafabricademusica records'
    },
    {
        id: 'qin8SjYVo4s',
        categoria: 'Rock',
        titulo: 'Light of my life',
        artista: 'Tammy'
    },
    {
        id: 'DKz21yGxef4',
        categoria: 'Funk',
        titulo: 'Zoológico Ilógico',
        artista: 'Picardía Musical'
    },
    {
        id: 'loK-W2C8ALA',
        categoria: 'Swing',
        titulo: 'Sway my Heart',
        artista: 'Nadador Compulsivo'
    },
    {
        id: '0eTXjN9QxTI',
        categoria: 'Funk',
        titulo: 'FUNKY LIGHTS',
        artista: 'CARONTE'
    },
    {
        id: '15iO_JcYdZw',
        categoria: 'Rock',
        titulo: 'MI CABEZA SE PARECE AL SÁLVAME DELUXE',
        artista: 'Juanini'
    },
    {
        id: 'nLFmF6RAJ1I',
        categoria: 'Rap',
        titulo: 'BLACK POPE - PAPA NEGRO',
        artista: 'MLS'
    },
    {
        id: 'FszcPaXrAN8',
        categoria: 'Ranchera',
        titulo: 'Rancheras VOL.4',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'ImavtCeYID0',
        categoria: 'Rock',
        titulo: 'Only You Mark The Road',
        artista: 'Caronte'
    },
    {
        id: 'TJAmRc1P3Zc',
        categoria: 'Flamenco',
        titulo: 'Tu Piel',
        artista: 'AndyCrow'
    },
    {
        id: '_uErFzx13tI',
        categoria: 'Rap',
        titulo: 'RAP/HIP-HOP MUSIC VOL.8',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'eRQp52eSjBQ',
        categoria: 'Country',
        titulo: 'LA VIDA REDNECK EN ALABAMA',
        artista: 'MLS'
    },
    {
        id: 'fB9HrAbYoS0',
        categoria: 'Rock',
        titulo: 'Wast just lief (Nickelback Style)',
        artista: 'LA FÁBRICA DE MÚSICA'
    },
    {
        id: 'qnTl_WfIbiI',
        categoria: 'Blues',
        titulo: 'You Left',
        artista: 'TAMMY'
    },
    {
        id: 'HJfaWhk0xIg',
        categoria: 'Ranchera',
        titulo: 'Mi Linda Dama',
        artista: 'TAMMY'
    },
    {
        id: 'KyAxGUhVJAk',
        categoria: 'Flamenco',
        titulo: 'Mil Matices de Grises',
        artista: 'Txema Albert'
    },
    {
        id: 'nKKg8_LevFs',
        categoria: 'Flamenco',
        titulo: 'Noche de Verano',
        artista: 'Caronte'
    },
    {
        id: 'td1vBDdRan8',
        categoria: 'Rock',
        titulo: 'NUESTROS DÍAS',
        artista: 'The Zarister'
    },
    {
        id: 'upQyuMmQpys',
        categoria: 'Flamenco',
        titulo: 'FLAMENCO VOL.6 (nuevo disco)',
        artista: 'Lafabricademusica Records'
    },

    {
        id: 'Rnb9GTX4wPA',
        categoria: 'Fechas Especiales',
        titulo: 'Hoy Le Canto Al Cielo',
        artista: 'MyKrazy'
    },
    {
        id: 'bvzDdQLMm6g',
        categoria: 'Country',
        titulo: 'Camino a Nashville',
        artista: 'Txema Albert'
    },
    {
        id: 'htXsl2A8wOA',
        categoria: 'Rock',
        titulo: 'Por favor y gracias - Llego el Apocalipsis Robot',
        artista: 'No especificado'
    },
    {
        id: 'y8qv82If2u0',
        categoria: 'Fechas Especiales',
        titulo: 'SalmoRumba91',
        artista: 'MLS'
    },
    {
        id: 'ORbLHgl7bCg',
        categoria: 'Swing',
        titulo: 'El secreto de tus ojos',
        artista: 'Caronte'
    },
    {
        id: '_o2KutCe1rM',
        categoria: 'Funk',
        titulo: '"FREEDOM!"',
        artista: 'NC'
    },
    {
        id: 'nnx-o09CV48',
        categoria: 'Rock',
        titulo: 'GARRUPIPI',
        artista: 'My Lab - Zappo'
    },
    {
        id: 'wm8RLs0OQEc',
        categoria: 'Country',
        titulo: 'COUNTRY MUSIC VOL.7',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'WMGicuAUshE',
        categoria: 'Rock',
        titulo: 'Punk & Western',
        artista: 'Txema Albert'
    },
    {
        id: 'dsP0PXo6Pa8',
        categoria: 'Rock',
        titulo: 'La Revolución del Cambio',
        artista: 'The Zárister'
    },
    {
        id: 'hjy5ER1FZsg',
        categoria: 'Funk',
        titulo: 'MODO VACILÓN',
        artista: 'MLS'
    },
    {
        id: 'kdjGOapTI3I',
        categoria: 'Rock',
        titulo: 'Enamorar',
        artista: 'RUDOLPH AKB'
    },
    {
        id: 'uyTxPXCtCJ0',
        categoria: 'Flamenco',
        titulo: 'Prometeo (Cover Extremoduro)',
        artista: 'MLS'
    },
    {
        id: '-pjSm7v-nG4',
        categoria: 'Fechas Especiales',
        titulo: 'PADRE NUESTRO',
        artista: 'LFDM'
    },
    {
        id: '5QHOin0JbJ4',
        categoria: 'Ranchera',
        titulo: 'Aquiles Baeza - Música, Albures y Muerte',
        artista: 'No especificado'
    },
    {
        id: 'ZBAjkCG6EKw',
        categoria: 'Reggae',
        titulo: 'Guia Rastaman',
        artista: 'STORMTEMPLAR'
    },
    {
        id: 'cuq6gFckgSc',
        categoria: 'Flamenco',
        titulo: 'ÚLTIMO DÍA',
        artista: 'The Zárister'
    },
    {
        id: 'hZgI2Jvo4k8',
        categoria: 'Flamenco',
        titulo: 'Cuando Me Nombras',
        artista: 'Tammy'
    },
    {
        id: 'iz9FYLwCl7Q',
        categoria: 'Country',
        titulo: 'Tacones y Deseo',
        artista: 'Rudolph AKB'
    },
    {
        id: 'vtzAoS0cI7Q',
        categoria: 'Rap',
        titulo: 'JAILHOUSE RAP',
        artista: 'MLS'
    },
    {
        id: '-KXhB2t_bqE',
        categoria: 'Swing',
        titulo: 'Swing VOL.8',
        artista: 'Lafabricademusica Records'
    },
    {
        id: '0aQZvj76Zpg',
        categoria: 'Rap',
        titulo: 'Apagón y Paz',
        artista: 'The Zárister'
    },
    {
        id: 'Rglx1lmAKQM',
        categoria: 'Swing',
        titulo: 'Swing in My Step',
        artista: 'AndyCrow'
    },
    {
        id: 'SATHPC3QuTk',
        categoria: 'Swing',
        titulo: 'Cansado Estoy de Haber Sin Ti Vivido',
        artista: 'Barrena'
    },
    {
        id: 'YNvXb8yJ0M4',
        categoria: 'Rap',
        titulo: 'Nothing But The Truth',
        artista: 'Comet'
    },
    {
        id: 'G4NBp71WgQg',
        categoria: 'Reggae',
        titulo: 'Reggae VOL.2',
        artista: 'Lafabricademusica records'
    },
    {
        id: 'GM5HI8f835g',
        categoria: 'Rap',
        titulo: 'VERSOS AL VIENTO',
        artista: 'Calle Armonía XIII'
    },
    {
        id: 'HmX6E6LKU-A',
        categoria: 'Ranchera',
        titulo: '"La ""Viuda Negra"""',
        artista: 'MLS'
    },
    {
        id: 'aWk9CBp0LuI',
        categoria: 'Fechas Especiales',
        titulo: 'VIRGEN MORENA DE CÁDIZ',
        artista: 'MLS'
    },
    {
        id: 'nIxH7xSthMQ',
        categoria: 'Fechas Especiales',
        titulo: 'AVE MARIA CANTADA',
        artista: 'LFDM'
    },
    {
        id: 'tDhUOetl6Ew',
        categoria: 'Rap',
        titulo: 'BLACK POPE - PAPA NEGRO',
        artista: 'MLS'
    },
    {
        id: 'xJPKchvlVHU',
        categoria: 'Soul',
        titulo: 'Háblame Suave',
        artista: 'Nadador Compulsivo'
    },
    {
        id: 'AAOFYZ93QvY',
        categoria: 'Funk',
        titulo: 'Funky Punky',
        artista: 'Rudolph AKB'
    },
    {
        id: 'CyFHab45BK4',
        categoria: 'Funk',
        titulo: 'zoologico ilogico',
        artista: 'La fabrica de Musica'
    },

    {
        id: 'UtHLHdgAuJo',
        categoria: 'Rock',
        titulo: 'NO SABES QUIEN SOY',
        artista: 'Frank Pancorbo'
    },
    {
        id: 'h1CjWYupwyo',
        categoria: 'Rock',
        titulo: 'LAS NENAS DE LOS 90s',
        artista: 'Frank Pancorbo'
    },
    {
        id: 'j_toHPhzQEs',
        categoria: 'Reggae',
        titulo: 'Come Baby',
        artista: 'ANDYCROW'
    },
    {
        id: 'mkWtkzX8uiw',
        categoria: 'Ranchera',
        titulo: '"No Más Canciones Tristes"',
        artista: 'Txema Albert'
    },
    {
        id: 'pYWs_c_YHsw',
        categoria: 'Flamenco',
        titulo: 'Dónde Guardo el Dolor',
        artista: 'Calle Armonia 13'
    },
    {
        id: '30szgH1_i4c',
        categoria: 'Country',
        titulo: 'Velvet Thunder',
        artista: 'Nadador Compulsivo'
    },
    {
        id: '8nCWHakrD1o',
        categoria: 'Swing',
        titulo: 'Shine Tonight',
        artista: 'Rudolph AKB'
    },
    {
        id: '9icNC59fIDU',
        categoria: 'Flamenco',
        titulo: 'Guardián de las Estrellas',
        artista: 'MLS'
    },
    {
        id: 'Dxq2XuW1AGI',
        categoria: 'Soul',
        titulo: 'RnB / Soul / Jazz VOL.1',
        artista: 'Lafabricademusica records'
    },
    {
        id: 'HaRDIlkCJwE',
        categoria: 'Rock',
        titulo: '14 INVIERNOS',
        artista: 'Caronte'
    },

    {
        id: 'Jbo2QprUgpw',
        categoria: 'Rock',
        titulo: 'DANCE WITH THE WAVES',
        artista: 'TAMMY'
    },
    {
        id: 'MZYbwbwRmbI',
        categoria: 'Ranchera',
        titulo: 'Siempre Cenizas',
        artista: 'Nadador Compulsivo'
    },
    {
        id: 'Mk81zKzK_1U',
        categoria: 'Rock',
        titulo: '25 de MAYO',
        artista: 'MLS'
    },
    {
        id: 'QyBYfpiaz9s',
        categoria: 'Swing',
        titulo: 'Bailando Contigo',
        artista: 'AndyCrow'
    },
    {
        id: 'Sy-Mdr1ZBVY',
        categoria: 'Rap',
        titulo: 'Nutrias & Piedras',
        artista: 'Tammy'
    },
    {
        id: 'YFy-DKFPPmE',
        categoria: 'Flamenco',
        titulo: 'La Queja',
        artista: 'Caronte'
    },
    {
        id: 'b45DgOCrKnA',
        categoria: 'Ranchera',
        titulo: 'Te fuiste y yo aqui me quedo',
        artista: 'COMET'
    },
    {
        id: 'hmwiBvxrNZk',
        categoria: 'Ranchera',
        titulo: 'EL BAILE DEL GORILA, PERO RANCHERA',
        artista: 'MLS feat. MELODY'
    },
    {
        id: 'iUmt51yiOj4',
        categoria: 'Flamenco',
        titulo: 'En Tu Nombre',
        artista: 'No especificado'
    },
    {
        id: 'vlLBwhX7Rlw',
        categoria: 'Rock',
        titulo: 'EL CAMERINO',
        artista: 'Caronte'
    },
    {
        id: 'zrmXz635JEo',
        categoria: 'Country',
        titulo: 'MARILYN MANSON COUNTRY (Cover)',
        artista: 'MLS'
    },

    {
        id: '7OocDJwSk_o',
        categoria: 'Rock',
        titulo: 'Cartagena',
        artista: 'No especificado'
    },
    {
        id: '9SuLFkaEdpA',
        categoria: 'Country',
        titulo: 'Country 2025',
        artista: 'LFDM'
    },
    {
        id: '9vwLGCAcYLw',
        categoria: 'Ranchera',
        titulo: 'Bendiciones – Homenaje a Ternura68',
        artista: 'No especificado'
    },
    {
        id: 'B6LZcPyIA54',
        categoria: 'Fechas Especiales',
        titulo: 'Quejío de Campana',
        artista: 'No especificado'
    },
    {
        id: 'NvtO_uBZY40',
        categoria: 'Fechas Especiales',
        titulo: 'A Father\'s Song',
        artista: 'comet'
    },
    {
        id: 'PkL4Xo2ejUM',
        categoria: 'Rap',
        titulo: '#hiphop2025 VOL.8',
        artista: 'Lafabricademusica Records'
    },
    {
        id: 'Zvbm4jo_NE0',
        categoria: 'Reggae',
        titulo: 'RAGGA NENA',
        artista: 'MyLab'
    },
    {
        id: '_bMAPpad5nA',
        categoria: 'Ranchera',
        titulo: '¡Quiero Seguir!',
        artista: 'RUDOLPH'
    },
    {
        id: 'jk9TWejdjak',
        categoria: 'Funk',
        titulo: 'GORDAS (Cover Orquesta Mondragón)',
        artista: 'MLS'
    },
    {
        id: 'l_iiPITuFp4',
        categoria: 'Fechas Especiales',
        titulo: 'Llantos de Sevilla',
        artista: 'No especificado'
    },
    {
        id: 'og4fsP_hjqw',
        categoria: 'Reggae',
        titulo: 'En Tu Mirada',
        artista: 'No especificado'
    },
    {
        id: 'xYHTJgwPd24',
        categoria: 'Country',
        titulo: '"Front Porch Friend"',
        artista: 'Calle Armonía 13'
    },
    {
        id: '2c_DUuzBReY',
        categoria: 'Soul',
        titulo: '"Solo Tú (Cover ""Only You"")"',
        artista: 'AndyCrow'
    },
    {
        id: '9bIeIHsHxgM',
        categoria: 'Funk',
        titulo: 'Soy un Influencer (PARODIA)',
        artista: 'No especificado'
    },
    {
        id: 'Do7bX3frNbE',
        categoria: 'Rock',
        titulo: 'Plastic Patriot',
        artista: 'COMET'
    },
    {
        id: 'E5uece2GUIs',
        categoria: 'Fechas Especiales',
        titulo: 'Oración - Santa Teresa de Jesús',
        artista: 'Barrena'
    },
    {
        id: 'JxRCC_c9qm8',
        categoria: 'Flamenco',
        titulo: 'El Conejito Torero',
        artista: 'RUDOLPH AKB'
    },
    {
        id: 'ed9GZrWiodA',
        categoria: 'Funk',
        titulo: 'ES LA VIDA',
        artista: 'The ZÁRISTER'
    },
    {
        id: 'lH38uNaPvso',
        categoria: 'Country',
        titulo: 'The Long Way Home',
        artista: 'COMET'
    },
    {
        id: 'oV4fT5UtF6E',
        categoria: 'Flamenco',
        titulo: 'Flor del Cielo',
        artista: 'Tammy'
    },

    {
        id: 'xTRRLcvw-j8',
        categoria: 'Rock',
        titulo: 'VAMOS A CONTAR MENTIRAS TRALARÁ',
        artista: 'MLS'
    },
    {
        id: 'y3aQ1-Q1lII',
        categoria: 'Rock',
        titulo: 'Hogueras al Anochecer',
        artista: 'Rudolph'
    },
    {
        id: 'yiUgLx0DEmE',
        categoria: 'Soul',
        titulo: 'Última Bala',
        artista: 'No especificado'
    },
    {
        id: '0ZNvx8VD0sc',
        categoria: 'Soul',
        titulo: 'Nubes',
        artista: 'Caronte'
    },
    {
        id: '8vgv8Ht7x9I',
        categoria: 'Rap',
        titulo: 'Fabricando Vida',
        artista: 'No especificado'
    },
    {
        id: 'AYa8JyaE1L0',
        categoria: 'Rock',
        titulo: 'NATIVOS',
        artista: 'The Zárister'
    },
    {
        id: 'Du_t9ibdCN8',
        categoria: 'Country',
        titulo: 'MARILYN MANSON COUNTRY (Cover)',
        artista: 'MLS'
    },
    {
        id: 'Es-IRgToC90',
        categoria: 'Soul',
        titulo: 'Fade to Blue',
        artista: 'No especificado'
    },
    {
        id: 'GKh51k7IKiY',
        categoria: 'Rock',
        titulo: 'Whiskey and Heartbreak',
        artista: 'Comet'
    },
    {
        id: 'K1ouShXABLo',
        categoria: 'Rap',
        titulo: 'BLACK POPE - PAPA NEGRO',
        artista: 'MLS'
    },
    {
        id: 'VWkJ1zPpD5Q',
        categoria: 'Fechas Especiales',
        titulo: 'Rajando el Aire',
        artista: 'MLS'
    },
    {
        id: 'WewtoFfExpo',
        categoria: 'Country',
        titulo: 'Mountain Town Memories',
        artista: 'Caronte'
    },
    {
        id: 'bbhUOVeFVqk',
        categoria: 'Reggae',
        titulo: 'SOUND IS POWER',
        artista: 'FERVEX'
    },
    {
        id: 'd3k_yq_MmKg',
        categoria: 'Ranchera',
        titulo: 'Te quiero más que a mi mamá',
        artista: 'Anonimo'
    },
    {
        id: 'ehSNPo2oMh8',
        categoria: 'Rap',
        titulo: 'Callos con Garbanzos',
        artista: 'Tammy'
    },
    {
        id: 'qdpRwwE8nRc',
        categoria: 'Soul',
        titulo: 'YA NO SOY TU SOMBRA',
        artista: 'No especificado'
    },
    {
        id: 'xaEJ7jKxaSI',
        categoria: 'Rap',
        titulo: 'Mundo Hipócrita',
        artista: 'No especificado'
    },
    {
        id: '-6WLaLXOclw',
        categoria: 'Blues',
        titulo: 'EL BLUES DE LA ESCALERA',
        artista: 'No especificado'
    },
    {
        id: '01LXWm_0Qmw',
        categoria: 'Soul',
        titulo: 'SOUL RNB JAZZ - 2025',
        artista: 'LFDM'
    },
    {
        id: '1Gfej6aCO-U',
        categoria: 'Reggae',
        titulo: '¡LOVETROPIC!',
        artista: 'No especificado'
    },
    {
        id: '4Px5UnFf-dc',
        categoria: 'Reggae',
        titulo: 'The Blame is...',
        artista: 'Caronte'
    },
    {
        id: '7ELkmxeiMpg',
        categoria: 'Rock',
        titulo: 'She\'s My California Dream',
        artista: 'Comet'
    },
    {
        id: '8G55AtvmTMQ',
        categoria: 'Rock',
        titulo: 'BENIDORM',
        artista: 'PURASANGRE'
    },
    {
        id: 'B9W6HcLzQdM',
        categoria: 'Country',
        titulo: 'Una Chica Sin Control',
        artista: 'No especificado'
    },
    {
        id: 'Dp5AFpD0Om8',
        categoria: 'Reggae',
        titulo: 'La Cola del Gay (Parodia)',
        artista: 'Autor Anónimo'
    },
    {
        id: 'I5aMUg_Gm5U',
        categoria: 'Country',
        titulo: 'Dust in Her Footsteps',
        artista: 'Tammy'
    },
    {
        id: 'NqK-ejNOt_c',
        categoria: 'Reggae',
        titulo: 'Two Steps to Paradise',
        artista: 'Rudolph'
    },
    {
        id: 'QSQDWkPg6jM',
        categoria: 'Country',
        titulo: '"Llévame a Casa, Carretera a Dentro"',
        artista: 'No especificado'
    },
    {
        id: 'QxR5004HP28',
        categoria: 'Rock',
        titulo: 'Surfear en el Atlántico',
        artista: 'The Zarister'
    },
    {
        id: 'R1VQ-FehL3c',
        categoria: 'Rock',
        titulo: 'Wild Cat',
        artista: 'EME Latina'
    },
    {
        id: 'TDoIClPwRWI',
        categoria: 'Rock',
        titulo: 'SURFEAR EN TU SALIVA',
        artista: 'MLS'
    },
    {
        id: 'Xw1gRAP7ozM',
        categoria: 'Rock',
        titulo: 'Impossible to Reach',
        artista: 'Rudolph'
    },
    {
        id: 'Ythbhoxfnis',
        categoria: 'Rock',
        titulo: 'Endless Summer Ride',
        artista: 'Inoxidables Podcast'
    },
    {
        id: '_lCffQa1cQI',
        categoria: 'Country',
        titulo: 'Riding With My Old Friend',
        artista: 'Tammy'
    },
    {
        id: 'b09LnraPfz0',
        categoria: 'Soul',
        titulo: 'Lemon Kiss',
        artista: 'MLS'
    },
    {
        id: 'cGjIDR-g2hM',
        categoria: 'Country',
        titulo: 'Oakbone Memories',
        artista: 'Caronte'
    },
    {
        id: 'iQ5p8c-i7ss',
        categoria: 'Country',
        titulo: 'Serpent Got The Fire',
        artista: 'MLS'
    },
    {
        id: 'iQSWehOdSTs',
        categoria: 'Swing',
        titulo: 'Not until the ring',
        artista: 'No especificado'
    },
    {
        id: 'ka-LX-7Ha6Y',
        categoria: 'Rock',
        titulo: 'Free on the Beach',
        artista: 'Andycrow'
    },
    {
        id: 'lMcEIZW3lfM',
        categoria: 'Soul',
        titulo: 'Besos Limón',
        artista: 'No especificado'
    },
    {
        id: 'oeHto97SCLw',
        categoria: 'Rock',
        titulo: '"Vete a Cagar (Parodia ""Los Pajaritos"")"',
        artista: 'MLS'
    },
    {
        id: 's9Ie13p4_2Q',
        categoria: 'Soul',
        titulo: 'El amor tiene forma de mujer',
        artista: 'AndyCrow'
    },
    {
        id: 'sNDLVp80iqo',
        categoria: 'Reggae',
        titulo: 'Bajo el Sol (Estilo UB40)',
        artista: 'AndyCrow'
    },
    {
        id: 'sasAOwGFFYw',
        categoria: 'Fechas Especiales',
        titulo: 'SEMANA SANTA 2025 - Música Nueva',
        artista: 'No especificado'
    },
    {
        id: '-L5sKswZFIw',
        categoria: 'Rock',
        titulo: 'OLAS Y PECADO',
        artista: 'FERVEX'
    },
    {
        id: '2-Sn4cP80CI',
        categoria: 'Soul',
        titulo: 'Breathe Like Jazz',
        artista: 'Fervex'
    },
    {
        id: '4NoBG2qHH40',
        categoria: 'Rock',
        titulo: 'Brokeback Beach',
        artista: 'No especificado'
    },
    {
        id: '5yh0ZZJWtY8',
        categoria: 'Country',
        titulo: 'Let Him Go, And God Rest His Soul',
        artista: 'Juanini'
    },
    {
        id: '6PQNUZAH_pg',
        categoria: 'Reggae',
        titulo: 'Hoy es mi Día',
        artista: 'Caronte'
    },
    {
        id: '8ZNcHi2lcek',
        categoria: 'Soul',
        titulo: 'Got To Be Free',
        artista: 'Nadador Compulsivo'
    },
    {
        id: 'Ggrn7lPvnTM',
        categoria: 'Rock',
        titulo: '"Cuando Tú Mueras (Estilo Frankie Lymon)"',
        artista: 'No especificado'
    },
    {
        id: 'H1IbPl9DnuU',
        categoria: 'Rock',
        titulo: 'Se Acabó El Verano',
        artista: 'Purasangre'
    },
    {
        id: 'IRHWW8VuMwI',
        categoria: 'Reggae',
        titulo: 'GREEN LEAF',
        artista: 'No especificado'
    },
    {
        id: 'QXPpEYJiz80',
        categoria: 'Rock',
        titulo: 'SURF ROCK',
        artista: 'LA FABRICADEMUSICA'
    },
    {
        id: 'RUjuvVyubn8',
        categoria: 'Soul',
        titulo: 'Mon Amour',
        artista: 'Rudolph'
    },
    {
        id: 'Ry65pQsPXKs',
        categoria: 'Country',
        titulo: 'Houston 2 Step Rodeo Nights',
        artista: 'No especificado'
    },
    {
        id: 'ScMNJORdFWI',
        categoria: 'Reggae',
        titulo: 'QUEEN OF THE DANCEFLOOR',
        artista: 'TAMMY'
    },
    {
        id: 'Ys-mwhhYR2U',
        categoria: 'Reggae',
        titulo: 'REGGAE 2025',
        artista: 'LFDM'
    },
    {
        id: '_286XAjmNTc',
        categoria: 'Soul',
        titulo: 'PERDIDO EN TI',
        artista: 'Fervex'
    },
    {
        id: 'gOn9VSgJyTs',
        categoria: 'Soul',
        titulo: 'DIME QUE ME QUIERES (Estilo Alicia Keys)',
        artista: 'No especificado'
    },
    {
        id: 'lwX3wCoRndc',
        categoria: 'Soul',
        titulo: 'Back to the Bronx (Estilo Whitney Houston)',
        artista: 'No especificado'
    },
    {
        id: 'nsr6wm9y44M',
        categoria: 'Reggae',
        titulo: 'Banana Mystery',
        artista: 'No especificado'
    },
    {
        id: 'pKzk6XzRy78',
        categoria: 'Reggae',
        titulo: 'Waves of Joy',
        artista: 'COMET'
    },
    {
        id: 'rtFW4SlLf3Q',
        categoria: 'Fechas Especiales',
        titulo: 'La Saeta (Homenaje a Machado y Serrat)',
        artista: 'MLS'
    },
    {
        id: 'sViraC4caUk',
        categoria: 'Reggae',
        titulo: 'Tracatrá',
        artista: 'Rudolph'
    }

];