document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-container img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    showNextImage(); // Muestra la primera imagen

    setInterval(showNextImage, 2000); // Cambia la imagen cada 2 segundos (ajusta el tiempo según tus necesidades)
});
