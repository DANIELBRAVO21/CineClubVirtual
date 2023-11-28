 // Recuperar el nombre del usuario desde el localStorage si está disponible
 var nombreGuardado = localStorage.getItem("user_info");

 if (nombreGuardado) {
     document.getElementById("register-button").textContent = nombreGuardado;
 }