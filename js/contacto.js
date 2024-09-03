let formLogin = document.getElementById("submit");

formLogin.addEventListener("click", prevenirEnvio);

function prevenirEnvio(event) {
    event.preventDefault();
    Swal.fire("Gracias por escribirnos!");
  }