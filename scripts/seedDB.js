const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/farm-direct"
);

const farmerData = require("./farmerData.json");
const farmeData = require("./farmData.json");

