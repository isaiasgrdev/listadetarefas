const atualizar = document.getElementById("atualizar");

async function listar() {
  const api = await fetch("https://apifalsa.vercel.app/api/routes/listar", {
    method: "GET",
    // mode: "no-cors",
    headers: {
      'Content-Type': 'application/json',
      "titulo": "todos",
    },
    
  });

  const res = await api.json()
  console.log(res)
}

atualizar.addEventListener("click", listar)