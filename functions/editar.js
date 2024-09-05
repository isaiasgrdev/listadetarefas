async function editar(titulo) {
  const novo_titulo = window.prompt('Qual é o novo titulo da sua tarefa?')

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

    return window.alert(res.mensagem)
  }
}