import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class Allergies extends Model {}

Allergies.init(
  {
    eventid: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: "events",
        key: "eventID",
      },
    },
    allergy: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "allergy",
  }
);

export default Allergies;
