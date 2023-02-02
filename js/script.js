type = "text/javascript";
function convertir() {
  let valore = parseInt(document.getElementById("valor").value);
  let resultado = 0;
  let dolar = 0.025;
  let euro = 0.024;
  if (document.getElementById("uno").checked) {
    resultado = valore / dolar;
    swal({
      text: "El cambio de Dolares a Pesos Uruguayos es: $" + resultado.toFixed(2),
      icon: "success"
      });
  } else if (document.getElementById("dos").checked) {
    resultado = valore / euro;
    swal({
      text: "El cambio de Euros a Pesos Uruguayos es: $" + resultado.toFixed(2),
      icon: "success",
    });
  } else {
    swal({
      title: "Cuidado!",
      text: "Tienes que ingresar un monto",
      icon: "warning",
    });
  }
}



