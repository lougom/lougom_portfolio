
function element_Create (Dictionary) {
  
 
  
  const page_data = document.querySelector("paige_Boarder");
 
  
  if (Dictionary[0] == "title"){
    const div = document.createElement('h1');
    div.textContent = Dictionary[1];

    page_data.appendChild(div)
    

    
  }

  if (Dictionary[0] == "date"){
    element_Create_date(Dictionary);

  }

  if (Dictionary[0] == "description"){
    
    const div = document.createElement('p');
    div.textContent = Dictionary[1];

    page_data.appendChild(div)
  }

  if (Dictionary[0] == "language" ){
    element_Create_language(Dictionary);
  };
 
  
  if (Dictionary[0] == "gmail"){
    
     element_Create_gmail (Dictionary) 
  };

  if (Dictionary[0] == "phone_number"){
    
     element_Create_tel (Dictionary) 
  };

  if (Dictionary[0] == "my_cv"){
    
     element_Create_cv (Dictionary) 
  };

  if (Dictionary[0] == "description_mor"){
    element_Create_description(Dictionary);
  };

  if (Dictionary[0] == "href_clic_but"){
    element_Create_bloc_hetf(Dictionary);
  };
}