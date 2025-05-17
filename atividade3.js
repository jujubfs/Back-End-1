//1
var apartamento = {
quartos: 2,
tipo: "Apartamento",
endereco: "Avenida Principal, 456 - Centro",
andar: 7};

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar}º andar da ${apartamento.endereco}.`);


//2
let produtoEmbalado = {
nome: "Laptop HP",
categoria: "Eletrônicos",
peso: 1.5,
preco: 3500.00};

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está à venda por R$ ${produtoEmbalado.preco.toFixed(2)}`);

//3
class Imovel {
constructor(quartos, tipo, endereco) {
this.quartos = quartos,
this.tipo = tipo,
this.endereco = endereco};

exibirInformacoes() {
return `${this.tipo} com ${this.quartos} quartos, localizada no endereço ${this.endereco}.`;}}

let casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
console.log(casa.exibirInformacoes());

let apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
console.log(apartamento.exibirInformacoes());

//4
class Veiculo {
constructor(marca, modelo, ano) {
this.marca = marca,
this.modelo = modelo,
this.ano = ano;
}

exibirDetalhes() {
return `${this.marca} ${this.modelo}, ano ${this.ano}.`;}}

let carro = new Veiculo("Toyota", "Corolla", 2022);
console.log(carro.exibirDetalhes());

let motocicleta = new Veiculo("Honda", "CBR 600RR", 2021);
console.log(motocicleta.exibirDetalhes());