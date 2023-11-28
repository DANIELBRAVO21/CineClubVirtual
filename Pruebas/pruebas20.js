// Función para agregar un nuevo comentario
function agregarComentario() {
    var nombre = document.getElementById('nombre').value;
    var comentario = document.getElementById('comentario').value;
    
    if (comentario !== '') {
      var comentariosGuardados = localStorage.getItem('comentarios');
      var comentarios = comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
  
      comentarios.push({ nombre: nombre || 'Autor Anónimo', comentario: comentario });
      localStorage.setItem('comentarios', JSON.stringify(comentarios));
      mostrarComentarios();
      document.getElementById('nombre').value = '';
      document.getElementById('comentario').value = '';
    }
  }
  
  // Función para mostrar los comentarios almacenados
  function mostrarComentarios() {
    var comentariosGuardados = localStorage.getItem('comentarios');
    var comentarios = comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
    var comentariosLista = document.getElementById('comentarios-lista');
    comentariosLista.innerHTML = '';
  
    comentarios.forEach(function(comentarioObj) {
      var comentarioCard = document.createElement('div');
      comentarioCard.classList.add('card');
  
      var avatar = document.createElement('img');
      avatar.src = 'https://i.pinimg.com/474x/b8/eb/5a/b8eb5a3e2b6a2192452c21022e6ed25a.jpg'; // Cambia por la ruta del avatar por defecto
      avatar.classList.add('avatar');
      comentarioCard.appendChild(avatar);
  
      var contenidoComentario = document.createElement('div');
      contenidoComentario.classList.add('contenido-comentario');
  
      var nombreAutor = document.createElement('h3');
      nombreAutor.textContent = comentarioObj.nombre;
      contenidoComentario.appendChild(nombreAutor);
  
      var comentarioTexto = document.createElement('p');
      comentarioTexto.textContent = comentarioObj.comentario;
      contenidoComentario.appendChild(comentarioTexto);
  
      comentarioCard.appendChild(contenidoComentario);
      comentariosLista.appendChild(comentarioCard);
    });
  }
  
  // Mostrar comentarios al cargar la página
  mostrarComentarios();
  