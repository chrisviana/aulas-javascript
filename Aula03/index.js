  var numero = 10
  var numero2 = 10

  if (numero == numero2) {
    console.log("Sou verdadeiro")
  } else {
    console.log("Sou falso")
  }

  var nome = prompt("Insira seu nome")
  if (nome == "") {
    alert("Insira seu nome no campo")
  } else {
    alert("O nome digitado foi" + nome)
  }

  var combustivel = "GNV"
  if (combustivel == "Gasolina") {
    console.log("É gasolina")
  } else if (combustivel == "GNV") {
    console.log("É GNV")
  } else if (combustivel == "Disiel") {
    console.log("É Disiel")
  } else {
    console.log("Seu carro nao vai ligar")
  }

  var idade = 26
  var tenho26Anos = (idade == 26)
  console.log(tenho26Anos)
  if (tenho26Anos) {
    console.log("Tenho 26 anos")
  }


 
  //Solicitar um número de 1 a 5 do usuário
  var numero = prompt("Digite um número de 1 a 5:");

  // //Converter a entrada para um número inteiro
  console.log(numero)
  console.log(typeof (numero))

  // //Utilizar condições aninhadas para determinar o número por extenso
  if (numero === 1) {
    alert("Um");
  } else if (numero === 2) {
    alert("Dois");
  } else if (numero === 3) {
    alert("Três");
  } else if (numero === 4) {
    alert("Quatro");
  } else if (numero === 5) {
    alert("Cinco");
  } else {
    // Se o número não estiver entre 1 e 5, exibir uma mensagem de erro
    alert("Número inválido. Por favor, digite um número de 1 a 5.");
  }

  var valor = "";
  var valor2 = "Ana"
  // 0 = FALSE
  // 1 = TRUE
  //SE EXISTE ALGO DENTRO DA VARIAVEL VALOR
  if (valor) {
    alert("Valor verdadeiro")
  } else {
    alert("Falso")
  }

  if (valor2) {
    alert("Valor verdadeiro")
  }

  // Comparação de diferente (!=)
  var precoProduto = 29
  if (precoProduto != 0) {
    console.log("Produto nao é free")
  }

  var x = 10;
  var y = 20;

  if (!(x > y)) {
    console.log("x não é maior que y");
  } else {
    console.log("x é maior que y");
  }

  if (precoProduto > 100) {
    console.log("Produto é maior que 100 reais")
  } else if (precoProduto >= 80) {
    console.log("Produto é maior ou igual a 80 reais")
  } else {
    console.log("O produto é menor que 80 reais")
  }

  if (precoProduto < 10) {
    console.log("Produto é menor que 10 reais")
  } else if (precoProduto <= 30) {
    console.log("Produto é menor ou igual a 30 reais")
  } else {
    console.log("O produto é maior que 30 reais")
  }

  //@Exercicio02
  var numero = prompt("Digite um número entre 1 e 50:");

  // Converter o número para inteiro
  numero = parseInt(numero);

  // Verificar em qual intervalo o número se encaixa
  if (numero >= 1 && numero <= 10) {
    alert("Número: " + numero + "\nIntervalo: entre 1 e 10");
  } else if (numero >= 10 && numero <= 20) {
    alert("Número: " + numero + "\nIntervalo: entre 10 e 20");
  } else if (numero >= 20 && numero <= 30) {
    alert("Número: " + numero + "\nIntervalo: entre 20 e 30");
  } else if (numero > 30 && numero <= 40) {
    alert("Número: " + numero + "\nIntervalo: entre 31 e 40");
  } else if (numero > 40 && numero <= 50) {
    alert("Número: " + numero + "\nIntervalo: entre 41 e 50");
  } else {
    alert("Número fora do intervalo permitido.");
  }



  function verificaFamilia30(numero) {
    if (numero >= 30 || numero < 40) {
      console.log(numero, "-> Família numérica do 30");
    } else {
      console.log(numero, "-> Família não identificada");
    }
  }

  verificaFamilia30(30);
  verificaFamilia30(35);
  verificaFamilia30(20);
  verificaFamilia30(50);


  var letra = prompt("Digite uma letra:");

  if (letra === null || letra === "") {
    console.log("Nenhuma letra foi fornecida.");
  } else {

    if (
      letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" ||
      letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U"
    ) {
      console.log("A letra inserida é uma vogal.");
    } else {
      console.log("A letra inserida não é uma vogal.");
    }
  }