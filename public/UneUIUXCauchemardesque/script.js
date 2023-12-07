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
    const gifContainer = document.getElementById("gifContainer");

    if (randomTheme == 'style.css') {
        document.addEventListener("mousedown", changeCursor);
        document.addEventListener("mouseup", restoreCursor);
        
        function changeCursor() {
            console.log("mousedown");
            isMouseDown = true;
            gifContainer.classList.remove("hidden");
            document.body.style.cursor = "url(\"img/licornclick.png\"), auto"; /* Image du curseur lors du mousedown */
            document.addEventListener("mousemove", moveGif);


        }
        
        function restoreCursor() {
            console.log("mouseup");
            isMouseDown = false;
            gifContainer.classList.add("hidden");
            document.body.style.cursor = "url(\"img/licorn1.png\"), auto"; /* Restaure le curseur par défaut après le mouseup */
            document.removeEventListener("mousemove", moveGif);
        }
    }

    function moveGif(event) {
        if (isMouseDown) {
            const x = event.clientX - 35 + window.scrollX;
            const y = event.clientY - 155 + window.scrollY;
            gifContainer.style.rotate = "-45deg";
            gifContainer.style.left = x + "px";
            gifContainer.style.top = y + "px";
        }
    }
    

    console.log('Changement de thème : ' + randomTheme);

    // Application du thème choisi
    styleLink.href = randomTheme;
}