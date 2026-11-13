const {Funcionario, Material, Obra, Movimento} = require('./models/rel')
const conn = require('./db/conn')

async function SyncDataBase() {
    try{
    await conn.sync({force: true})
    console.log('Fazendo conexão')
    }catch(err){
    console.error('Erro', err)
    }finally{
        await conn.close()
        console.log('Fechando a conexão')
    }
}

SyncDataBase()