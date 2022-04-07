import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

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

export default Category 