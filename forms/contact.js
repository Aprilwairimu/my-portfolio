document.getElementById("contact-form").addEventListener("submit", function(event){
  event.preventDefault();

  // Prepare form data
  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  // Send the email using EmailJS
  emailjs.send('your_service_id', 'your_template_id', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      document.getElementById("message-success").style.display = "block";
    }, function(error) {
      console.log('FAILED...', error);
      document.getElementById("message-error").style.display = "block";
    });
});
