import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

const Expense = db.define("expense", {
    expenseName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expenseAmount: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    expenseMax: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
})

export default Expense