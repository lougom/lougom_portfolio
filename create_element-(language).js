
function element_Create_language (Dictionary) {
  const page_data   =document.querySelector('paige_boarder')

  
  const container_language = document.createElement('div');
  container_language.className = "container_all_language";
  let i = 0

  const part = document.createElement('h3');
  part.textContent = `Why did I choose this tool? `
  part.style.textAlign = "center";
  for (const language of Object.entries(Dictionary[1])) {
    
    for(const [key , valus] of Object.entries(language[1])){

      try{
        
        const input = document.createElement('input');
        input.className = "toggle";
        input.type = "checkbox";
        input.id = key+(document.querySelectorAll(".toggle")).length + i ;
        
        const label =  document.createElement('label'); 
        label.className = "container_language";
        
        label.setAttribute("for",key+(document.querySelectorAll(".toggle")).length + i);
        
        
        const showtext = document.createElement('span'); 
        showtext.className = 'text1';
        showtext.textContent = String(key);
        
        const hiddentext  = document.createElement('span'); 
        hiddentext.className = "text2";
        
        
        hiddentext.textContent = String(valus.def);
        
        label.appendChild(showtext);
        label.appendChild(hiddentext);
        
        container_language.appendChild(input);
        container_language.appendChild(label);
        i ++;

        

      }catch (Error) {
        console.log(Error);            
      }
      
    }
    
  }
  page_data.appendChild(part);
  page_data.appendChild(container_language); 
};