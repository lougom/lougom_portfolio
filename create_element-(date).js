
function element_Create_date (Dictionary) {
  const page_data   =document.querySelector('paige_boarder');

  const div = document.createElement('date');
  const span = document.createElement('span');
  

  page_data.appendChild(div);
  span.textContent = Dictionary[1];
  div.appendChild(document.createElement('date_'));
  div.appendChild(span);
  
};