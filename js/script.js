type="text/javascript"
function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 0.025;
    let euro = 0.024;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Dolares a Pesos Uruguayos es: $" + resultado.toFixed(2));
        }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio de Euros a Pesos Uruguayos es: $" + resultado.toFixed(2));

    }
    else{
        alert("Tienes que ingresar el monto")
    }    
}