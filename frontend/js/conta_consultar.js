let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()

    const codConta = document.getElementById('codConta').value

    fetch(`http://localhost:3000/conta/${codConta}`)
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''

        if (!dados || dados.message) {
            resposta.innerHTML = `<p>${dados?.message || 'Conta não encontrada!'}</p>`
            return
        }

        let dadosArr = Array.isArray(dados) ? dados : [dados]

        resposta.innerHTML += `
            <table>
                ${criarThead()}
                ${criarTbody(dadosArr)}
            </table>
        `
    })
    .catch((err) => {
        console.error('Erro ao consultar os dados', err)
        resposta.innerHTML = '<p>Erro ao consultar a conta.</p>'
    })
})

function criarTbody(dados) {
    let corpo = '<tbody>'
    dados.forEach(el => {
        corpo += `<tr>`
        corpo += `<td>${el.id || el.codConta}</td>`
        corpo += `<td>${el.numConta}</td>`
        corpo += `<td>${el.tipoConta}</td>`
        corpo += `<td>R$ ${Number(el.saldo).toFixed(2)}</td>`
        corpo += `</tr>`
    })
    corpo += `</tbody>`
    return corpo
}

function criarThead() {
    return `
        <thead>
            <tr>
                <th>Código</th>
                <th>Número da Conta</th>
                <th>Tipo de Conta</th>
                <th>Saldo</th>
            </tr>
        </thead>
    `
}