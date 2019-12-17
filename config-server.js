//Reading configuration from .env file, and expose object.
const env = require("dotenv");
env.config();


module.exports = {
    PORT: process.env.PORT,
    SERVER: 'localhost'
}
