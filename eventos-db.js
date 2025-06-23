// eventos-db.js - ACTUALIZADO CON DATOS REALES

const laFabricaEventos = [
     {
        "semana": "Semana 16: 24 Jun - 06 Jul, 2025",
        "genero": "Copla Española   ",
        "estado": "participando",
        "ganador": null,
        "playlistUrl": "#"
    },
         {
        "semana": "Semana 16: 16 Jun - 23 Jun, 2025",
        "genero": "Neo Flamenco",
        "estado": "votacion",
        "ganador": null,
        "playlistUrl": "https://www.youtube.com/watch?v=uUgOv_zGEAU&list=PLJS2jVC4JllCarFZ6SfHHuqEyBFUwRpBH"
    },
      {
        "semana": "Semana 14: 09 Jun - 15 Jun, 2025",
        "genero": "Boleros",
        "estado": "finalizado",
        "ganador": {
            "nombre": "AndyCrow",
            "cancion": "Por ti papá",
            "videoId": "tPunq15hoZM"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=9MPrrk0Qxys&list=PLJS2jVC4JllBe0LL_wq2N0rYiy6NWdukm"
    },
    {
        "semana": "Semana 13: 02 Jun - 08 Jun, 2025",
        "genero": "Blues",
        "estado": "finalizado",
        "ganador": {
            "nombre": "MLS",
            "cancion": "Blues con 2 Cojones",
            "videoId": "TqzoabZuB0c"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=TqzoabZuB0c&list=PLJS2jVC4JllD8EKdLZuroFpxAEULLZBLw"
    },
    {
        "semana": "Semana 12: 26 May - 01 Jun, 2025",
        "genero": "Rock Alternativo",
        "estado": "finalizado",
        "ganador": {
            "nombre": "PURASANGRE",
            "cancion": "4 cigarros y media botella",
            "videoId": "zTD_C6ywPIw"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=pal_faFr0oE&list=PLJS2jVC4JllDcC2K0TwamJ6x0zDP1j2Nn"
    },
    {
        "semana": "Semana 11: 19 May - 25 May, 2025",
        "genero": "Punk rock",
        "estado": "finalizado",
        "ganador": {
            "nombre": "MLS",
            "cancion": "Sin ti",
            "videoId": "yEV9g0Sth-Q"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=G0Y4vwu-P8c&list=PLJS2jVC4JllCw-AnsPVHwSGvzgfLKTAKw"
    },
    {
        "semana": "Semana 10: 12 May - 18 May, 2025",
        "genero": "Funk",
        "estado": "finalizado",
        "ganador": {
            "nombre": "CARONTE",
            "cancion": "FUNKY LIGHTS",
            "videoId": "0eTXjN9QxTI"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=0eTXjN9QxTI&list=PLJS2jVC4JllB5iAP4YuBZLtAYeAuHJY4b"
    },
    {
        "semana": "Semana 9: 05 May - 11 May, 2025",
        "genero": "Swing",
        "estado": "finalizado",
        "ganador": {
            "nombre": "AndyCrow",
            "cancion": "Tick Tock",
            "videoId": "LepsMuXqEFY"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=ORbLHgl7bCg&list=PLJS2jVC4JllCyPfbkf539oUrMbPB65sd2"
    },
    {
        "semana": "Semana 8: 28 Abr - 04 May, 2025",
        "genero": "Rap",
        "estado": "finalizado",
        "ganador": {
            "nombre": "MLS",
            "cancion": "Black Papa",
            "videoId": "K1ouShXABLo"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=YNvXb8yJ0M4&list=PLJS2jVC4JllBSLsOEyR7hAIDYIqTj1qOa"
    },
    {
        "semana": "Semana 7: 21 Abr - 27 Abr, 2025",
        "genero": "Country",
        "estado": "finalizado",
        "ganador": {
            "nombre": "BALTO",
            "cancion": "Houston 2 Step Rodeo Nights",
            "videoId": "Ry65pQsPXKs"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=GKh51k7IKiY&list=PLJS2jVC4JllC3Pe2m2F3KVGlFw1wuD1jY"
    },
    {
        "semana": "Semana 6: 14 Abr - 20 Abr, 2025",
        "genero": "Flamenco",
        "estado": "finalizado",
        "ganador": {
            "nombre": "MLS",
            "cancion": "Rumba Kinki",
            "videoId": "Sq_9PYiugRU"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=cuq6gFckgSc&list=PLJS2jVC4JllDVHZ2ERtb3BYtGNyOjjxEK"
    },
    {
        "semana": "Semana 5: 07 Abr - 13 Abr, 2025",
        "genero": "Salsa",
        "estado": "finalizado",
        "ganador": {
            "nombre": "CALLE ARMONÍA 13",
            "cancion": "Fuerza y Sabor",
            "videoId": "ySBWW2s-Anc"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=eUm4Hy-a8sM&list=PLJS2jVC4JllDh42-C3R0Vpvgea70Z8AJU"
    },
    {
        "semana": "Semana 4: 31 Mar - 06 Abr, 2025",
        "genero": "Rancheras",
        "estado": "finalizado",
        "ganador": {
            "nombre": "AndyCrow",
            "cancion": "Solo tú y nadie mas",
            "videoId": "pmCS9xvrtZE"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=mAIzj4FAH4w&list=PLJS2jVC4JllAeTWqElf0eSZ3IDJje13Pe&pp=0gcJCWMEOCosWNin"
    },
    {
        "semana": "Semana 3: 24 Mar - 30 Mar, 2025",
        "genero": "Surf Rock",
        "estado": "finalizado",
        "ganador": {
            "nombre": "AndyCrow",
            "cancion": "Cartagena",
            "videoId": "7OocDJwSk_o"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=7OocDJwSk_o&list=PLJS2jVC4JllCZVIG22eT0qm4F8fDtMJ3o"
    },
    {
        "semana": "Semana 2: 17 Mar - 23 Mar, 2025",
        "genero": "Reggae",
        "estado": "finalizado",
        "ganador": {
            "nombre": "AndyCrow",
            "cancion": "Lo veo en tu mirada",
            "videoId": "og4fsP_hjqw"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=bbhUOVeFVqk&list=PLJS2jVC4JllAtetsv0tlzZd4mXeRCvA-Z"
    },
    {
        "semana": "Semana 1: 10 Mar - 16 Mar, 2025",
        "genero": "Rbn Soul Y Jazz",
        "estado": "finalizado",
        "ganador": {
            "nombre": "RUDOLPH AKB",
            "cancion": "YA NO SOY TU SOMBRA",
            "videoId": "qdpRwwE8nRc"
        },
        "playlistUrl": "https://www.youtube.com/watch?v=qdpRwwE8nRc&list=PLJS2jVC4JllDwDJ9CyPujjMQYMBttx-qw"
    }
    
];