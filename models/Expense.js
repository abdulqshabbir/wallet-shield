import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'
import Category from './Category.js'

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

// Set up one-to-many relationship between expense and category
Expense.belongsTo(Category)

export default Expense