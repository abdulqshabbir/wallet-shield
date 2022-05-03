import { Sequelize} from 'sequelize'
import db from '../config/db.config.js'

const RefreshToken = db.define("refreshToken", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default RefreshToken 