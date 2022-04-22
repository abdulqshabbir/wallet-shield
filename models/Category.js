import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'
import Expense from './Expense.js'

const Category = db.define("category", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.hasMany(Expense, { onDelete: "cascade"})

export default Category 