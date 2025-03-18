import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class Dish extends Model {}

Dish.init(
  {
    dishid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    eventid: {
      type: DataTypes.STRING,
      references: {
        model: "events",
        key: "eventID",
      },
    },
    dishname: {
      type: DataTypes.STRING,
    },
    dishportion: {
      type: DataTypes.STRING,
    },
    dishguest: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "dishes",
  }
);

export default Dish;
