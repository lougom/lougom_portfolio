
function element_Create_gmail (Dictionary) {
 
  
  const page_data  = document.querySelector('paige_boarder');

  const container_contact_from = document.createElement("form");


  /*                                                    */
  const container_contact = document.createElement("div");
  container_contact.className = "container_contact";
  
  const mail_txt = document.createElement("h2");
  mail_txt.className = "mail_txt txt";
  mail_txt.textContent = "Your mail";  
  
  const mail = document.createElement("input");
  mail.className = "mail  gmail";
  mail.type = "email";


  const object_txt = document.createElement("h2");
  object_txt.className = "object_txt txt";
  object_txt.textContent = "Your object";  
  
  const object = document.createElement("input");
  object.className = "object  gmail";
  object.type = "text";

  
  const first_name_txt = document.createElement("h2");
  first_name_txt.className = "mail_txt txt";
  first_name_txt.textContent = "Your first name";  
  
  const first_name = document.createElement("input");
  first_name.className = "first_name  gmail";
  first_name.type = "text";

  
  const last_name_txt = document.createElement("h2");
  last_name_txt.className = "mail_txt txt";
  last_name_txt.textContent = "Your last name";  
  
  const last_name = document.createElement("input");
  last_name.className = "last_name  gmail";
  last_name.type = "text";


  const tel_txt = document.createElement("h2");
  tel_txt.className = "mail_txt txt";
  tel_txt.textContent = "Your tel"; 

  const tel = document.createElement("input");
  tel.className = "tel  gmail";
  tel.type = "txt";

  const body_txt = document.createElement("h2");
  body_txt.className = "mail_txt txt";
  body_txt.textContent = "Your message"; 

  const body = document.createElement("textarea");
  body.className = "body  gmail";
  body.type = "text";

  /*                                                 */

  for (const _ of Object([mail_txt, mail, object_txt ,object ,first_name_txt ,first_name ,last_name_txt ,last_name ,tel_txt ,tel ,body_txt ,body ])){
    
    container_contact.appendChild(_);
  
  }
  const container_push = document.createElement("div");
  container_push.className = "container_push";
  
  const push = document.createElement("button");
  push.className = "push";
  
  push.textContent = "Post !"; 

  container_push.appendChild(push);

  
  container_contact_from.appendChild(container_contact);
  container_contact_from.appendChild(container_push);
  page_data.appendChild(container_contact_from);
  
  bloque_submit();

  
};

function bloque_submit  () {
  document.querySelector("form").addEventListener('submit', function(event) {
  event.preventDefault();

  });
  const gomail = document.querySelector(".push");
  
  gomail.addEventListener("click", (event) => {
    const data = {
      title : document.querySelector(".object").value,
      email :document.querySelector(".mail").value,
      name : document.querySelector(".first_name").value + document.querySelector(".last_name").value,
      message : document.querySelector(".body").value,
      tel : "tel :" +" "+document.querySelector(".tel").value,
    
    }

    
    if(data.email && (data.email).includes("@") && data.message && data.name && data.tel && data.title){
      go_mail(data);
    }
  });



  function go_mail(templateParams) {
    emailjs.init("UyKuV_vMIYvEAJYCy");
    // Send email using EmailJS
    emailjs.send("service_pdq62pn", "template_nt3bvae", templateParams)
      .then(function(response) {
        alert("Email sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("Failed to send email. Check console for details.");
        console.error("FAILED ... ", error);
    });
  };



};