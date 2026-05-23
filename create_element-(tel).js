
function element_Create_tel (Dictionary) {
 
  
    const page_data  = document.querySelector('paige_boarder');

    const tel_Conteneur = document.createElement('div');
    tel_Conteneur.className = "tel_conteneur";

    const my_tel_txt = document.createElement("h3");
    my_tel_txt.textContent ="My phone number";
    my_tel_txt.className = "my_tel_txt";




    const action_tell_copy = document.createElement("div");
    action_tell_copy.className = "action_tell_copy";


    const tel = document.createElement("div");
    tel.textContent = Dictionary[1];
    tel.className = "mytel";

    const copy_tel = document.createElement("button");
    copy_tel.textContent ="copy" ;
    copy_tel.className = "copy_tel";


    action_tell_copy.appendChild(tel);
    action_tell_copy.appendChild(copy_tel);
    
    tel_Conteneur.appendChild(my_tel_txt);
    tel_Conteneur.appendChild(action_tell_copy);
    
    page_data.appendChild(tel_Conteneur);
   
    copy()
    }

        
    function copy() {
    const tel_copy_tel = document.querySelector(".copy_tel");
    tel_copy_tel.addEventListener("click", () => {        
        navigator.clipboard.writeText( document.querySelector(".mytel").textContent);
                
    });

}

