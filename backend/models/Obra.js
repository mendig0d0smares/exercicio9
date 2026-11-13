const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Obra = db.define('obra', {
    codObra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'materiais',
            key: 'codMaterial'
        }
    }
}, {
    timestamps: false,
    tableName: 'obras'
})

module.exports = Obra