var send = function(){
  const btn1 = document.getElementById('button');

  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();

     btn1.value = 'Sending...';

     const serviceID = 'default_service';
     const templateID = 'techno';

    var templateParams = {
          Name: document.getElementById("Name").value,
          School: document.getElementById("School").value,
          Email: document.getElementById("Email").value,
          Mobile: document.getElementById("Mobile").value+"",
          Message: document.getElementById("Message").value
    };
     
    emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
           alert('Thank you for submitting your query. Our team will get in touch with you shortly.');
           console.log('SUCCESS');
        }, function(error) {
           alert(JSON.stringify(err));
           console.log('FAILED...', error);
        });

  //    emailjs.sendForm(serviceID, templateID, this)
  //     .then(() => {
  //       btn1.value = 'Send Email';
  //       alert('Thank you for submitting your query. Our team will get in touch with you shortly.');
  //     }, (err) => {
  //       btn1.value = 'Send Email';
  //       alert(JSON.stringify(err));
  //     });
  });
}
