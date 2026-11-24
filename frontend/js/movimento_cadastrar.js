let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const idUsuario = document.getElementById('idUsuario').value
    const idConta = document.getElementById('idConta').value
    const tipo = document.getElementById('tipo').value
    const valor = document.getElementById('valor').value
    const data = document.getElementById('data').value

    const movimento = {
        idUsuario: parseInt(idUsuario),
        idConta: parseInt(idConta),
        tipo: tipo,
        valor: parseFloat(valor),
        data: data
    }

    fetch('http://localhost:3000/movimento', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movimento)
    })
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''
        resposta.innerHTML += `<p>${dados.message}</p>`
        if (dados.saldoAtual !== undefined) {
            resposta.innerHTML += `<p>Novo saldo da conta: R$ ${Number(dados.saldoAtual).toFixed(2)}</p>`
            document.querySelector('form').reset()
        }
    })
    .catch((err) => {
        console.error('Erro ao registrar transação', err)
        resposta.innerHTML = '<p>Erro ao tentar registrar a transação financeira.</p>'
    })
})