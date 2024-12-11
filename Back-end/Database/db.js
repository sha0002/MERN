const mongoose = require('mongoose')

const MongoURI = "mongodb://localhost:27017/MERN"

const ConnectToMongo = async () => {
    try {
        await mongoose.connect(MongoURI)
        console.log("MondoDB hass been Connected Successfully...")
    } catch (error) {
        console.log(error, "Database is not Connect")
        process.exit(1)
    }
}

module.exports = ConnectToMongo;