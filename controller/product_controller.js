const axios = require("axios");
const {TokenService} = require("../service/token_service")
const {ProductService} = require("../service/product_service")


class ProductController{
    
    constructor(){
        this._tokenService = new TokenService();
        this._productService = new ProductService();
    }

    async search_product(req, res) {
        const query = req.query.query; // Assuming the query parameter is named 'query'
        const header = { 'Authorization': this._tokenService.get_token() };

        const url = 'https://api.mercadolibre.com/products/search';
        const params = {
            'status': 'active',
            'site_id': 'MLA',
            'q': query
        };

        try {
            const response = await axios.get(url, { params, headers: header });
            return res.status(200).json(this._productService.parseDataProduct(response.data)); // Send the data as JSON response
        } catch (error) {
            // Handle errors here
            console.error('Error in search product request:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}


module.exports = {ProductController};
