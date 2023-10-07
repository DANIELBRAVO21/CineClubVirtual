function guardarComentario() {
    const comentario = document.getElementById('comment-input').value;
    if (comentario.trim() !== '') {
        const comentariosGuardados = obtenerComentarios();
        comentariosGuardados.push(comentario);
        guardarEnCookies(comentariosGuardados);
        mostrarComentarios(); // Mostrar comentarios después de guardar uno nuevo
        document.getElementById('comment-input').value = '';
    }
}

// Función para obtener comentarios de cookies
function obtenerComentarios() {
    const comentarios = JSON.parse(getCookie('comentarios')) || [];
    return comentarios;
}

// Función para guardar comentarios en cookies
function guardarEnCookies(comentarios) {
    setCookie('comentarios', JSON.stringify(comentarios), 365);
}

// Función para mostrar comentarios en la página
function mostrarComentarios() {
    const comentarios = obtenerComentarios();
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';
    comentarios.forEach((comentario, index) => {
        commentList.innerHTML += `<p>${index + 1}: ${comentario}</p>`;
    });
}

// Funciones para manejar cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

mostrarComentarios(); // Mostrar comentarios al cargar la página