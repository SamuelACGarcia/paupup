window.onload = changeTheme;

function changeTheme() {
    const styleLink = document.getElementById('style-link');
    const themes = [
        'style.css', // Thème par défaut
        'theme1.css', // Ajoute d'autres thèmes au besoin
        'theme2.css',
    ];

    // Choix aléatoire d'un thème
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];

    // Application du thème choisi
    styleLink.href = randomTheme;
}