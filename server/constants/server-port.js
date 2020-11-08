const dotenv = require("dotenv");
const path = require('path');

const dirPath = path.join(__dirname, '../../.env');

dotenv.config({path: dirPath});

module.exports.SERVER_PORT = process.env.SERVER_PORT || 8082;
