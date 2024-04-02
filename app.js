// Inicializa EmailJS
emailjs.init('3Z6ukMZHq9lHnCdzQ'); // Reemplaza con tu User ID de EmailJS

(function() {
  // Maneja el cambio de pestañas de la interfaz
  [...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function() {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    })
  });

  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  })
})();

// Maneja el envío del formulario
window.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const submitBtn = document.querySelector('.submit-btn button');

  submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); 

    const name = form.querySelector('input[placeholder="YOUR NAME"]').value;
    const email = form.querySelector('input[placeholder="YOUR EMAIL"]').value;
    const subject = form.querySelector('input[placeholder="ENTER SUBJECT"]').value;
    const message = form.querySelector('textarea').value;

    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);

    const serviceID = 'service_v3tto8s'; // Reemplaza con tu Service ID de EmailJS
    const templateID = 'template_rkb25ya'; // Reemplaza con el ID de tu plantilla de correo electrónico en EmailJS

    emailjs.sendForm(serviceID, templateID, form)
       .then(() => {
        console.log('Correo electrónico enviado correctamente!');
       }, (error) => {
       console.log('Error al enviar el correo electrónico:', error);
       });
  });
});
