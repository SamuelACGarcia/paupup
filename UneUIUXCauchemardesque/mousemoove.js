document.addEventListener("mousemove", moveElement);

function moveElement(event) {
    const element = document.getElementById("infiniteMovement");
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // La transformation est calculée en fonction de la position de la souris
    const transformationX = (mouseX / windowWidth) * 100;
    const transformationY = (mouseY / windowHeight) * 100;


    // Appliquer la transformation à l'élément
    element.style.transform = `translateX(${transformationX}vw)`;
    element.style.transform += `translateY(${transformationY}vh)`;
}