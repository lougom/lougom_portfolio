const background = document.querySelector('.background');
const blow = document.querySelector('.Blow');

/* random number */
function getRandomArbitrary(min, max) {
return Math.random() * (max - min) + min;
};


/*              S  N      */
const Nombre = [ 2, 60]



setInterval(() => {
    const star = document.createElement("div");
    const sise = getRandomArbitrary( 1 , 15 ) + "px";
    star.className = "star";
    star.style.width = sise;
    star.style.height = sise;
    star.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)})`;
    star.style.animation= `star_color ${Nombre[0]}s infinite`;

    // Les étoiles apparaissent uniquement dans le rectangle de la div .Blow
    // (.background est en fixed + inset 0 : ses coordonnées = celles de la fenêtre)
    const r = blow.getBoundingClientRect();
    const starSize = parseFloat(sise);
    const randomLeft = () => getRandomArbitrary(r.left, Math.max(r.left, r.right - starSize)) + "px";
    const randomTop  = () => getRandomArbitrary(r.top,  Math.max(r.top,  r.bottom - starSize)) + "px";

    star.animate([
    {
        left: randomLeft(),
        top:  randomTop()
    },
    {
        left: randomLeft(),
        top:  randomTop()
    }
], {
    duration: 20000,     
    easing: 'linear'
});


    background.appendChild(star);
    if (document.querySelectorAll(".star").length>Nombre[1]){
        document.querySelectorAll(".star")[0].remove();
    };  

    
}, Nombre[0]/Nombre[1]*1000);


