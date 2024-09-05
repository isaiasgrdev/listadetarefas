async function apagar(titulo) {
  const confirmacao = window.confirm(`Você tem certeza que deseja apagar a tarefa: ${titulo}?`)
  console.log(confirmacao)
  if (confirmacao == true) {
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

    return window.alert(res.mensagem)
  }
}