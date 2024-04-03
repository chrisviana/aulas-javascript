// var nome = "Lucas"

// function primeiroNome() {
//   var nome = "Pedro"
// }

// function segundoNome() {
//   nome = "Maria"
// }

// primeiroNome()
// segundoNome()

// console.log(nome)



// var resultado = 0

// function somar(primeiroNome, segundoNome) { 

//   resultado = primeiroNome + segundoNome
// }

// somar(10, 20)
// console.log("Resultado: ", resultado)

// function somar(primeiroNumero, segundoNumero) {
//   var resultado = primeiroNumero + segundoNumero
// }
// somar(10, 20)
// console.log(resultado)

// var desconto;

// function calcularDesconto(preco) {
//   var desconto = preco * 0.3
//   console.log(desconto)
// }

// calcularDesconto(100)
// console.log("O meu desconto é de: ", desconto)

// function somar(a, b) {
//   var resultado = a + b
//   return resultado
// }


// function subtrair(a, b) {
//   var resultado = a - b
//   return resultado
// }


// console.log(somar(1,2))
// console.log(subtrair(2,1))

// let idade = 5
// idade = 33
// console.log(idade)

// const tempo = "Chuva"
// tempo = "Sol"
// console.log(tempo)

// const PI = 3.1415245252
// const KEY = "35720NAOFH54938HNFIOHA98FA"
// const TOKEN = "FCKANBFOIAYFA89FA"

// usando var
// if (true) {
//   var variavel1 = "teste"
// }


// // utulizando let
// if (true) {
//   let variavel2 = "teste"
// }

// console.log(variavel2)

// function calcularPrecoTotal(precoUnitario, quantidade) {
//   const TAXA_DE_DESCONTO = 0.1
//   let subtotal = precoUnitario * quantidade
//   let desconto = 0;

//   if (subtotal > 100){
//     desconto = subtotal * TAXA_DE_DESCONTO
//   } 

//   let precoFinal = subtotal - desconto
//   return precoFinal
// }

// var precoUnitario = 25
// var quantidade = 1
// var precoFinal = calcularPrecoTotal(precoUnitario, quantidade)
// console.log("O preco final da minha compra é de: ", precoFinal)


// ### ESTE CONTEXTO GLOBAL
var nome = "Lucas"

// function obterNome() {
//   var nome = "Jonas"
  
//   console.log(this.nome)
//   console.log(nome)
// }

// obterNome()

function obterNome2() {
  this.nome = "Jonas"
  console.log(this.nome)
}
console.log(new obterNome2())
new obterNome2()
console.log(this.nome)



/// ##################