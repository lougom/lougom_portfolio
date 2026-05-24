// const background = document.querySelector('.background');

// /* random number */
// function getRandomArbitrary(min, max) {
// return Math.random() * (max - min) + min;
// };


// /*              S  N      */
// const Nombre = [ 2, 60]



// setInterval(() => {
//     const star = document.createElement("div");
//     const sise = getRandomArbitrary( 1 , 15 ) + "px";
//     star.className = "star";
//     star.style.width = sise;
//     star.style.height = sise;
//     star.style.backgroundColor = `rgb(${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)}, ${getRandomArbitrary(0,255)})`;
//     star.style.animation= `star_color ${Nombre[0]}s infinite`;

//     star.animate([
//     { 
//         left: getRandomArbitrary(10, screen.width) + "px",  
//         top:  getRandomArbitrary(10, screen.height) + "px" 
//     }, 
//     { 
//         left: getRandomArbitrary(10, screen.width) + "px",    
//         top:  getRandomArbitrary(10, screen.height) + "px"  
//     }
// ], {
//     duration: 20000,     
//     easing: 'linear'
// });


//     background.appendChild(star);
//     if (document.querySelectorAll(".star").length>Nombre[1]){
//         document.querySelectorAll(".star")[0].remove();
//     };  

    
// }, Nombre[0]/Nombre[1]*1000);


