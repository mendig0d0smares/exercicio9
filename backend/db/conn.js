const {Sequelize} = require('sequelize')

const db = new Sequelize('db_prova','root','senai',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})


module.exports = db