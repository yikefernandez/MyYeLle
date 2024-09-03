let formEncomienda = document.getElementById("formEncomienda");

formEncomienda.addEventListener("click", prevenirEnvio);

function prevenirEnvio(event) {
    event.preventDefault();
    Swal.fire("Tu envio esta en camino!");
  }

  