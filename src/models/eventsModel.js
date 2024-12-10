import { DataTypes, Model } from "sequelize";
import sequelize from "../database.js";

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    owner: {
      type: DataTypes.INTEGER,
    },
    attendees: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
    place: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "event",
  }
);

export default Event;
