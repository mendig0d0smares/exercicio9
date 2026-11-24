const Usuario = require('../models/Usuario')

const cadastrar = async(req,res)=>{
    valores = req.body
    console.log(valores)

    if(!valores.nome||!valores.email||!valores.senha){
        return res.status(400).json({message: 'todos os campos sao obrigatorios'})
    }
    try {
        await Usuario.create(valores)
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
        const dados = await Usuario.findByPk(id)
        console.log(dados)
        res.status(200).json(dados)
    } catch (error) {
        res.status(404).json({message:'nao encontrado'})
    }
}
module.exports = { cadastrar, consultar}