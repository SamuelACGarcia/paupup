const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

let sequence = [];
const image = document.querySelector(".ma-classe");

image.style.visibility = "hidden";

function detectKonamiCode(event) {
    const key = event.key;
        
    console.log(key);
    let i = sequence.length;
    if (konamiCode[i] === key) {
        
        console.log(key);
        sequence.push(key);
    } else {
        // Si l'utilisateur a entré une touche incorrecte, on réinitialise la séquence
        sequence = [];
    }

    // Si la séquence est complète, on active le code Konami
    if (sequence.length === konamiCode.length) {
        console.log("coucou konami");
    }
}

document.addEventListener("keydown", detectKonamiCode);
