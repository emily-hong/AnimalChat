require("dotenv").config();
const env = process.env;

  const development = {
    username: env.DB_ID,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host:"127.0.0.1",
    dialect: "mysql"
  },
  const test = {
    username: env.DB_ID,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host:"127.0.0.1",
    dialect: "mysql"
  },
  const production = {
    username: env.DB_ID,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    host:"127.0.0.1",
    dialect: "mysql"
  }


module.exports = { development, production, test };