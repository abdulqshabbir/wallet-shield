import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

const Category = db.define("category", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Category 