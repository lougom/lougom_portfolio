function element_Create_bloc_hetf  (Dictionary) {
    const page_data = document.querySelector('paige_boarder');

    const conteneur_herf_titel = document.createElement('div');
    conteneur_herf_titel.className = "conteneur_t_h";

    const titel = document.createElement("h3");
    titel.textContent = Dictionary[1].titel;


    const Image_herf = document.createElement("a");
    Image_herf.href = (Dictionary[1].direction);

    const Image_bnt = document.createElement("img");
    Image_bnt.className =  "Image_bnt";
    Image_bnt.src = Dictionary[1].image;
    
    Image_herf.appendChild(Image_bnt);


   conteneur_herf_titel.appendChild(titel);
   conteneur_herf_titel.appendChild(Image_herf);
   page_data.appendChild(conteneur_herf_titel);
};