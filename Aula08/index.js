// let xicara = {
//     cor: 'branca',
//     forma: 'redonda',
//     peso: 5,
//     capacidade: 10
// }


// function xicara(cor, forma, peso = 10, capacidade) {
//    this.cor = cor
//    this.forma = forma
//    this.peso = peso
//    this.capacidade = capacidade
// }

// const xicara1 = new xicara("Branca", "Redonda", 40)
// const xicara2 = new xicara("Preta", "Quadrada", 20, 150)

// console.log(xicara1)
// console.log(xicara2)


// function Pessoa(nome, idade, rua) {
//     this.nome = nome
//     this.idade = idade
//     this.rua = rua
//     this.falar = function () {
//         console.log("Ola, sou " + this.nome)
//         console.log("Ola, sou " + nome)
//     }
// }

// const pessoa1 = new Pessoa("Christian", 26, "Rua dos bobo numero 0")



// const pessoa2 = new Pessoa("Maria", 53, "Rua dos bobo numero 1")

// pessoa1.falar()
// pessoa2.falar()


// let texto = "Ola pessoal"

// console.log(texto.length)
// console.log(texto.toLocaleUpperCase())
// console.log(texto.toLocaleLowerCase())



// console.log('################################')

// const fruta = {
//     nome: "Maçã",
//     cor: "Vermelha",
//     peso: 150,
//     tipo: 'Fruta'
// }

// fruta.cor = "Verde"
// fruta["peso"] = 200

// console.log(fruta.cor)
// console.log(fruta["peso"])


// console.log(minhaFruta)
// console.log(minhaFruta.nome.length)
// if (minhaFruta.nome.length === 6) {
//     console.log("Minha fruta tem 6")
// }
// console.log(minhaFruta.cor.toUpperCase())
// console.log(minhaFruta.tipo.toLowerCase())

// const pessoa = {
//     nome: "Christian",
//     idade: 26,
//     senhaDoBanco: "43534335343"
// }

// for (const propriedade in pessoa) {
//     console.log(pessoa[propriedade])
// }

// function Fruta(nome, cor, peso, tipo = "Fruta") {
//     this.nome = nome
//     this.cor = cor
//     this.peso = peso
//     this.tipo = tipo
// }

// const minhaFruta =  new Fruta("Banana", "Amarela", 140)

// for (const propriedade in minhaFruta) {
//     console.log(propriedade + " = " + minhaFruta[propriedade])
// }


class Produto {
    constructor(nome, preco) {
        this.nome = nome.toUpperCase()
        this.preco = preco
        this.vendido = false
    }

    somarICMS() {
        this.preco = this.preco * 1.21
    }

    vender() {
        this.vendido = true
    }
}

const produto1 = new Produto("Arroz", 5)
const produto2 = new Produto("Cerveja Polar", 4.55)

produto1.somarICMS()
produto2.somarICMS()
produto1.vender()
console.log(produto1)
console.log(produto2)

