/*----------- funcion para acceder a la API -----------------*/
function convertir_dolar(dolar_hoy, pesos, precio_dolar) {
    fetch("https://dolarapi.com/v1/dolares/cripto")
      .then(response => response.json())
      .then(data => {
        console.log(data);    
        let dolar = data['venta'];
        let precio = pesos / dolar;
        precio = precio.toFixed(2);
        dolar = dolar.toFixed(2);
        var v_hoy = document.getElementById(dolar_hoy);
        v_hoy.innerHTML = dolar;
        var v_pre = document.getElementById(precio_dolar);
        v_pre.innerHTML = precio;});
      };