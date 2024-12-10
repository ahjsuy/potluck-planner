import "dotenv/config";
import { Sequelize } from "sequelize";

const database = process.env.DB || "";
const databaseUser = process.env.DB_USER || "";
const databasePassword = process.env.DB_PASS || "";

if (!database || !databaseUser || !databasePassword) {
  throw new Error("Missing required environment variables");
}

const sequelize = new Sequelize(database, databaseUser, databasePassword, {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelize;
