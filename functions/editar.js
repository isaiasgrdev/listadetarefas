//função que aciona o poup-up e captura o novo titulo da tarefa
function novoTitulo(titulo) {
  let html_poup_up = ''
  html_poup_up += `
        <input type="text" placeholder="Digite o novo titulo da tarefa" id="novoTitulo">        
        <div>
          <button class="confirmar" onclick='editar("${titulo}")'>Editar</button>
          <button class="cancelar">Cancelar</button>
        </div>`

  poup_up.innerHTML = html_poup_up


}

async function editar(titulo) {
  //seletor do novo titulo informado no input
  const novo_titulo = document.getElementById('novoTitulo').value


  if (novo_titulo && novo_titulo != "") {
    // Fazendo uma chamada para a api responsável por listar as minhas tarefas
    const api = await fetch("https://apifalsa.vercel.app/api/routes/atualizar", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        titulo: titulo,
        novo_titulo: novo_titulo
      })
    })

    // Convertendo o resultado da api para o tipo json
    const res = await api.json()
    console.log(res)

    //para o poup-up fechar assim que a requisição for concluida
    poup_up.innerHTML = ""

    return alert.innerText = res.mensagem
  }
}