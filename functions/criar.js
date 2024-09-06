//Seletores do index.html
const criar_tarefa = document.getElementById('criar_tarefa')
const alert = document.querySelector('#alert #h2Alert')
let poup_up = document.getElementById('poup-up')


//função para exibir o poup-up
criar_tarefa.addEventListener('click', () => {
  let html_poup_up = ''
  html_poup_up += `
        <input type="text" placeholder="Digite o titulo da tarefa" id="titulo">        
        <div>
          <button class="confirmar" onclick='criar()'>Confirmar</button>
          <button class="cancelar">Cancelar</button>
        </div>`

  poup_up.innerHTML = html_poup_up


  //criando o evento do botão de cancelar
  const cancelar = poup_up.querySelector('.cancelar')
  cancelar.addEventListener('click', () => {
    poup_up.innerHTML = ''
  })
})


async function criar() {
  //pegando os seletores do poup up
  const titulo = poup_up.querySelector('input').value


  if (titulo != "") {
    // Fazendo uma chamada para a api responsável para criar as minhas tarefas
    const api = await fetch("https://apifalsa.vercel.app/api/routes/criar", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        titulo: titulo
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