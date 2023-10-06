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
    document.querySelector('#clasificacion').style.backgroundColor = colorClasificacion; 
    document.querySelector('#IMC').value = imc;
}

function conversionTemperatura(){
    const CELCIUS = 1;
    const FAHRENHEIT = 2;
    const KELVIN = 3;
    const RANKINE = 4;
    
    temperatura = parseFloat(document.querySelector('#temperatura').value);
    origen = parseInt(document.querySelector('#temperaturaOriginal').value);
    opcion = parseInt(document.querySelector('#temperaturaObjetivo').value);
    let resultado;

    switch(opcion){
        case CELCIUS:
            if(origen != CELCIUS){
                if(origen != FAHRENHEIT){
                    if(origen != KELVIN){
                        resultado = ((temperatura-32)-459.67)/1.8;
                    }else{
                        resultado = temperatura - 273.15;
                    }
                }else{
                    resultado = (temperatura-32)/1.8;
                }
            }else{
                resultado = temperatura;
            }
            break;
        case FAHRENHEIT:
            if(origen != CELCIUS){
                if(origen != FAHRENHEIT){
                    if(origen != KELVIN){
                        resultado = temperatura - 459.67;
                    }else{
                        resultado = (temperatura*1.8)-459.67;
                    }
                }else{
                    resultado = temperatura;
                }
            }else{
                resultado = (temperatura*1.8)+32;
            }
            break;
        case KELVIN:
            if(origen != CELCIUS){
                if(origen != FAHRENHEIT){
                    if(origen != KELVIN){
                        resultado = temperatura/1.8;
                    }else{
                        resultado = temperatura;
                    }
                }else{
                    resultado = (temperatura+459.67)/1.8;
                }
            }else{
                resultado = temperatura+273.15;  
            }
            break;
        case RANKINE:
            if(origen != CELCIUS){
                if(origen != FAHRENHEIT){
                    if(origen != KELVIN){
                        resultado = temperatura;
                    }else{
                        resultado = temperatura*1.8;
                    }
                }else{
                    resultado = temperatura+459.67;
                }
            }else{
                  resultado = temperatura*1.8+32+459.67;
            }
            break;
        default:           
            break;
    }

    document.querySelector('#temperaturaConvertida').value = resultado.toFixed(2);
}