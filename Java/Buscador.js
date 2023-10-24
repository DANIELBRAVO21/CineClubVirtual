// Base de datos de películas (puedes reemplazar con tus propias películas)
const peliculas = [
    { titulo: "Culpa mia ", año: 2023, link: "Pelicula Culpa mia.html" },
    { titulo: "Bolt: Un perro fuera de serie", año: 2008, link: "Pelicula Bolt.html" },
    { titulo: "Tarzan", año: 1999, link: "Pelicula Tarzan.html" },
    { titulo: "Mortal Kombat", año: 2021, link: "Pelicula Mortal Kombat.html" },
    { titulo: "Capitan America: el primer vengador", año: 2011, link: "Pelicula Capitán América.html" },
    { titulo: "Dragon Ball Z - Broly El Legendario Super Saiyajin", año: 1993, link: "Pelicula Dragon Ball Z - Broly El Legendario Super Saiyajin.html" },
    { titulo: "Nowhere", año: 2023, link: "Pelicula Nowhere.html" },
    { titulo: "Along with the Gods: The Two Worlds", año: 2017, link: "Pelicula Along with the Gods.html" },
    { titulo: "Junto con los dioses: los dos mundos", año: 2017, link: "Pelicula Along with the Gods.html" },
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
