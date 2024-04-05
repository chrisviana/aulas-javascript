// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log("######")

// for (let i = 1; i <= 10; i++) {
//   console.log(i)
// }

//@Tabuada

// let numero = parseInt(prompt("Digite um numero"))

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i
//   console.log(`${numero} x ${i} = ${resultado}`)
// }

// let numero = parseInt(prompt("Inserir Número"));

// function produtorio(numero) {
//     let resultado = 1;
//     for (let i = 1; i <= numero; i++) {
//         resultado = resultado * i;
//     }
//     console.log("Produtorio de " + numero + " = " + resultado);
// }

// produtorio(numero)

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// console.log("#########")

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }

// function exibirNumerosMenores(numero) {
//   if (numero < 1 || numero > 10) {
//     console.log("O numero deve estar entre 1 e 10")
//     return
//   }

//   for (let i = 1; i < numero; i++) {
//     console.log(i)
//   }
// }

// exibirNumerosMenores(4)
// console.log("#########")
// exibirNumerosMenores(7)
// console.log("#########")
// exibirNumerosMenores(11)

// let entrada = prompt("Digite alguma coisa")


// while(entrada != "Sair") {
//   alert("O usuario digitou " + entrada)
//   entrada = prompt("Digite outra coisa")
// }

// function calcularFatorial(numero){
//   if (numero < 0) {
//     console.log("O fatorial nao esta definido para numeros negativos")
//     return
//   }

//   let fatorial = 1
//   let i = 1
  
//   while(i <= numero) {
//     fatorial *= i;
//     i++
//   }

//   console.log("O fatorial de " + numero + "é: " + fatorial)
// }

// calcularFatorial(4)
// console.log("#########")
// calcularFatorial(7)


// let numero = 0
// do {
//   numero = prompt("Digite um numero")
//   console.log(numero)
// } while(parseInt(numero))

// let entrada = prompt("Digite um nome")

// while (entrada != "sair") {
//   switch(entrada) {
//     case 2024:
//       if (mes == 6) {
//         let codigoFiscal = 202406
//       }

//       let codigoFiscal = 202401
//       break
//     case "IGOR":
//       alert("Bem vindo Igor")
//       break
//     case "THAYNNARA":
//       alert("Bem vindo Thaynnara")
//       break
//     default:
//       alert("Quem é você ?")
//       break
//   }
//   entrada = prompt("Digite um nome")
// }

function calcularDezena(numero) {
    // Verifica se o número está dentro do intervalo válido (de 1 a 100)
    if (numero < 1 || numero > 100) {
        console.log("O número deve estar entre 1 e 100.");
        return;
    }

    // Obtém o primeiro dígito do número para determinar a dezena
    let dezena = Math.floor(numero / 10) * 10;

    // Utiliza switch para retornar a mensagem correspondente à dezena
    switch (dezena) {
        case 10:
            console.log("Família do 10");
            break;
        case 20:
            console.log("Família do 20");
            break;
        case 30:
            console.log("Família do 30");
            break;
        case 40:
            console.log("Família do 40");
            break;
        case 50:
            console.log("Família do 50");
            break;
        case 60:
            console.log("Família do 60");
            break;
        case 70:
            console.log("Família do 70");
            break;
        case 80:
            console.log("Família do 80");
            break;
        case 90:
            console.log("Família do 90");
            break;
        default:
            console.log("O número está na família das dezenas.");
    }
}

// Teste da função
calcularDezena(33);
calcularDezena(9);
calcularDezena(80);