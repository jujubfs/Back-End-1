import readLine from "readline-sync"

//1
let num = readLine.questionInt("Informe o número para gerar a tabuada: ")
let cont = 1;
while (cont <= 10) {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}

//2
let numAlunos = readLine.questionInt("Informe o número de alunos da turma: ");
let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
    console.log(`Aluno ${contAlunos}`);

    let contBimestres = 1;
    let somaNotas = 0;

    while (contBimestres <= 4) {
        let nota = readLine.question(`Informe a nota do ${contBimestres}º bimestre do aluno ${contAlunos}: `);
        somaNotas = nota;
        contBimestres++;
    }
    let mediaAluno = somaNotas / 4;
    somaMedias += mediaAluno;
    console.log(`Média do Aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média Geral da Turma: ${mediaGeralTurma.toFixed(2)}`);

//3
const numeroAleatorio = Math.floor(Math.random()*100) + 1;
let palpite;

do {
    palpite = readLine.questionInt("Tente adivinhar o número (entre 1 e 100): ")
    if (palpite == numeroAleatorio) {
        console.log("Parabéns! Você adivinhou o número.")
    } else if (palpite < numeroAleatorio) {
        console.log("Tente um número maior.")
    }else{
        console.log("Tente um número menor.")
    }
        
} while (palpite !== numeroAleatorio);

//For
//1
let anterior = 0;
let atual = 1;

console.log("---Sêquencia de Fibonacci---");
console.log(anterior);
console.log(atual);

for (let i = 3; i < 20; i++) {
    let proximo = anterior + atual;

    console.log(proximo);

    anterior = atual;
    atual = proximo;
}

//2
for (let i = 1; i <= 2; i++) {

    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `)
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `)
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    }
    else if (salario <= 2000) {
        impostoRenda = salario * 0.075;
    }
    else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    }
    else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    }
    else {
        impostoRenda = salario * 0.275;
    }

    console.log(`\n---Imposto de renda a ser pago---`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}`);
}

//For...of e For...in
//1
const pessoa ={
    Nome: "Julia",
    Idade: 15,
    Sexo: 'F'
}
for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

//2
let cores = ["Azul", "Branco", "Verde", "Preto", "Roxo"];
for (const elemento of cores) {
    console.log("Cor: " + elemento);
}