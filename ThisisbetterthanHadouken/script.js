const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

let sequence = [];

document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('gradius');
    image.style.visibility = 'hidden';
  });

function detectKonamiCode(event) {
    
    const image = document.getElementById("gradius");

    const key = event.key;
        
    console.log(key);
    let i = sequence.length;
    if (konamiCode[i] === key ) {
        
        console.log(key);
        sequence.push(key);
    } else {
        // Si l'utilisateur a entré une touche incorrecte, on réinitialise la séquence
        sequence = [];
    }

    // Si la séquence est complète, on active le code Konami
    if (sequence.length === konamiCode.length) {
        sequence = [];
        console.log("coucou konami");
        image.style.visibility = "visible";
        image.style.position =  absolute
        image.style.top =  0;
        image.style.left = 0;
        image.style.zIndex = 1;
    }
}


document.addEventListener("keydown", detectKonamiCode);
