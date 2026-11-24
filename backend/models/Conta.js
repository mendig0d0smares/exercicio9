const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Conta = db.define('Conta',{
    codConta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numConta: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoConta: {
        type: DataTypes.ENUM('CORRENTE','POUPANCA'),
        allowNull: false
    },
    saldo: {
        type: DataTypes.STRING(40),
        allowNull: false
    }    
},{
    tableName: 'contas',
    timestamps: false
})
module.exports = Conta