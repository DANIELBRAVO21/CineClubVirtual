let archivos = {
  archivo1: { likes: 0, dislikes: 0 },
  archivo2: { likes: 0, dislikes: 0 },
  archivo3: { likes: 0, dislikes: 0 },
  archivo4: { likes: 0, dislikes: 0 },
  archivo5: { likes: 0, dislikes: 0 },
  archivo6: { likes: 0, dislikes: 0 },
  archivo7: { likes: 0, dislikes: 0 },
  archivo8: { likes: 0, dislikes: 0 },
  archivo9: { likes: 0, dislikes: 0 },
  archivo10: { likes: 0, dislikes: 0 },
  archivo11: { likes: 0, dislikes: 0 },
  archivo12: { likes: 0, dislikes: 0 },
  archivo13: { likes: 0, dislikes: 0 },
  archivo14: { likes: 0, dislikes: 0 },
  archivo15: { likes: 0, dislikes: 0 },
  archivo16: { likes: 0, dislikes: 0 },
  archivo17: { likes: 0, dislikes: 0 },
  archivo18: { likes: 0, dislikes: 0 },
  archivo19: { likes: 0, dislikes: 0 }
};

function likeDislike(button, archivo) {
  const archivoData = archivos[archivo];

  if (button.classList.contains('like')) {
    if (button.classList.contains('liked')) {
      archivoData.likes--;
      button.classList.remove('liked');
    } else {
      archivoData.likes++;
      button.classList.add('liked');
    }
    button.textContent = `Like (${archivoData.likes})`;
  } else if (button.classList.contains('dislike')) {
    if (button.classList.contains('disliked')) {
      archivoData.dislikes--;
      button.classList.remove('disliked');
    } else {
      archivoData.dislikes++;
      button.classList.add('disliked');
    }
    button.textContent = `Dislike (${archivoData.dislikes})`;
  }
}

const suscribirseButton = document.getElementById('suscribirse');
suscribirseButton.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#FFCC00';
});
suscribirseButton.addEventListener('mouseout', function() {
  this.style.backgroundColor = '#FFEEAA';
});

const suscribirseButton2 = document.getElementById('suscribirse2');
suscribirseButton2.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#FFCC00';
});
suscribirseButton2.addEventListener('mouseout', function() {
  this.style.backgroundColor = '#FFEEAA';
});