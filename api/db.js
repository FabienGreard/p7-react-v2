var mysql = require("mysql");
require("dotenv").config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASS;

console.log(host, user, password);

config = {
  host,
  user,
  password,
  database: "express-api",
};
var connection = mysql.createConnection(config); //added the line
connection.connect(function (err) {
  if (err) {
    console.log("error connecting:" + err.stack);
  }
  console.log("connected successfully to DB.");
});

module.exports = {
  connection: mysql.createConnection(config),
};
