document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-video-button");
    const videoCard = document.getElementById("video-card");
    const backButton = document.getElementById("back-button");
    const videoFrame = videoCard.querySelector("iframe");

    toggleButton.addEventListener("click", function() {
        if (videoCard.classList.contains("hidden")) {
            // Mostrar el video
            videoCard.classList.remove("hidden");
            toggleButton.textContent = "Cerrar Video";
        } else {
            // Cerrar el video
            videoCard.classList.add("hidden");
            toggleButton.textContent = "Mostrar Video";
            // Detener el video (pausar)
            videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
    });

    backButton.addEventListener("click", function() {
        window.history.back();
    });
});