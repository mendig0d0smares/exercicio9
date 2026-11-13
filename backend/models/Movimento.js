const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Movimento = db.define('movimento', {
    codMovimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA', 'SAIDA'),
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    idObra: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'obras',
            key: 'codObra'
        }
    }
}, {
    timestamps: false,
    tableName: 'movimentos'
})

module.exports = Movimento