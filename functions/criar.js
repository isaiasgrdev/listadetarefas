const criar = document.getElementById('criar_tarefa')

criar.addEventListener('click', async () => {

  const titulo = window.prompt('Digite o titulo da sua tarefa: ')

  if (titulo != "") {
    // Fazendo uma chamada para a api responsável por listar as minhas tarefas
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

    return window.alert(res.mensagem)
  }

})