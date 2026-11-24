const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('Movimento',{
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario:{
        type: DataTypes.INTEGER,
        references:{
            key: 'codUsuario',
            model: 'usuarios'
        },
        allowNull: false
    },
    idConta:{
        type: DataTypes.INTEGER,
        references:{
            key: 'codConta',
            model: 'contas'
        },
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('DEPOSITO','SAQUE'),
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }    
},{
    tableName: 'movimentos',
    timestamps: false
})
module.exports = Movimento