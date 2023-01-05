type="text/javascript"
function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 0.025;
    var euro = 0.024;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Dolares a Pesos Uruguayos es: $" + resultado);
        }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio Euros a Pesos Uruguayos es:" + resultado);

    }
    else{
        alert("Tienes que ingresar el monto")
    }    
}