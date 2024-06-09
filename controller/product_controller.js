const axios = require("axios");
const {TokenService} = require("../service/token_service")

class ProductController{
    
    constructor(){
        this._tokenService = new TokenService();
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
            console.log(response.data);
            return res.status(200).json(response.data); // Send the data as JSON response
        } catch (error) {
            // Handle errors here
            console.error('Error in search product request:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}


module.exports = {ProductController};
