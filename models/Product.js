const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  /*Id automatically added to all mongoose schema's under '_id' with type objectId, returns 24 char hexidecimal string */
  title: {
    type: String,
    required: true,
  },
  packsize: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  farmId: {
    type: Schema.Types.ObjectId,
    ref: 'Farm'
  },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;