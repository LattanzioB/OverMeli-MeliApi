const mongoose = require('mongoose');
const {Schema} = mongoose;

const userProductSchema = new Schema({
    user: {
        type: String,
        unique: true,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    rate:{
        type: String,
        required: false
    },
    comment:{
        type: String,
        required: false
    },
});

const UserProductModel = mongoose.model('UserProduct', userProductSchema);

module.exports = {UserProductModel};