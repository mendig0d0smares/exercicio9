const Conta = require('../models/Conta')

const cadastrar = async(req,res)=>{
    valores = req.body
    console.log(valores)

    if(!valores.numConta||!valores.tipoConta||!valores.saldo){
        return res.status(400).json({message: 'todos os campos sao obrigatorios'})
    }
    try {
        await Conta.create(valores)
        res.status(200).json({message: 'cadastrado'})
    } catch (error) {
        console.error('erro',err)
        res.status(500).json({message: 'erro'})
    }
}

const consultar = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    try {
        const dados = await Conta.findByPk(id)
        console.log(dados)
        res.status(200).json(dados)
    } catch (error) {
        res.status(404).json({message:'nao encontrado'})
    }
}
module.exports = { cadastrar, consultar}