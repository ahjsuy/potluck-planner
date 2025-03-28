import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class Event extends Model {}

Event.init(
  {
    eventid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    eventname: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: "events",
  }
);

export default Event;
