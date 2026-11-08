const carousel = document.querySelector("#Carousel_Options");
const page = document.querySelector("#Insight_mode");
const bnt  =document.getElementById("carousel-dots");
import a from './data.js';  

// Création des option carrousel  
let i = 0
for (const [key, value] of Object.entries(a)) {
  const li = document.createElement("li");
  li.tabIndex = 0;
  li.className = "laaa";

  const titre = document.createElement("h2"); 
  const bnt_titre = document.createElement("h3"); 
  titre.textContent = key; 
  titre.id = key
  bnt_titre.textContent = `learn more`;

  li.appendChild(titre);
  li.appendChild(bnt_titre);


  carousel.appendChild(li);

  //Création des bouton pour le carrousel  
  const button = document.createElement("button")
  button.className = "bnt"
  button.id = i
  bnt.appendChild(button)


  i++
  
}


function click_Carrousel () { 

  const slide = view_item[index_def].id;
  if (!slide) return;

  pageStack.length = 0;      // nouvelle ouverture depuis le carrousel : on repart de zéro
  openPage(a[slide]);        // voir shared.js
};

  // Clic sur un slide
carousel.addEventListener("click" , (event) => {
    click_Carrousel()

});

const buttons = document.querySelectorAll(".bnt");


document.getElementById("carousel-dots").addEventListener("click", () => {
  const bnt_select = (event.target.closest(".bnt").id);
  const item_id  = document.querySelectorAll("li>h2")[bnt_select]
  item_id.focus();
  item_id.scrollIntoView({behavior: 'smooth'})
});


  const view_item = document.querySelectorAll("li > h2");

  let index_def ;   

setInterval(() => {
  
  
  for (let index = 0; index < view_item.length; index++) {
    const slideCenter = ( view_item[index].getBoundingClientRect().x + view_item[index].getBoundingClientRect().width/ 2)/  window.innerWidth*100
    
    
    if (slideCenter>30 && slideCenter<60){
      
      
      index_def = index ;
      Color_rubrique(index)
    }
  }

}, 50);


function Color_rubrique (id_must_color) {

  for (const key of Object(buttons)) { 
    
    
    buttons[key.id].style.backgroundColor  = "rgba(240, 248, 255, 0)";
    if (id_must_color  == key.id){
      buttons[id_must_color].style.transition = "background-color 0.4s ease";
      buttons[id_must_color].style.backgroundColor = "rgb(244, 244, 244)";
    }  
  }
   
}