import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class EventGuest extends Model {}

EventGuest.init(
  {
    userid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    eventid: {
      type: DataTypes.STRING,
      primaryKey: true,
      references: {
        model: "events",
        key: "eventID",
      },
    },
  },
  {
    sequelize,
    tableName: "eventguest",
  }
);

export default EventGuest;
