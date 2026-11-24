const Movimento = require('../models/Movimento')
const Usuario = require('../models/Usuario')
const Conta = require('../models/Conta')

const cadastrar = async (req, res) => {
    const valores = req.body
    console.log(valores)

    if (!valores.idUsuario || !valores.idConta || !valores.tipo || !valores.valor || !valores.data) {
        return res.status(400).json({ message: 'todos os campos sao obrigatorios' })
    }

    try {
        const usuario = await Usuario.findByPk(valores.idUsuario)
        if (!usuario) {
            return res.status(404).json({ message: 'usuario nao encontrado' })
        }

        const conta = await Conta.findByPk(valores.idConta)
        if (!conta) {
            return res.status(404).json({ message: 'conta nao encontrada' })
        }

        await Movimento.create(valores)
        res.status(200).json({ message: 'cadastrado' })
    } catch (error) {
        console.error('erro', error)
        res.status(500).json({ message: 'erro' })
    }
}

const consultar = async (req, res) => {
    const id = req.params.id
    console.log(id)

    try {
        const dados = await Movimento.findByPk(id)
        console.log(dados)

        if (!dados) {
            return res.status(404).json({ message: 'nao encontrado' })
        }

        res.status(200).json(dados)
    } catch (error) {
        console.error('erro', error)
        res.status(500).json({ message: 'erro' })
    }
}

module.exports = { cadastrar, consultar }