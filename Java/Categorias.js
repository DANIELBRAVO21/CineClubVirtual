function mostrarCategoria(categoria) {
    // Ocultar todas las categorías de películas
    const peliculas = document.querySelectorAll('.peliculas');
    peliculas.forEach(element => {
      element.style.display = 'none';
    });
  
    // Mostrar la categoría seleccionada
    const categoriaSeleccionada = document.getElementById(categoria);
    categoriaSeleccionada.style.display = 'block';
  }
  