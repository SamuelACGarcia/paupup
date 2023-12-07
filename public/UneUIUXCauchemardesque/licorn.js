const body = document.body
// Événement lorsqu'on appuie sur le bouton de la souris
body.addEventListener('mousedown', () => {
    body.style.cursor = 'url("click-cursor.cur"), auto';
});

// Événement lorsqu'on relâche le bouton de la souris
body.addEventListener('mouseup', () => {
    body.style.cursor = 'url("normal-cursor.cur"), auto';
});