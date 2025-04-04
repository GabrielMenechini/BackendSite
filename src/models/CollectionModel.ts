import { DataTypes, Model } from "sequelize"
import sequelize from "../config/database"
import { Col } from "sequelize/types/utils"
import StudioModel from "./StudioModel"
import GameModel from "./GameModel"

class CollectionModel extends Model {
    id: number | undefined
    name: string | undefined

}

CollectionModel.init(
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
    },
    {
        sequelize,
        modelName: 'CollectionModel',
        tableName: 'collections'
    }
)

CollectionModel.belongsToMany(GameModel, {
    through: 'collection_games',
    foreignKey: 'collectionId',
    as: 'games'
})
GameModel.belongsToMany(CollectionModel, {
    through: 'collection_games',
    foreignKey: 'gameId',
    as: 'collections'
    }
)

export default CollectionModel;