const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  // const db = config.get("db");
  const db = process.env.BackendURL;
  // console.log("db: ", db);
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
