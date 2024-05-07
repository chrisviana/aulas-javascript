
// function maiorQue(n) {
//   return (m) => m > n
// }

// let maiorQueDez = maiorQue(10)

// function atribuirOperacao(op) {
//   if (op == "somar") {
//     return (a,b) => a + b
//   } else if (op == "subtrair") {
//     return (a,b) => a - b
//   }
// }

// let soma = atribuirOperacao("somar")
// let subtrair = atribuirOperacao("subtrair")



// function paraCadaUm(array, funcao) {
//   for (const item of array) {
//     funcao(item)
//   }
// }


//paraCadaUm(numeros, console.log)

// let total = 0
// const numeros = [1,2,3,4]

// function paraCadaUm(array, funcao) {
//   for (const item of array) {
//     funcao(item)
//   }
// }

// function acumular(num) {
//   total += num
// }

// paraCadaUm(numeros, acumular)
// console.log(total)


//@ArrowFunction
// const numeros = [1,2,3,4]
// const quadrados = []

// function paraCadaUm(array, funcao) {
//   for (const item of array) {
//     funcao(item)
//   }
// }

// paraCadaUm(numeros, (o) => {
//   quadrados.push(o * 2)
// })




































//@ForEach
// O método forEach() é similar ao exemplo porCadaUm anterior.
// Ele itera sobre o array de referência e executa a função que enviamos por 
// parâmetro para cada elemento do array, a qual recebe o elemento
// do array que se está percorrendo:

// const numeros = [1,2,3,4,5,6]
// numeros.forEach((numero) => {
//   console.log(numero)
// })




// @Find
// O método find() recebe uma função de comparação por parâmetro. Captura o elemento que
// se está percorrendo e retorna o elemento conforme a comparação executada.
// O método retorna o primeiro elemento do array que cumpra a condição:

const cursos = [
  {
    nome: 'JavaScript',
    preco: 3000
  },
  {
    nome: 'ReactJS',
    preco: 4000
  },
  {
    nome: 'VueJS',
    preco: 2000
  },
  {
    nome: 'FullStack',
    preco: 5000
  }
]

const resultado = cursos.find((curso) => curso.nome === "ReactJS")
console.log(resultado)
const resultado2 = cursos.find((curso) => curso.nome === "Java")
console.log(resultado2)


////////////////////////////////
// Note que o find retorna o primeiro elemento do array que
// cumpra a condição enviada, a partir daí, podemos armazená - lo
// em uma variável ou usá - lo de referência para outro processo.
// Se não houver nenhuma correspondência no array, o método find retorna undefined.





//################################
// @Filter
// O método filter() recebe, da mesma forma que o find, uma função comparadora por
// parâmetro e retorna um novo array com todos os elementos que cumpram essa condição.
// No caso de não haver correspondências, retornará um array vazio.

const resultadoFilter = cursos.filter((curso) => curso.nome.includes("JS"))
console.log(resultadoFilter)
const arrayDeCursosNovos = cursos.filter((curso) => curso.preco < 2000)
console.log(arrayDeCursosNovos.push({}))



//####################
// @Some
// O método some() funciona da mesma forma que o find(), recebendo uma função de busca,
// com a diferença que em vez de retornar o elemento encontrado, o método some retorna true ou false
// conforme o resultado da iteração de busca.

console.log(cursos.some((curso) => curso.nome === "JavaScript"))
console.log(cursos.some((curso) => curso.nome === "AngularJS"))


//####################
// @Map
// O método map() cria um novo array com todos os elementos do original
// transformados de acordo com as operações da função enviada por parâmetro.Ele tem o mesmo tamanho,
// mas os elementos armazenados serão construídos pelo return da função:

const nomes = cursos.map((curso) => curso.nome)
console.log(nomes)


// No exemplo anterior, a função retorna a propriedade nome de cada elemento,
// e é isso que é armazenado no novo array nomes.O map é muito utilizado para a transformação de arrays.
// Se quisermos aumentar o preço de todos os cursos nesse exemplo, podemos mapear e retornar um recorte dos
// elementos com o preço modificado:


const atualizado = cursos.map((curso) => {
  return {
    nome: curso.nome,
    preco: curso.preco * 1.25
  }
})

console.log(atualizado)




//####################
// @Reduce
// Diferentemente dos métodos anteriores, o método reduce recebe dois parâmetros:

// O primeiro é a função que ordena o que queremos resumir do array. Recebe um parâmetro que funciona 
//como acumulador e o elemento do array que iteramos.
// O segundo é o valor inicial do acumulador. 

const numerosReduce = [1,2,3]
const total = numerosReduce.reduce((acumulador, elemento) => acumulador + elemento, 0)
console.log(total)
// export Array.reduce = function(funcao, valorInicial) {
//   let acumulador = ''
//   if (valorInicial != undefined) {
//     acumulador = valorInicial
//   } else {
//     acumulador = 0
//   }

//   for (let i = valorInicial; i < funcao.elemento.length; i++) {
//     acumulador = acumulador + i
//   }

//   return acumulador
// }

const minhaCompra = [
  {
    nome: "Dev Web",
    preco: 2000
  },
  {
    nome: "JavaScript",
    preco: 1878
  },
  {
    nome: "ReactJS",
    preco: 2750
  }
]

const totalDaMinhaCompra = minhaCompra.reduce((soma, curso) => soma + curso.preco, 0)
console.log(totalDaMinhaCompra)

 


//####################
// @Sort
// O método sort() nos permite reordenar um array segundo algum critério que definirmos. 
// O método recebe uma função de comparação por parâmetro que recebe dois elementos do array por vez. 
// A função deve retornar um valor numérico (1, -1, 0), que indica qual elemento se posiciona antes ou depois.
// // ⚠ CUIDADO ⚠
// // Esse método é destrutivo, ou seja, modifica o array sobre o qual é chamado. 
// Para ordenar números, basta subtrair um do outro, e a ordem indicará se será ordenado de forma crescente (ascendente) ou decrescente (descendente):

const numerosSort = [40, 1, 5, 2200]
var crescente = numerosSort.sort((a, b) => a - b)
console.log(crescente)
var decrescente = numerosSort.sort((a, b) => b - a)
console.log(decrescente)
// Para ordenar um array por string, devemos definir uma função comparadora que retorne um valor numérico de referência, conforme a ordem que quisermos, crescente ou decrescente:

const items = [
  {
    nome: 'Pikachu', preco: 21
  },
  {
    nome: 'Charmander', preco: 37
  },
  {
    nome: 'Pidgey', preco: 42
  },
  {
    nome: 'Squirtle', preco: 52
  }
]

items.sort((a,b) => {
  if (a.nome > b.nome) {
    return 1
  }
  
  if (a.nome < b.nome) {
    return -1
  }

  return 0
})

console.log(items)


const produtos = [
  {
    id: 1,
    nome: "Xis Gaucho",
    preco: 21
  },
  {
    id: 2,
    nome: "Fruki",
    preco: 5
  },
  {
    id: 3,
    nome: "Maionese",
    preco: 7
  },
  {
    id: 4,
    nome: "Mostarda",
    preco: 7
  },
]

const busca = produtos.find(produto => produto.id === 3)
console.log(busca)
const existe = produtos.some(produto => produto.nome === "Polar")
console.log(existe)
const baratos = produtos.filter(produto => produto.preco < 7)
console.log(baratos)
const listaProdutos = produtos.map((produto) => produto.nome)
console.log(listaProdutos)



