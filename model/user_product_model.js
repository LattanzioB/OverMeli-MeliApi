const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProductSchema = new Schema({
    user: {
        type: String,
        required: true  // `user` is required
    },
    productId: {
        type: String,
        required: true  // `productId` is required
    },
    productName: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: false
    },
    comment: {
        type: String,
        required: false
    }
});

// Create a compound index for `productId` and `user`
userProductSchema.index({ productId: 1, user: 1 }, { unique: true });

const UserProductModel = mongoose.model('UserProduct', userProductSchema);

module.exports = { UserProductModel };