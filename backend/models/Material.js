const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Material = db.define('material', {
    codMaterial: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    categoria: {
        type: DataTypes.ENUM('ESTRUTURAL', 'ELETRICO', 'HIDRAULICO', 'ACABAMENTO'),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'materiais'
})

module.exports = Material