const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/appening";

const connnectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    });
};

module.exports = connnectToMongo;