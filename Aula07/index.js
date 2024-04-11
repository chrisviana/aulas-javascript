// @Os tipos de variaveis ? 
// let sobrenome = "Viana"
// let nome = "Christian" + sobrenome || 'Christian' + " " + sobrenome || `Christian ${sobrenome}`;
// let idade = 26
// let altura = 1.77
// let alunoAtivo = true (1) || false (0)
// let cpf; //undefied
// let pessoa = {
//     nome: "Christian",
//     sobrenome: "Viana",
//     idade: 26,
//     altura: 1.77,
//     alunoAtivo: true (1) || false (0),
//     cpf: undefined,
// }

//@Prompt, Alert, Console
// let nomeUsuario = prompt("Digite o nome de um usuario")
// console.log(parseInt(nomeUsuario))
// alert("Ola " + nomeUsuario )
// console.log("Ola " + parseInt(nomeUsuario))


//@Operadores relacionais e logicos e condicionais
// if ()
// else ()
// if () else if ()

// let idade = 66
// let possuiCarteiraDeMorotista = false

// if (idade >= 18 && possuiCarteiraDeMorotista) {
//     console.log("Você é maior de idade e possui carteira de morotista e pode dirigir")
// } else if (idade > 65) {
//     console.log("Você é idoso e deve renovar sua carteira de morotista")
// }else {
//     console.log("Não pode dirigir")
// }

//@Funçoes
// function soma(a, b) {
//     return a + b
// }

// // const subtrair = (a, b) => {
// //     return a - b
// // }

// let resultado = soma(5, 3)
// console.log("O resultado da soma é: " + resultado)

//@Escopo e contexto this

// var nome = "Global"

// function teste() {
//     let nome = "Lucas"
//     console.log("Nome local: ", nome)
//     console.log("Nome global: ", this.nome)
// }

// teste()

//@For, While e Do While

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log("######")
// let contador = 0
// while (contador < 5) {
//     console.log(contador + 1)
//     contador++
// }
// console.log("######")
// do {
//     console.log(contador + 1)
// } while (false)


// function estacaoDoAno(mes) {
//     switch (true) {
//         case (mes >= 1 && mes <= 3):
//             return "Verão";
//         case (mes >= 4 && mes <= 6):
//             return "Outono";
//         case (mes >= 7 && mes <= 9):
//             return "Inverno";
//         case (mes >= 10 && mes <= 12):
//             return "Primavera";
//         default:
//             return "Mês inválido";
//     }
// }

// console.log(estacaoDoAno(4))

//1. Verificar se um número é par ou ímpar:

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(5)); 
console.log(parOuImpar(10));

 

//2.(Estações do ano) Faça um sistema que receba um mês e informe a qual estação esse mês pertence.

function estacaoDoAno(mes) {
    if (mes >= 1 && mes <= 3) {
        return "Verão";
    } else if (mes >= 4 && mes <= 6) {
        return "Outono";
    } else if (mes >= 7 && mes <= 9) {
        return "Inverno";
    } else if (mes >= 10 && mes <= 12) {
        return "Primavera";
    } else {
        return "Mês inválido";
    }
}


console.log(estacaoDoAno(5)); 
console.log(estacaoDoAno(11));

 

//3.(Temperatura) Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).
function fahrenheitParaCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}


console.log(fahrenheitParaCelsius(32)); 
console.log(fahrenheitParaCelsius(212)); 

 

//4. (Número primo) Crie uma funcionalidade que solicita para que o usuário informe um número até que o número informado seja primo.
function verificarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= numero/2; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function solicitarNumeroPrimo() {
    var numero;
    do {
        numero = parseInt(prompt("Informe um número:"));
    } while (!verificarPrimo(numero));
    console.log(numero + " é um número primo.");
}

solicitarNumeroPrimo();

 

//5. (Somatório) Faça um sistema que receba um número e calcule seu somatório (somar todos os valores entre 1 e o número escolhido).

function calcularSomatorio(numero) {
    var somatorio = 0;
    for (var i = 1; i <= numero; i++) {
        somatorio += i;
    }
    return somatorio;
}

var numeroEscolhido = 5;
console.log("O somatório de 1 até " + numeroEscolhido + " é: " + calcularSomatorio(numeroEscolhido));

 

//6. (Cubo) Crie uma função que retorne o cubo de um número fornecido pelo usuário.

function cubo(numero) {
    return numero ** 3;
}

var numeroUsuario = parseInt(prompt("Digite um número:"));
console.log("O cubo de " + numeroUsuario + " é: " + cubo(numeroUsuario));

 

//7.(Divisível) Crie uma funcionalidade que recebe dois números e verifica se o primeiro número é ou não divisível pelo segundo número.


function divisivel(numero1, numero2) {
    return numero1 % numero2 === 0;
}

var primeiroNumero = 10;
var segundoNumero = 5;
console.log(primeiroNumero + " é divisível por " + segundoNumero + "? " + divisivel(primeiroNumero, segundoNumero));


//8.(Mês) Receba um número do usuário. Se este número estiver entre 1 e 12, deve exibir o nome do mês correspondente. Se for digitado um número fora desta faixa, imprimir a mensagem: “valor de mês incorreto”. Faça um loop até que o usuário digite 0.


function nomeDoMes(numero) {
    switch(numero) {
        case 1:
            return "Janeiro";
        case 2:
            return "Fevereiro";
        case 3:
            return "Março";
        case 4:
            return "Abril";
        case 5:
            return "Maio";
        case 6:
            return "Junho";
        case 7:
            return "Julho";
        case 8:
            return "Agosto";
        case 9:
            return "Setembro";
        case 10:
            return "Outubro";
        case 11:
            return "Novembro";
        case 12:
            return "Dezembro";
        default:
            return "Valor de mês incorreto";
    }
}


var numeroMes;
do {
    numeroMes = parseInt(prompt("Digite um número de mês (1-12), ou 0 para sair:"));
    if (numeroMes !== 0) {
        console.log(nomeDoMes(numeroMes));
    }
} while (numeroMes !== 0);



//9. (Potência) Faça um programa que peça dois números (base e expoente) calcule e mostre o primeiro número elevado ao segundo número.
function calcularPotencia(base, expoente) {
    return base ** expoente;
}


var base = parseInt(prompt("Digite a base:"));
var expoente = parseInt(prompt("Digite o expoente:"));
console.log(base + " elevado a " + expoente + " é: " + calcularPotencia(base, expoente));



//10. (Idade) Faça um sistema que receba o ano, mês e dia de nascimento de uma pessoa, calcule e mostre a idade dessa pessoa em anos, meses e dias.

function calcularIdade(anoNascimento, mesNascimento, diaNascimento) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var mesAtual = dataAtual.getMonth() + 1;
    var diaAtual = dataAtual.getDate();

    var anos = anoAtual - anoNascimento;
    var meses = mesAtual - mesNascimento;
    var dias = diaAtual - diaNascimento;

    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        meses = meses + 12;
    }
    if (dias < 0) {
        meses--;
        dias = dias + diasNoMes(mesAtual, anoAtual);
    }

    return {
        anos: anos,
        meses: meses,
        dias: dias
    };
}

function diasNoMes(mes, ano) {
    return new Date(ano, mes, 0).getDate();
}


var anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
var mesNascimento = parseInt(prompt("Digite o mês de nascimento (1-12):"));
var diaNascimento = parseInt(prompt("Digite o dia de nascimento:"));

var idade = calcularIdade(anoNascimento, mesNascimento, diaNascimento);
console.log("Idade: " + idade.anos + " anos, " + idade.meses + " meses, " + idade.dias + " dias.");


