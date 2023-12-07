const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

let sequence = [];
let posGradius = -300;
let state = "";
let countCall = 0;

const audio = new Audio('./media/Metal Gear Solid Codec Sound.mp3');
const audioColonel = new Audio('./media/Colonel.mp3');
const audioStart = new Audio('./media/start.mp3');

document.addEventListener('DOMContentLoaded', () => {
    const gradiusImg = document.getElementById('gradius');
    gradiusImg.style.visibility = 'hidden';
    
    const callImg = document.getElementById('mgsCall');
    callImg.style.visibility = 'hidden';
    
    const voiceImg = document.getElementById('mgsVoice');
    voiceImg.style.visibility = 'hidden';

    const textCall = document.getElementById('textCall');
    textCall.style.visibility = 'hidden';

    const textCall = document.getElementById('textCall');
    textCall.style.visibility = 'hidden';

    audio.load();
    audioColonel.load();
    audioStart.load();
  });

function detectKonamiCode(event) {
    
    const gradiusImg = document.getElementById("gradius");

    const key = event.key;
        
    console.log(key);
    let i = sequence.length;
    if (konamiCode[i] === key ) {
        
        sequence.push(key);
    } else {
        // Si l'utilisateur a entré une touche incorrecte, on réinitialise la séquence
        sequence = [];
    }

    // Si la séquence est complète, on active le code Konami
    if (sequence.length === konamiCode.length) {
        sequence = [];
        console.log("coucou konami");
        gradiusImg.style.visibility = "visible";
        gradiusImg.style.position =  "absolute"
        gradiusImg.style.top =  0;
        gradiusImg.style.left = 0;
        gradiusImg.style.zIndex = 1;

        audioStart.play();

        // Start the animation
        setInterval(function() {
            if(posGradius < 1600){
                const gradiusImg = document.getElementById("gradius");
                // Move the image to the right
                posGradius += 10;
                gradiusImg.style.cssText += `transform: translate(${posGradius}px, 0vh);`;

            }

            if(posGradius == 1200){

                audio.play();
            }
            if(posGradius == 1600){
                gradiusImg.style.display="none";


                state = "call";
                
            }

            if(state == "call" && countCall< 800){
                countCall+= 1;

                
            if(state == "call" && countCall == 30){
                const callImg = document.getElementById('mgsCall');
            callImg.style.visibility = "visible";
            callImg.style.position =  "absolute"
            callImg.style.top =  0;
            callImg.style.left = 0;
            callImg.style.zIndex = 1;
            callImg.style.cssText += `transform: translateX(100%) translateY(50%);`;

            }
            
            if(state == "call" && countCall == 80){
                const callImg = document.getElementById('mgsCall');
                callImg.style.display="none";
                console.log("yo");
            }

            if(state == "call" && countCall == 100){
                const callImg = document.getElementById('mgsCall');
                callImg.style.display="block";
            }

            if(state == "call" && countCall == 160){
                const callImg = document.getElementById('mgsCall');
                callImg.style.display="none";
            }

            if(state == "call" && countCall == 190){
                const callImg = document.getElementById('mgsCall');
                callImg.style.display="block";
            }

            if(state == "call" && countCall == 220){
                const callImg = document.getElementById('mgsCall');
                callImg.style.display="none";
                
                const voiceImg = document.getElementById('mgsVoice');
                voiceImg.style.visibility = "visible";
                voiceImg.style.position =  "absolute"
                voiceImg.style.top =  0;
                voiceImg.style.left = 0;
                voiceImg.style.zIndex = 1;
                voiceImg.style.cssText += `transform: translateX(20%) translateY(50%);`;

                
                const textCall = document.getElementById('textCall');
                textCall.style.visibility = 'visible';
                textCall.style.position =  "absolute"
                textCall.style.top =  0;
                textCall.style.left = 0;
                textCall.style.zIndex = 2;
                textCall.style.color = "white";
                textCall.style.cssText += `transform: translateX(300px) translateY(450px);`;
                textCall.style.fontSize = '30px';
                audioColonel.play();
            }

            if(state == "call" && countCall > 240){
                const textCall = document.getElementById('textCall');
                const str = "Le climat est en danger! Snake, il faut le sauver!"
                nb = (countCall - 240) /5;
                let text = "";

                for(let i = 0; i<nb && i< str.length; i++){
                    text += str[i];
                }
                textCall.innerText = text;
                console.log(text)
            }
            }

        }, 10);
        
    }
}


document.addEventListener("keydown", detectKonamiCode);
