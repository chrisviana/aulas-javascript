// console.log(document)
// console.log(document.head)
// console.log(document.body)

let div = document.getElementById("app")
//console.log(div)
//let paragrafo1 = document.getElementById("paragrafo1")
//console.log(paragrafo1)

let paises = document.getElementsByClassName("paises")
// console.log(paises)
// console.log(paises[0])
// console.log(paises[1])
// console.log(paises[2])

let containers = document.getElementsByTagName("div")
// console.log(containers[1])
// console.log(containers[2])

//let container = document.querySelector("#container")
// console.log(container)

let paragrafo = document.querySelector(".paragrafo")
// console.log(paragrafo)

let paragrafo2 = document.querySelector("#container p") 
// console.log(paragrafo2)

let all = document.querySelectorAll(".paragrafo")
// console.log(all)

let radioChecked = document.getElementsByClassName("checkbox")
// console.log(radioChecked)

// for (const pais of paises) {
//   console.log(pais)
// }

//#Modificando nós
let paragrafo1 = document.getElementById("paragrafo1")
console.log(paragrafo1.innerText)
paragrafo1.innerText = "Olá Coder"

let container = document.querySelector("#container")
container.innerHTML = "<h2>Olá Mundo!</h2> <p>Texto qualquer para teste </p>"
container.className = "esconder-container"
console.log(container.innerHTML)