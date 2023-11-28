// Base de datos de películas (puedes reemplazar con tus propias películas)
const peliculas = [
    { titulo: "Culpa mia ", año: 2023, link: "../html/html peliculas/html romanticas/Pelicula Culpa mia.html" },
    { titulo: "Bolt: Un perro fuera de serie", año: 2008, link: "../html/html peliculas/html animadas/Pelicula Bolt.html" },
    { titulo: "Tarzan", año: 1999, link: "../html/html peliculas/html animadas/Pelicula Tarzan.html" },
    { titulo: "Mortal Kombat", año: 2021, link: "../html/html peliculas/html accion/Pelicula Mortal Kombat.html" },
    { titulo: "Capitan America: el primer vengador", año: 2011, link: "../html/html peliculas/html accion/Pelicula Capitán América.html" },
    { titulo: "Dragon Ball Z - Broly El Legendario Super Saiyajin", año: 1993, link: "../html/html peliculas/html anime/Pelicula Dragon Ball Z - Broly El Legendario Super Saiyajin.html" },
    { titulo: "Nowhere", año: 2023, link: "../html/html peliculas/html accion/Pelicula Nowhere.html" },
    { titulo: "Along with the Gods: The Two Worlds", año: 2017, link: "../html/html peliculas/html accion/Pelicula Along with the Gods.html" },
    { titulo: "Junto con los dioses: los dos mundos", año: 2017, link: "../html/html peliculas/html accion/Pelicula Along with the Gods.html" },
    { titulo: "El Lorax: en busca de la trúfula perdida", año: 2012, link: "../html/html peliculas/html animadas/Peliculas El Lorax.html" },
    { titulo: "The Seven Deadly Sins-prisioneros del cielo", año: 2018, link: "../html/html peliculas/html anime/Pelicula The Seven Deadly Sins-prisioneros del cielo.html" },
    { titulo: "los 7 pecados capitales Sins-prisioneros del cielo", año: 2018, link: "../html/html peliculas/html anime/Pelicula The Seven Deadly Sins-prisioneros del cielo.html" },
    { titulo: "Super Mario Bros. La película", año: 2023, link: "../html/html peliculas/html animadas/Pelicula Mario bros.html" },
    { titulo: "Your Name", año: 2016, link: "../html/html peliculas/html romanticas/Pelicula Your name.html" },
    { titulo: "Amor de gata", año: 2020, link: "../html/html peliculas/html romanticas/Pelicula Amor de gata.html" },
    { titulo: "Una chica del siglo XX", año: 2022, link: "../html/html peliculas/html romanticas/Pelicula Una chica del siglo XX.html" },
    { titulo: "Intensamente", año: 2015, link: "../html/html peliculas/html animadas/Pelicula Intensamente.html" },
    { titulo: "Demon Slayer: El tren infinito", año: 2020, link: "../html/html peliculas/html anime/Pelicula Demon Slayer El tren infinito.html" },
    { titulo: "La dama y el vagabundo", año: 1955, link: "../html/html peliculas/html romanticas/Pelicula La dama y el vagabundo.html" },
    { titulo: "Ponyo y el secreto de la sirenita", año: 2008, link: "../html/html peliculas/html anime/Pelicula Ponyo y el secreto de la sirenita.html" },
    { titulo: "Jujutsu Kaisen 0", año: 2021, link: "../html/html peliculas/html anime/Pelicula Jujutsu Kaisen 0.html" },
    // Agrega más películas aquí
];

document.getElementById("search-button").addEventListener("click", function() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const searchResults = document.getElementById("search-results");

    // Limpia los resultados anteriores
    searchResults.innerHTML = "";

    // Busca películas que coincidan con el término de búsqueda
    const results = peliculas.filter(function(pelicula) {
        return pelicula.titulo.toLowerCase().includes(searchTerm);
    });

    if (results.length === 0) {
        const noResults = document.createElement("div");
        noResults.textContent = "No se encontraron resultados.";
        searchResults.appendChild(noResults);
    } else {
        results.forEach(function(pelicula) {
            // Crea una tarjeta de resultado con enlace al título
            const resultCard = document.createElement("div");
            resultCard.className = "result-card";
            const link = document.createElement("a");
            link.href = pelicula.link;
            link.textContent = `Título: ${pelicula.titulo}, Año: ${pelicula.año}`;
            resultCard.appendChild(link);
            searchResults.appendChild(resultCard);
        });
    }
});
