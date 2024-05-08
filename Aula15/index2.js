let tarefas = []
let botaoEnviar = document.getElementById("enviar")
botaoEnviar.addEventListener("click", adicionarTarefa)

let entrada = document.getElementById("entrada")
function adicionarTarefa() {
  tarefas.push(entrada.value)
  entrada.value = ""
}

let botaoVisualizar = document.getElementById("visualizar")
botaoVisualizar.addEventListener("click", visualizarTarefa)

function visualizarTarefa(){
  var lista = document.getElementById("lista")
  lista.innerText = ""

  tarefas.forEach(tarefa => {
    var itemTarefa = document.createElement("li")
    itemTarefa.innerText = tarefa
    lista.append(itemTarefa)
  })
}

let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", limparTarefas)

function limparTarefas() {
  tarefas = []
  visualizarTarefa()
}

