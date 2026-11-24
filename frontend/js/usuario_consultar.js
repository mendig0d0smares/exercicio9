let resposta = document.getElementById('resposta')

let consultar = document.getElementById('consultar')

consultar.addEventListener('click', (e)=>{
    e.preventDefault()

    const id = Number(document.getElementById('id').value)
    
    fetch(`http://localhost:3000/usuario/${id}`)
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)

        resposta.innerHTML = ''
        resposta.innerHTML = `
                <p>Código: ${dados.codUsuario}</p>
                <p>Nome: ${dados.nome}</p>
                <p>E-mail: ${dados.email}</p>
            `
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar os dados!')
    })
})