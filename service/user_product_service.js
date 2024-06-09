const  {UserProductModel} = require("../model/user_product_model");


class UserProductService{

    async saveUserProduct(_user, _product, _productName, _rate, _comment){
        try{
            const query = UserProductModel.where({ user: _user, productId: _product});
            const exist = await query.findOne();
            if(exist) {
                throw new Error('Product already rated');
            }
            const userCreated = await UserProductModel.create({
                user: _user, productId: _product, productName: _productName, rate: _rate, comment: _comment 
            })
            return userCreated
    
        } catch (error){
            console.log(error)
            throw error
            //return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = {
    UserProductService
}

