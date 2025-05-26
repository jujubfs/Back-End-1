import rl from 'readline-sync'

let frase = rl.question("Informe o texto para ser convertido: ");

//Declaração de função
function Maiusculas(texto) {
    return texto.toUpperCase();
}

//Expressão de função
const cxAlta = function(texto){
    return texto.toUpperCase();
}
//Arrow function
const tudoMaiusculo = (texto) => texto.toUpperCase()
console.log(tudoMaiusculo(frase));