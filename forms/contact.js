document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault();

    // Prepare form data
    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value // Ensure this ID matches
    };

    // Send the email using EmailJS
    emailjs.send('service_9krhstq', 'template_km7a2ef', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById("message-success").style.display = "block";
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById("message-error").style.display = "block";
        });
});

