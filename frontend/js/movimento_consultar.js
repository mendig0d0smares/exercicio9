let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()

    const codMovimento = document.getElementById('codMovimento').value

    fetch(`http://localhost:3000/movimento/${codMovimento}`)
    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ''

        if (!dados || dados.message) {
            resposta.innerHTML = `<p>${dados?.message || 'Movimento não encontrado!'}</p>`
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
        resposta.innerHTML = '<p>Erro ao consultar o movimento.</p>'
    })
})

function criarTbody(dados) {
    let corpo = '<tbody>'
    dados.forEach(el => {
        corpo += `<tr>`
        corpo += `<td>${el.codMovimento || el.id}</td>`
        corpo += `<td>${el.idUsuario}</td>`
        corpo += `<td>${el.idConta}</td>`
        corpo += `<td>${el.tipo}</td>`
        corpo += `<td>R$ ${Number(el.valor).toFixed(2)}</td>`
        corpo += `<td>${el.data}</td>`
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
                <th>ID Usuário</th>
                <th>ID Conta</th>
                <th>Tipo</th>
                <th>Valor</th>
                <th>Data</th>
            </tr>
        </thead>
    `
}