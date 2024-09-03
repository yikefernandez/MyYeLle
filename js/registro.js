let formLogin = document.getElementById("submit");

formLogin.addEventListener("click", prevenirEnvio);

function prevenirEnvio(event) {
    event.preventDefault();
    console.log("Hice click")
    Swal.fire("Gracias por registrarte!");
  }