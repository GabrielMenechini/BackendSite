import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    'BackendSite',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

export default sequelize