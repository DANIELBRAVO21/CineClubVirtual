function agregarComentario(peliculaId) {
  var comentario = document.getElementById('nuevo-comentario').value;
  var nombreUsuario = document.getElementById('nombre-usuario').value;

  if (comentario !== '' && nombreUsuario !== '') {
    var comentarioConUsuario = {
      usuario: nombreUsuario,
      texto: comentario
    };

    var comentariosGuardados = localStorage.getItem(peliculaId + '_comentarios');
    var comentarios = comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
    comentarios.push(comentarioConUsuario);
    localStorage.setItem(peliculaId + '_comentarios', JSON.stringify(comentarios));
    mostrarComentarios(peliculaId);
    document.getElementById('nuevo-comentario').value = '';
  }
}

function mostrarComentarios(peliculaId) {
  var comentariosGuardados = localStorage.getItem(peliculaId + '_comentarios');
  var comentarios = comentariosGuardados ? JSON.parse(comentariosGuardados) : [];
  var comentariosLista = document.getElementById('comentarios-lista');
  comentariosLista.innerHTML = '';

  comentarios.forEach(function(comentario) {
    var comentarioElemento = document.createElement('div');
    comentarioElemento.className = 'comentario';

    var usuarioImagen = document.createElement('img');
    usuarioImagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlynMw30s-1btqU2jf37Xsi2bE0ujfcGkOSLwJLliT1zS6dCK9s5zAO-PPkTIkEHdkwjI&usqp=CAU'; // Ruta de la imagen del usuario
    usuarioImagen.className = 'imagen-usuario';

    var contenidoComentario = document.createElement('div');
    contenidoComentario.className = 'contenido-comentario';
    contenidoComentario.innerHTML = '<strong>' + comentario.usuario + ':</strong> ' + comentario.texto;

    comentarioElemento.appendChild(usuarioImagen);
    comentarioElemento.appendChild(contenidoComentario);
    comentariosLista.appendChild(comentarioElemento);
  });
}
