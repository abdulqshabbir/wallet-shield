import { Sequelize } from 'sequelize'

const db = new Sequelize('abdulshabbir', 'abdulshabbir', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

export default db
