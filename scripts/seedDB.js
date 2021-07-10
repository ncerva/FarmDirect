const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/farm-direct"
);

const farmerData = require("./farmerData.json");
const farmData = require("./farmData.json");
//const productData = require("./productData.json");

db.Farmer.deleteMany({})
db.User.remove({})
db.Farm.remove({})

farmerData.forEach((Farmer, index) => {
    db.Farmer.create(Farmer)
    .catch(err => {
        console.error(err);
    })
    .then(farmerEntry => {
        console.log(farmerEntry);
        let Farm = farmData[index]
        Farm.owner = farmerEntry._id
        db.Farm.create(Farm)
        .catch(err => {
            console.error(err);
        })
        .then(farmEntry => {
            db.Farmer.updateOne({_id: farmerEntry._id}, {farms: [farmEntry._id]})
            .then(data => console.log(data))
            console.log(farmEntry); 
        })
    })
}) 

