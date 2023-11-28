// Añade este código al final del archivo Javascript
document.getElementById("login-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.querySelector("input[placeholder='Correo Electronico']").value;
    const password = document.querySelector("input[placeholder='Contraseña']").value;

    const storedUserInfo = JSON.parse(localStorage.getItem("user_info"));

    if (storedUserInfo && storedUserInfo.email === email && storedUserInfo.password === password) {
        // Inicio de sesión exitoso, redirigir a la página de inicio
        alert("Bienvenido, " + storedUserInfo.fullName);
        window.location.href = "html/Inicio.html";
    } else {
        alert("Credenciales incorrectas. Por favor, verifique su correo y contraseña.");
    }
});
