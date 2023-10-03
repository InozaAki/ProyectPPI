function calcularIMC(){
    peso = parseFloat(document.querySelector('#peso').value);
    altura = parseFloat(document.querySelector('#estatura').value);
    var imc = (peso / (Math.pow(altura, 2))).toFixed(2);
    switch(true){
        case (imc < 18.49):    
            clasificacion = "Peso bajo";
            colorClasificacion = "orange";
            break;
        case (imc > 18.49 && imc <= 24.99):
            clasificacion = "Peso normal";
            colorClasificacion = "lightblue";
            break;
        case (imc > 24.99 && imc <= 29.99):
            clasificacion = "Sobrepeso";
            colorClasificacion = "slateblue";
            break;
        case (imc > 29.99 && imc <= 34.99):
            clasificacion = "Obesidad leve";
            colorClasificacion = "red";
            break;
        case (imc > 34.99 && imc <= 39.99):
            clasificacion = "Obesidad media";
            colorClasificacion = "green";
            break;
        case (imc > 39.99):
            clasificacion = "Obesidad morbida";
            colorClasificacion = "yellow";
            break;
        default:
            clasificacion = "Desconocido";
            colorClasificacion = "lightgray";
            break;
            
    }
    document.querySelector('#clasificacion').value = clasificacion;
    document.querySelector('#clasificacion').style.backgroundColor = colorClasificacion = colorClasificacion; 
    document.querySelector('#IMC').value = imc;
}

function conversionTemperatura(){}