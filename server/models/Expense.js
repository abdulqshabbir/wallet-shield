import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

const Expense = db.define("expense", {
    expenseName: {
        type: Sequelize.STRING
    }
})

export default Expense