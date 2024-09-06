// Capturando o seletor do botão de atualizar
const atualizar = document.getElementById("atualizar")

// Criando a função responsável por listar as tarefas
async function listar() {

  // Capturando os seletores do index.html
  const total = document.getElementById('total')
  const tarefas = document.getElementById('tarefas')
  const alert = document.querySelector('#alert #h2Alert')


  // Atualizando o texto do id total para carregando
  total.innerHTML = 'Carregando...'

  // Fazendo uma chamada para a api responsável por listar as minhas tarefas
  const api = await fetch("https://apifalsa.vercel.app/api/routes/listar", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      "titulo": "todos"
    }
  })

  // Convertendo o resultado da api para o tipo json
  const res = await api.json()

  // Verificando se deu algum erro na chamada da api
  if (res.ok == false) {

    // Retornando a mensagem do erro
    alert.style.display = 'flex'
    return alert.innerText(res.mensagem)

  }

  // Verificando se deu sucesso na hora de chamar a api para listar as tarefas
  if (res.ok == true) {

    // Atualizando o título de total com o total de tarefas cadastradas
    total.innerHTML = `Você possui ${res.tarefas.length} tarefas`

    // Criando uma variável com a ordem invertida das tarefas
    var lista_tarefas = res.tarefas.reverse()

    // Limpando o html da div tarefas
    tarefas.innerHTML = ""

    // Criando uma variavel para abrigar o html de tarefas
    var html_tarefas = ""

    // Fazendo um laço de repetição na lista de tarefas com a ordem invertida
    lista_tarefas.forEach((tarefa, contador) => {

      // Adicionando o html de tarefa dentro do html_tarefas com o título da tarefa
      html_tarefas += `
        <div class="tarefa">
          <h2>Tarefa ${contador + 1} - ${tarefa.titulo}</h2>
          <div class="icons">
            <img class="editar" src="image/editar.png" alt="" onclick="novoTitulo('${tarefa.titulo}')" />
            <img class="apagar" src="image/apagar.png" alt="" onclick="confirmacao('${tarefa.titulo}')"/>
          </div>
        </div>
      `
    })

    // Alterando o html de tarefas com o html_tarefas
    tarefas.innerHTML = html_tarefas
  }
  alert.innerText = ''
}

// Capturando o evento de click do botão de atualizar e disparando a função listar
atualizar.addEventListener("click", listar)