const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

let sequence = [];
let posGradius = -300;
let state = "init";
let countCall = 0;
let countpac = 0;
let posPac = -300;

const audio = new Audio('./public/media/Metal Gear Solid Codec Sound.mp3');
const audioColonel = new Audio('./public/media/Colonel.mp3');
const audioStart = new Audio('./public/media/start.mp3');
const audioWaka = new Audio('./public/media/waka.mp3');
const audioVictory = new Audio('./public/media/victory.mp3');

audioVictory.addEventListener('ended', () => {

    const pacman = document.getElementById('pacman');
    pacman.style.display="none";
    const factory1 = document.getElementById('factory1');
    factory1.style.display="none";
    const factory2 = document.getElementById('factory2');
    factory2.style.display="none";
    const factory3 = document.getElementById('factory3');
    factory3.style.display="none";
    const factory4 = document.getElementById('factory4');
    factory4.style.display="none";
    const factory5 = document.getElementById('factory5');
    factory5.style.display="none";
    const factory6 = document.getElementById('factory6');
    factory6.style.display="none";
    const factory7 = document.getElementById('factory7');
    factory7.style.display="none";
    const factory8 = document.getElementById('factory8');
    factory8.style.display="none";
    const victoryPng = document.getElementById('victoryPng');
    victoryPng.style.display="none";
  });

document.addEventListener('DOMContentLoaded', () => {
    const gradiusImg = document.getElementById('gradius');
    gradiusImg.style.visibility = 'hidden';
    gradiusImg.style.display = 'none';
    
    const callImg = document.getElementById('mgsCall');
    callImg.style.visibility = 'hidden';
    callImg.style.display = 'none';
    
    const voiceImg = document.getElementById('mgsVoice');
    voiceImg.style.visibility = 'hidden';
    voiceImg.style.display = 'none';

    const textCall = document.getElementById('textCall');
    textCall.style.visibility = 'hidden';
    textCall.style.display = 'none';

    const pacman = document.getElementById('pacman');
    pacman.style.visibility = 'hidden';
    pacman.style.display = 'none';
    const factory1 = document.getElementById('factory1');
    factory1.style.visibility = 'hidden';
    factory1.style.display = 'none';
    const factory2 = document.getElementById('factory2');
    factory2.style.visibility = 'hidden';
    factory2.style.display = 'none';
    const factory3 = document.getElementById('factory3');
    factory3.style.visibility = 'hidden';
    factory3.style.display = 'none';
    const factory4 = document.getElementById('factory4');
    factory4.style.visibility = 'hidden';
    factory4.style.display = 'none';
    const factory5 = document.getElementById('factory5');
    factory5.style.visibility = 'hidden';
    factory5.style.display = 'none';
    const factory6 = document.getElementById('factory6');
    factory6.style.visibility = 'hidden';
    factory6.style.display = 'none';
    const factory7 = document.getElementById('factory7');
    factory7.style.visibility = 'hidden';
    factory7.style.display = 'none';
    const factory8 = document.getElementById('factory8');
    factory8.style.visibility = 'hidden';
    factory8.style.display = 'none';

    const victoryImg = document.getElementById('victoryPng');
    victoryImg.style.visibility = "hidden";
    victoryImg.style.display = 'none';


    audio.load();
    audioColonel.load();
    audioStart.load();
    audioWaka.load();
    audioVictory.load();
  });

