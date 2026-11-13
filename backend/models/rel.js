const Funcionario = require('./Funcionario')
const Obra = require('./Obra')
const Material = require('./Material')
const Movimento = require('./Movimento')

// Material (1) -> Obra (N)
Material.hasMany(Obra, {
    foreignKey: 'idMaterial',
    as: 'obrasMaterial',
    onDelete: 'CASCADE'
})
Obra.belongsTo(Material, {
    foreignKey: 'idMaterial',
    as: 'materialObra'
})

// Obra (1) -> Movimento (N)
Obra.hasMany(Movimento, {
    foreignKey: 'idObra',
    as: 'movimentosObra',
    onDelete: 'CASCADE'
})
Movimento.belongsTo(Obra, {
    foreignKey: 'idObra',
    as: 'obraMovimento'
})

module.exports = { Funcionario, Obra, Material, Movimento }