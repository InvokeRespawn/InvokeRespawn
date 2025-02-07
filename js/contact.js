
function submitForm(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const _body = encodeURIComponent(
      `Name: ${firstName} ${lastName}
      Email: ${email}
  
      Message:
      ${message}`
    );

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${_body}`;
   
    window.open(
      mailtoLink,
      '_blank') 
    
  }


  