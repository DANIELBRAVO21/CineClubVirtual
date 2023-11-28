// Añade este código al final del archivo Javascript
document.getElementById("register-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const fullName = document.querySelector("input[placeholder='Nombre Completo']").value;
    const email = document.querySelector("input[placeholder='Correo Electronico']").value;
    const password = document.querySelector("input[placeholder='Contraseña']").value;

    if (fullName && email && password) {
        // Guardar información del usuario en localStorage
        const userInfo = { fullName, email, password };
        localStorage.setItem("user_info", JSON.stringify(userInfo));
        // Redirigir a la página de inicio de sesión
        window.location.href = "Inicio sesion.html";
    } else {
        alert("Por favor, llene todos los campos del formulario.");
    }
});