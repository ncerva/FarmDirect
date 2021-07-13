const { default: axios } = require("axios")
require('dotenv').config({path: '../.env'});

module.exports = {
  findInRadius: function(req, res) {
    console.log(process.env.ZIP_KEY)
    const { zipcode, radius } = req.params
    axios.get(`https://www.zipcodeapi.com/rest/${process.env.ZIP_KEY}/radius.json/${zipcode}/${radius}/mile`)
    .then(data => {
      
      res.json(data.data.zip_codes)
    })
    .catch(err => res.json(err).status(422))
  }
}