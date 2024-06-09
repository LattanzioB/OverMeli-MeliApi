const {UserProductService} = require('../service/user_product_service')

class UserProductController{
    
    constructor(){
        this._userProductService = new UserProductService();
    }

    async saveUserProduct(req, res) {
        try {
            const { user, productId, productName, rate, comment } = req.body;
            const userCreated = await this._userProductService.saveUserProduct(user, productId, productName, rate, comment);
            return res.status(201).json(userCreated);
        } catch (error) {
            console.error('Error saving user product:', error);
            if (error.message === 'Product already rated') {
                return res.status(400).json({ error: error.message });
            }
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}


module.exports = {UserProductController}