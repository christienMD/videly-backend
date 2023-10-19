const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');



module.exports = function() {
  // const db = config.get('db');
  console.log("All environment variables:", process.env);
  const db = process.env.MONGODB_URI;
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}