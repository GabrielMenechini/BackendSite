import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"


class StudioModel extends Model {
    id: number | undefined
    name: string | undefined
    studioid: | undefined
}

StudioModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'StudioModel',
        tableName: 'studios'
    }

)

export default StudioModel;