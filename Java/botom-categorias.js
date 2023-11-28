function mostrarSubmenu(event) {
  event.preventDefault();
  var submenu = document.getElementById('opciones');
  if (submenu.style.display === 'none' || submenu.style.display === '') {
    submenu.style.display = 'block';
  } else {
    submenu.style.display = 'none';
  }
}