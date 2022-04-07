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
})

// Set up one-to-one relationship between expense and category
// Adds a categoryId attribute to Expense table
Expense.belongsTo(Category)

export default Expense