// let num = 10
// console.log(num)

// // num = num + 1
// // console.log(num)

// // num += 1
// // console.log(num)

// num++
// console.log(num)

// let temperatura = 30

// if (temperatura > 30) {
//    alert("Dia quente")
// } else {
//   alert("Dia agradevel")
// }

// temperatura > 30 ? alert("Dia quente") : alert("Dia agradevel")

// const carrinho = []

// if (carrinho.length === 0){
//   console.log("O carrinho está vazio")
// }

// carrinho.length === 0 && console.log("O carrinho esta vazio 2")

// const usuario2 = null

// const registraAcesso = usuario.idade >= 18 && new Date()
// console.log(registraAcesso)

// console.log(0 || "Falsy")
// console.log(40 || "Falsy")
// console.log(null || "Falsy")
// console.log(undefined || "Falsy")
// console.log("Ola mundo" || "Falsy")
// console.log("" || "Falsy")
// console.log(NaN || "Falsy")
// console.log(true || "Falsy")
// console.log(false || "Falsy")

// console.log(usuario || "O usuario não existe")
// console.log(usuario2 || "O usuario não existe")


// const carrinhoAnterior = ["Cerveja", "Carne", "Carvao"]
// let carrinho = carrinhoAnterior || []
// console.log(carrinho)

//console.log(usuario2.nome || "O usuario nao existe")
// console.log(usuario2?.nome || "O usuario nao existe")


// const usuario = {
//   nome: "Christian",
//   idade: 26,
//   curso: {
//     javascript: "aprovado"
//   }
// }

// console.log(usuario?.curso?.javascript || "A propriedade não existe")
// console.log(usuario?.trabalho?.coderhouse || "A propriedade não existe")

// const usuario = {
//   nome: "Maria",
//   idade: 16
// }

// const { nome, idade } = usuario
// console.log(nome, idade)


// const usuario = {
//   nome: "Maria",
//   idade: 16,
//   telefone: {
//     trabalho: 222222222,
//     celular: 111111
//   }
// }

// const { nome, telefone : { trabalho } } = usuario
// console.log(nome)
// console.log(trabalho)

// function percorrerObjeto(obj) {
//   for (chave in obj) {
//     if (typeof obj[chave] === "object" && obj[chave] !== null) {
//       console.log(`${chave}`)
//       percorrerObjeto(obj[chave])
//     } else {
//       console.log(`${chave}: ${obj[chave]}`)
//     }
//   }
// }

// percorrerObjeto(usuario)

// const item = {
//   item_id: 432,
//   product_name: "Polar",
//   price_per_unit: 5.60
// }

// const {
//   item_id: id,
//   product_name: nome,
//   price_per_unit: preco
// } = item

// console.log(id, nome, preco)

// const produto = {
//     id: 432,
//     name: "Polar",
//     price: 5.60
// }

// function desestruturar({ id, name }) {
//   console.log(id, name)
// }

// desestruturar(produto)
//  const nomes1 = ["Christian", "Wil"]
//  const nomes2 = ["Felipe", "Fabio"]
// const [c,d,b,a] = nomes
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// console.log(nomes)
// console.log(...nomes)
// const numeros = [1,524,53,63,52 -0, 1, -4]
// console.log(Math.max(numeros))
// console.log(...numeros)
// console.log(Math.max(...numeros))

// const nomes = [...nomes1, ...nomes2]
// console.log(nomes)

// const objetoNomes = {
//   ...nomes
// }

// console.log(objetoNomes)

// const usuario1 = {
//   nome: "Christian",
//   idade: 26,
//   curso: "JavaScript"
// }

// const usuario2 = {
//   ...usuario1
// }

// console.log(usuario2)

// const usuario3 = {
//   ...usuario1,
//   email: "christian@gmail.com"
// }

// console.log(usuario3)

function somar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

console.log(somar(1,2))
console.log(somar(1,2,3,4,5,6,7,8))