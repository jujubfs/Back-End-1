//1
const carro = {
    modelo: "Corola"
}

function teste(valor) {
    valor.modelo = "Valor alterado dentro da função"
}

console.log(carro.modelo);
teste(carro);
console.log(carro.modelo);

//2
