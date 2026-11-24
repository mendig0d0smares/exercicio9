const res = document.getElementById('res')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const email = document.getElementById('email').value
    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value

    const valores = {
        email: email,
        senha: senha,
        nome: nome,
    }

    fetch('http://localhost:3000/usuario',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        res.innerHTML = ''
        res.innerHTML += dados.message
    })
})
