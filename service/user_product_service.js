const { UserProductModel } = require("../model/user_product_model");

class UserProductService {
    
    async saveUserProduct(_user, _product, _productName, _rate, _comment) {
        try {
            const query = UserProductModel.where({ user: _user, productId: _product });
            let userProduct = await query.findOne();
            if (userProduct) {
                userProduct.rate = _rate;
                userProduct.comment = _comment;
                await userProduct.save();
            } else {
                userProduct = await UserProductModel.create({
                    user: _user,
                    productId: _product,
                    productName: _productName,
                    rate: _rate,
                    comment: _comment 
                });
            }
           
            return userProduct;
    
        } catch (error) {
            console.log(error);
            throw error;
            //return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getUserLikedProducts(_user){
        try {
            var query
            if (_user == "all"){
                query = await UserProductModel.find({}).exec();
            }else{
                query = await UserProductModel.find({ user: _user}).exec();
            }
            if (!query) {
                throw new Error('No products liked');
            }
            return query;
        } catch (error) {
            console.log(error);
            throw error;
            //return res.status(500).json({ error: 'Internal server error' });
        }
    }


    async getUsersLikedProductsAVG(){
        try {
            const query = await UserProductModel.find({}).exec();

            return this.averageRateByProduct(query);
        } catch (error) {
            console.log(error);
            throw error;
            //return res.status(500).json({ error: 'Internal server error' });
        }
    }

    averageRateByProduct(data){
        const productRates = {};

        data.forEach(review => {
            const productId = review.productId;
            const productName = review.productName;
            const rate = parseInt(review.rate, 10);

            if (!productRates[productId]) {
                productRates[productId] = { productId, productName, totalRate: 0, count: 0 };
            }

            productRates[productId].totalRate += rate;
            productRates[productId].count += 1;
        });
        console.log(productRates)
        const result = Object.values(productRates).map(product => ({
            productId: product.productId,
            productName: product.productName,
            rate: (product.totalRate / product.count).toFixed(2)
        }));

        return result;
    }
}

module.exports = {
    UserProductService
};
