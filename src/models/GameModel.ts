import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import StudioModel from "./StudioModel"


class GameModel extends Model {
    id: number | undefined
    name: string | undefined
    studioId: number | undefined
}

GameModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        studioId: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },

    {
        sequelize,
        modelName: 'GameModel',
        tableName: 'games'
    }

)


GameModel.belongsTo(StudioModel, {
    foreignKey: 'studioId', // define qual é a fk
    as: 'studio' // define o nome da relação na busca
}) 
// mapeamento bidirecional
StudioModel.hasMany(GameModel, {
    foreignKey: 'studioId',
    as: 'studio'
})

export default GameModel;