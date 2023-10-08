const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the video
        box.classList.toggle('active');
    });
});

