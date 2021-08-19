/* Desafio:
Dois objetos, pessoa A e pessoa B, elas receberão valores (nome, peso, altura, idade). 
O desafio é criar uma função que vai retornar o IMC dessa pessoa e o ano de nascimento.
*/

const pessoaA = {

    nome: 'Pietra',
    peso: 50,
    altura: 1.65,
    idade: 20,
    anoAtual: 2021
}

function calcularIMC(peso,altura){

    let IMC = peso / altura * altura;

    if(IMC < 18.5){
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está abaixo do peso');

    }else if(IMC >= 18.5 && IMC <= 24.9) {
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está no peso normal');

    }else if(IMC >= 25 && IMC <= 29.9) {
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está com sobrepeso');

    }else if(IMC > 30) {
      console.log('Seu IMC é:' + ' '+ IMC + ' ' + 'e você está acima do peso');
    } 
}
calcularIMC(pessoaA.peso,pessoaA.altura);

function calcAnoDeNascimento(anoAtual,idade){

    let anoDeNascimento = anoAtual - idade;

    if(anoAtual - idade){
        console.log('O ano de seu nascimento é:');
    }
}
calcAnoDeNascimento(pessoaA.anoAtual,pessoaA.idade);

const pessoaB = {

    nome: 'Lana',
    peso: 65,
    altura: 1.58,
    idade: 32,
    anoAtual: 2021
}

function calcularIMC(peso,altura){

    let IMC = peso / altura * altura;

    if(IMC < 18.5){
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está abaixo do peso');

    }else if(IMC >= 18.5 && IMC <= 24.9) {
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está no peso normal');

    }else if(IMC >= 25 && IMC <= 29.9) {
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está com sobrepeso');

    }else if(IMC > 30) {
      console.log('Seu IMC é:' + ' ' + IMC + ' ' + 'e você está acima do peso');
    }
}
calcularIMC(pessoaB.peso,pessoaB.altura);

function calcAnoDeNascimento(anoAtual,idade){

    let anoDeNascimento = anoAtual - idade;

    if(anoAtual - idade){
        console.log('O ano de seu nascimento é:' + anoDeNascimento);
    }
}
calcAnoDeNascimento(pessoaB.anoAtual,pessoaB.idade);











