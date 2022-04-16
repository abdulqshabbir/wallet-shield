import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'
import Expense from './Expense.js'

/*
    Note to self:
    do NOT try setting the foreign key yourself on the model
    let sequelize do this or it will throw a cryptic error message
*/

export const Transaction = db.define("transaction", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    isOutflow: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    repeat: {
        type: Sequelize.STRING,
        allowNull: false
    },
    memo: {
        type: Sequelize.STRING,
        allowNull: true
    }
})

Transaction.belongsTo(Expense)