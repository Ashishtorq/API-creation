const mongoose = require('mongoose');
// connect to db here
const productSchema = mongoose.Schema({
    productName:{
        type:String
    },
    productId:{
        type:Number
    },
    productDescription:{
        type:String
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product ;