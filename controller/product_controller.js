const axios = require("axios");
const {TokenService} = require("../service/token_service")
const {ProductService} = require("../service/product_service")


class ProductController{
    
    constructor(){
        this._tokenService = new TokenService();
        this._productService = new ProductService();
        this._tokenService.update_token();
    }

    async search_product(req, res) {
        const query = req.query.query; 
        const header = { 'Authorization': this._tokenService.get_token() };
    
        const url = 'https://api.mercadolibre.com/sites/MLA/search';

        const params = {
          'status': 'active',
          'site_id': 'MLA',
          'q': query,
          'limit': 12
        };
    
        try {
          const response = await axios.get(url, { params, headers: header });
          const parsedResponse = this._productService.parseDataProduct(response.data);
          const productsData = await this.searchPictures(parsedResponse)
          return res.status(200).json(productsData); // Send the enhanced product data as JSON response
        } catch (error) {
          // Handle errors here
          console.error('Error in search product request:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
      }

      async searchPictures(productDict){
        const products = productDict
        var ids = ""
          for(var key in products){
            ids = ids + products[key].productId + ","
          }
          ids = ids.slice(0, -1)

          const params = {
            'ids': ids,
          };
            try {
              const header = { 'Authorization': this._tokenService.get_token() };
              const productDetailsUrl = `https://api.mercadolibre.com/items/`;
              const productDetailsResponse = await axios.get(productDetailsUrl, {params, headers:header});

              productDetailsResponse.data.forEach(query => {
                if (query.code == 200){
                    products[query.body.id]["pictures"] = query.body.pictures
                }
              });
              return products
            } catch (error) {
              console.error(`Server Error `, error);
            }
      }

}



module.exports = {ProductController};
