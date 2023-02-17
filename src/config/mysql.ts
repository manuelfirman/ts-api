import { Sequelize } from "sequelize";

const database = String(process.env.MYSQL_DATABASE);
const username = String(process.env.MYSQL_USERNAME);
const password = String(process.env.MYSQL_PASSWORD);
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect: "mysql"
  }
);

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("MySQL connected succesfull");
  } catch (e) {
    console.log(`Error MySQL:`, e);
  }
}

export { sequelize, dbConnect };