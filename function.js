var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById("resultado");// llama a todos los componentes
    var reset = document.getElementById("reset");// llama a todos los componentes
    var suma = document.getElementById("suma");// llama a todos los componentes
    var resta = document.getElementById("resta");// llama a todos los componentes
    var multiplicacion = document.getElementById("multiplicacion");// llama a todos los componentes
    var divicion = document.getElementById("divicion");// llama a todos los componentes
    var igual = document.getElementById("igual");// llama a todos los componentes
    var uno = document.getElementById("uno");// llama a todos los componentes
    var dos = document.getElementById("dos");// llama a todos los componentes
    var tres = document.getElementById("tres");// llama a todos los componentes
    var cuatro = document.getElementById("cuatro");// llama a todos los componentes
    var cinco = document.getElementById("cinco");// llama a todos los componentes
    var seis = document.getElementById("seis");// llama a todos los componentes
    var siete = document.getElementById("siete");// llama a todos los componentes
    var ocho = document.getElementById("ocho");// llama a todos los componentes
    var nueve = document.getElementById("nueve");// llama a todos los componentes
    var cero = document.getElementById("cero");// llama a todos los componentes

    //Eventos
    uno.onclick = function(e){
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0"
    }


    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    divicion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
}

//metodos
function limpiar(){
    resultado.textContent = "";
}

function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;

        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    resultado.textContent = res;
}