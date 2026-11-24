let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const numConta = document.getElementById('numConta').value
    const tipoConta = document.getElementById('tipoConta').value
    const saldo = document.getElementById('saldo').value

    const conta = {
        numConta: parseInt(numConta),
        tipoConta: tipoConta,
        saldo: parseFloat(saldo)
    }

    fetch('http://localhost:3000/conta', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(conta)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>${dados.message}</p>`
        document.querySelector('form').reset()
    })
    .catch((err) => {
        console.error('Erro ao cadastrar a conta', err)
        resposta.innerHTML = '<p>Erro ao tentar cadastrar a conta.</p>'
    })
})