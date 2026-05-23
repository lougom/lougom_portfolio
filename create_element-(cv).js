function element_Create_cv (Dictionary) {
  const page_data  = document.querySelector('paige_boarder');
  const conteneur_bnt = document.createElement('div');
  conteneur_bnt.className = "conteneur_bnt"; 
  const bnt_txt  = document.createElement('h2');
  bnt_txt.className ="bnt_txt";
  bnt_txt.textContent = "You can to add my CV if you click on this button in down.";

  const bnt_cv  = document.createElement('button');
  bnt_cv.id = "BoutonCV";
  bnt_cv.textContent = "add my cv";

  conteneur_bnt.appendChild(bnt_txt);
  conteneur_bnt.appendChild(bnt_cv);
  page_data.appendChild(conteneur_bnt);




  function downloadPDF(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  document.getElementById('BoutonCV').addEventListener('click', () => {
    downloadPDF('./CV_LouisGOMARD_PC.pdf', 'The_CV_of_Louis.pdf');
  });
  
}
