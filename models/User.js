import { Sequelize} from 'sequelize'
import Category from "./Category.js"
import Expense from './Expense.js'
import db from '../config/db.config.js'

const User = db.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hashedPassword: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.hasMany(Category, { onDelete: "cascade" })
User.hasMany(Expense, { onDelete: "cascade" })

export default User 