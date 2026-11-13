const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Funcionario = db.define('funcionario',{
    codFuncionario:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type:DataTypes.STRING(200),
        allowNull: false
    },
    senha:{
        type:DataTypes.STRING(100),
        allowNull: false
    }
},{
    timestamps: false,
    tablename: 'funcionarios'
})

module.exports = Funcionario