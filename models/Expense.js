import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

const Expense = db.define("expense", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    max: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    remaining: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
    // categoryId added by sequelize
    // id added by sequelize
})

export default Expense