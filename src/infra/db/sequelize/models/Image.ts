import { DataTypes } from "sequelize";
import { sequelize } from "..";
import { ProductModel } from "./Product";

const ImageModel = sequelize.define("images", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

ImageModel.belongsTo(ProductModel, {foreignKey: "id_image"})

export {ImageModel};