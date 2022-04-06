import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'
import Expense from './Expense.js'

const Category = db.define("category", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

// set up a one:many relationship between a category and expense
// adds a categoryId to expense table
Category.hasMany(Expense)

export default Category 