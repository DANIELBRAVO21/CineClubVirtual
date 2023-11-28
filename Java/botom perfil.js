function toggleSubmenu() {
    var submenu = document.getElementById('submenu');
    submenu.classList.toggle('active');
}

function logout() {
    // Agrega aquí el código para cerrar la sesión
    alert('Sesión cerrada ');
}

document.addEventListener('click', function(event) {
    var submenu = document.getElementById('submenu');
    var circle = document.getElementById('circle');

    if (!circle.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.remove('active');
    }
});