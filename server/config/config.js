require("dotenv").config()

module.exports = {
  development: {
    username: "root",
    password: "animalchat",
    database: "animalchat",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "1234",
    database: "animalchat",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "1234",
    database: "animalchat",
    host: "127.0.0.1",
    dialect: "mysql",
  },
}
