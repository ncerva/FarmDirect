const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/farm-direct"
);

const farmerData = require("./farmerData.json");
const farmData = require("./farmData.json");
const productData = require("./productData.json");

db.Farmer
    .remove({})
    .then(() => db.Farmer.collection.insertMany(farmerData))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Farm
    .remove({})
    .then(() => db.Farm.collection.insertMany(farmData))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
db.Product
    .remove({})
    .then(() => db.Product.collection.insertMany(productData))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });