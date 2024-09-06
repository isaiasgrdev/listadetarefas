//função de acionar poup-up ao clicar em "apagar"
function confirmacao(titulo) {
  let poup_up = document.getElementById('poup-up')

  let html_poup_up = ''
  html_poup_up += `
        <h2>Você tem certeza que deseja apagar a tarefa "${titulo}"?</h2>
        <div>
          <button class="confirmar" onclick='apagar("${titulo}")'>Apagar</button>
          <button class="cancelar" onclick='cancelar("${titulo}")'>Cancelar</button>
        </div>`

  poup_up.innerHTML = html_poup_up

  //funçaõ para botão de cancelar fechar o poup-up
  const cancelar = poup_up.querySelector('.cancelar')
  cancelar.addEventListener('click', () => {
    poup_up.innerHTML = ''
  })
}


async function apagar(titulo) {
  const alert = document.querySelector('#alert #h2Alert')

  // Fazendo uma chamada para a api responsável por listar as minhas tarefas
  const api = await fetch("https://apifalsa.vercel.app/api/routes/apagar", {
    method: "DELETE",
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