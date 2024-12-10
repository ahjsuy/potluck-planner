import "dotenv/config";
import { Sequelize } from "sequelize";

// const sequelize = new Sequelize(process.env.DB_SERVER_URL);

const sequelize = new Sequelize(
  "Potluck Planner",
  "postgres",
  "MomI'mScared!101",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

try {
  await sequelize.authenticate();
  console.log("successful connection");
} catch (error) {
  console.log("unable to connect to DB");
}
