let produtos = document.getElementsByClassName("produto")
let resultado = []
for (const produto of produtos) {
  resultado.push(produto.innerText)
}

let paragrafo = document.createElement("p")
paragrafo.innerHTML = "<span>Olá mundo novamente </span>"
document.body.append(paragrafo)
paragrafo.remove()
document.getElementById("nome").value = "Christian"
console.log(document.getElementById("nome").value)
console.log(document.getElementById("idade").value)

let pai = document.getElementById("pessoas")

let pessoas = ["HOMER", "MERGE", "BART", "LISA", "MEGGIE"]

for (const pessoa of pessoas) {
  let li = document.createElement("li")
  li.innerHTML = pessoa
  pai.append(li)
}

let lista = document.querySelector('ul')
lista.remove()

resultado.sort()
let novaLista = document.createElement('ol')
resultado.forEach(function(produto) {
  let itemLista = document.createElement('li')
  itemLista.textContent = produto
  novaLista.appendChild(itemLista)
})

document.body.appendChild(novaLista)

// containerDeProduto.innerHTML = `<h3>${produo.nome} <h3> 
//                                 <p> ${produto.preco}`


let botao1 = document.getElementById("botao1")
//Primeira opçao
// botao1.addEventListener("click", acaoClique)
// function acaoClique() {
//   alert("Resposta do clique no botao 1")
// }

//Segunda opçao
// botao1.onclick = () => {
//   alert("Resposta da segunda op clique no botao 1")
// }

function funcaoClick() {
  alert("Resposta da terceira op clique no botao 1")
}