function detectKonamiCode(event) {
    
    const gradiusImg = document.getElementById("gradius");

    const key = event.key;
        
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
        gradiusImg.style.visibility = "visible";
        gradiusImg.style.display = 'block';
        gradiusImg.style.position =  "absolute"
        gradiusImg.style.top =  0;
        gradiusImg.style.left = -300;
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
            if(posGradius == 1600 && state == "init"){
                gradiusImg.style.display="none";


                state = "call";
                
            }

            if(state == "call" && countCall< 650){
                countCall+= 1;

                
                if(state == "call" && countCall == 30){
                    const callImg = document.getElementById('mgsCall');
                    callImg.style.display = 'block';
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
                    voiceImg.style.display = 'block';
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
                    textCall.style.display = 'block';
                    const str = "Le climat est en danger! Snake, il faut le sauver!"
                    nb = (countCall - 240) /5;
                    let text = "";

                    for(let i = 0; i<nb && i< str.length; i++){
                        text += str[i];
                    }
                    textCall.innerText = text;


                    
                }
                if (countCall > 640 && state == "call"){
                    state = "pacman";

                    audioWaka.play();

                    const textCall = document.getElementById('textCall');
                    const voiceImg = document.getElementById('mgsVoice');
                    textCall.style.display="none";
                    voiceImg.style.display="none";

                    const pacman = document.getElementById('pacman');
                    pacman.style.display="block";
                    pacman.style.visibility="visible";
                    pacman.style.position =  "absolute"
                    pacman.style.top =  0;
                    pacman.style.left = 0;
                    pacman.style.zIndex = 3;

                    const factory1 = document.getElementById('factory1');
                    factory1.style.display = 'block';
                    factory1.style.position =  "absolute"
                    factory1.style.top =  0;
                    factory1.style.left = 0;
                    factory1.style.zIndex = 2;
                    factory1.style.cssText += `transform: translate(${1*200}px, 10vh);`;
                    
                    factory1.style.visibility="visible";

                    const factory2 = document.getElementById('factory2');
                    factory2.style.display = 'block';
                    factory2.style.position =  "absolute"
                    factory2.style.top =  0;
                    factory2.style.left = 0;
                    factory2.style.zIndex = 2;
                    factory2.style.cssText += `transform: translate(${2*200}px, 10vh);`;
                    
                    factory2.style.visibility="visible";

                    const factory3 = document.getElementById('factory3');
                    factory3.style.display = 'block';
                    factory3.style.position =  "absolute"
                    factory3.style.top =  0;
                    factory3.style.left = 0;
                    factory3.style.zIndex = 2;
                    factory3.style.cssText += `transform: translate(${3*200}px, 10vh);`;
                    
                    factory3.style.visibility="visible";

                    const factory4 = document.getElementById('factory4');
                    factory4.style.display = 'block';
                    factory4.style.position =  "absolute"
                    factory4.style.top =  0;
                    factory4.style.left = 0;
                    factory4.style.zIndex = 2;
                    factory4.style.cssText += `transform: translate(${4*200}px, 10vh);`;
                    
                    factory4.style.visibility="visible";

                    const factory5 = document.getElementById('factory5');
                    factory5.style.display = 'block';
                    factory5.style.position =  "absolute"
                    factory5.style.top =  0;
                    factory5.style.left = 0;
                    factory5.style.zIndex = 2;
                    factory5.style.cssText += `transform: translate(${5*200}px, 10vh);`;
                    
                    factory5.style.visibility="visible";

                    const factory6 = document.getElementById('factory6');
                    factory6.style.display = 'block';
                    factory6.style.position =  "absolute"
                    factory6.style.top =  0;
                    factory6.style.left = 0;
                    factory6.style.zIndex = 2;
                    factory6.style.cssText += `transform: translate(${6*200}px, 10vh);`;
                    
                    factory6.style.visibility="visible";

                    const factory7 = document.getElementById('factory7');
                    factory7.style.display = 'block';
                    factory7.style.position =  "absolute"
                    factory7.style.top =  0;
                    factory7.style.left = 0;
                    factory7.style.zIndex = 2;
                    factory7.style.cssText += `transform: translate(${7*200}px, 10vh);`;
                    
                    factory7.style.visibility="visible";

                    const factory8 = document.getElementById('factory8');
                    factory8.style.display = 'block';
                    factory8.style.position =  "absolute"
                    factory8.style.top =  0;
                    factory8.style.left = 0;
                    factory8.style.zIndex = 2;
                    factory8.style.cssText += `transform: translate(${8*200}px, 10vh);`;
                    
                    factory8.style.visibility="visible";
                    
                
                }

                
            }
            
            if(state == "pacman" && countpac < 650) {
                countpac += 1;
                
                const pacman = document.getElementById('pacman');
                posPac += 10;
                


                if(state == "pacman" &&  (countpac%20  == 4 || countpac%20  == 14)){
                    
                    
                    const pacman = document.getElementById('pacman');
                    pacman.setAttribute('src',  "./public/media/pacman2.png");
                }

                if(state == "pacman" &&  (countpac%20  == 10 || countpac%20  == 0)){

                    
                    const pacman = document.getElementById('pacman');
                    pacman.setAttribute('src',  "./public/media/pacman3.png");
                }

                if(state == "pacman" &&  countpac%20  == 0){

                    
                    const pacman = document.getElementById('pacman');
                    pacman.setAttribute('src',  "./public/media/pacman1.png");
                }

                pacman.style.cssText += `transform: translate(${posPac}px, 0vh);`;
            }

            if(state == "pacman"){
                if(posPac == 1*200){
                    factory1.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 2*200){
                    factory2.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 3*200){
                    factory3.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 4*200){
                    factory4.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 5*200){
                    factory5.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 6*200){
                    factory6.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac == 7*200){
                    factory7.setAttribute('src',  "./public/media/tree.png");
                }
                if(posPac >= 8*200 && !audioWaka.paused){
                    factory8.setAttribute('src',  "./public/media/tree.png");
                    
                }
                if(countpac >= 300 ){
                    audioVictory.play();
                    state = "finish";
                    const victoryImg = document.getElementById('victoryPng');
                    victoryImg.style.display = 'block';
                    victoryImg.style.visibility = "visible";
                    victoryImg.style.position =  "absolute"
                    victoryImg.style.top =  0;
                    victoryImg.style.left = 0;
                    victoryImg.style.zIndex = 1;
                    victoryImg.style.cssText += `transform: translateX(20%) translateY(50%);`;
                }

                
                  
                
                


            }
            


        }, 10);
        
    }
}


document.addEventListener("keydown", detectKonamiCode);
