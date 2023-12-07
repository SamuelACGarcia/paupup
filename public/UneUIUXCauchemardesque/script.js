window.onload = changeTheme;

function changeTheme() {
    const styleLink = document.getElementById('style-link');
    const themes = [
        'style.css', // Thème par défaut
        'theme1.css', // Ajoute d'autres thèmes au besoin
        'theme2.css',
        'theme3.css',
        'theme4.css',
    ];

    // Choix aléatoire d'un thème
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    let isMouseDown = false;

    if (randomTheme == 'style.css') {
        document.addEventListener("mousedown", changeCursor);
        document.addEventListener("mouseup", restoreCursor);
        
        function changeCursor() {
            console.log("mousedown");
            isMouseDown = true;
            document.body.style.cursor = "url(\"img/licornclick.png\"), auto"; /* Image du curseur lors du mousedown */
            createTrail();

        }
        
        function restoreCursor() {
            console.log("mouseup");
            isMouseDown = false;
            document.body.style.cursor = "url(\"img/licorn1.png\"), auto"; /* Restaure le curseur par défaut après le mouseup */
        }
    }

    document.addEventListener("mousemove", (event) => {
        if (isMouseDown) {
            updateTrail(event.clientX, event.clientY);
        }
    });

    function createTrail() {
        const trailElement = document.createElement("div");
        trailElement.classList.add("trail");
        document.body.appendChild(trailElement);
    }
    
    function updateTrail(x, y) {
        const trailElements = document.querySelectorAll(".trail");
    
        trailElements.forEach((trailElement, index) => {
            const angle = (index / trailElements.length) * 360; /* Calcule l'angle pour créer un effet arc-en-ciel */
            const color = `hsl(${angle}, 100%, 50%)`; /* Utilise la notation HSL pour définir la couleur en fonction de l'angle */
    
            trailElement.style.backgroundColor = color;
            trailElement.style.left = `${x}px`;
            trailElement.style.top = `${y}px`;
        });
    }
    

    console.log('Changement de thème : ' + randomTheme);

    // Application du thème choisi
    styleLink.href = randomTheme;
}