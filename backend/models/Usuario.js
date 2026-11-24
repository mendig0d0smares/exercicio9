const{DataTypes} = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario',{
    codUsuario:{
        type: DataTypes.INTEGER(50),
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    email:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'usuarios',
    timestamps: false
})
module.exports = Usuario