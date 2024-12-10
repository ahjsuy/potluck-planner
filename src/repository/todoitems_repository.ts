import { Sequelize, Model, DataTypes } from "sequelize";
// import config from "../config/config";

type configDB = {
  port: string;
  database: string;
  user: string;
  password: string;
  server: string;
  clientID: string;
  clientSecret: string;
  url: string;
  appBaseUrl: string;
};

class ToDoItem extends Model {}
const initSequelize = function (config: configDB) {
  var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.server,
    dialect: "postgres",
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  });

  ToDoItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iscomplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Item",
    }
  );
  return sequelize;
};

const repository = function (config: configDB) {
  var sequelize = initSequelize(config);

  const disconnect = function () {
    if (typeof sequelize !== undefined) {
      sequelize.close();
    }
  };

  const createToDoItem = function (title: string, description: string) {
    return ToDoItem.create({
      title: title,
      description: description,
      iscomplete: false,
    });
  };

  const markAsComplete = function (id: number) {
    return ToDoItem.update(
      {
        iscomplete: true,
      },
      {
        where: {
          id: id,
        },
      }
    );
  };

  const getAllIncompleteToDoItems = function () {
    return ToDoItem.findAll({
      where: {
        iscomplete: false,
      },
    });
  };

  return Object.create({
    disconnect,
    createToDoItem,
    markAsComplete,
    getAllIncompleteToDoItems,
  });
};

export default ToDoItem;
