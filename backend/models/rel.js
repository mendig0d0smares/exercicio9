const Usuario = require('../models/Usuario')
const Conta = require('../models/Conta')
const Movimento = require('../models/Movimento')

Usuario.hasMany(Movimento,{
    foreignKey: 'idUsuario',
    as: 'movimentoUsuario',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Usuario,{
    foreignKey: 'idUsuario',
    as: 'usuarioMovimento',
    allowNull: false
})

Conta.hasMany(Movimento,{
    foreignKey: 'idConta',
    as: 'movimentoConta',
    onDelete: 'CASCADE'
})

Movimento.belongsTo(Conta,{
    foreignKey: 'idConta',
    as: 'contaMovimento',
    allowNull: false
})

module.exports = { Usuario, Conta, Movimento }