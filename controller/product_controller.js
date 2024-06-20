const axios = require("axios");
const {TokenService} = require("../service/token_service")
const {ProductService} = require("../service/product_service")


class ProductController{
    
    constructor(){
        this._tokenService = new TokenService();
        this._productService = new ProductService();
        //this._tokenService.update_token();
    }

    async search_product(req, res) {
        /*const query = req.query.query; // Assuming the query parameter is named 'query'
        const header = { 'Authorization': this._tokenService.get_token() };
    
        const url = 'https://api.mercadolibre.com/sites/MLA/search';// reemplazar por https://api.mercadolibre.com/sites/MLA/search?q=Motorola%20G6

        const params = {
          'status': 'active',
          'site_id': 'MLA',
          'q': query,
          'limit': 12
        };
    */
        try {
          //const response = await axios.get(url, { params, headers: header });
          //const parsedResponse = this._productService.parseDataProduct(response.data);
          //const productsData = await this.searchPictures(parsedResponse)
          //console.log(productsData)
          return res.status(200).json({
            "MLA1421210843": {
              "productId": "MLA1421210843",
              "productName": "Smart Tv Samsung 50 Un50cu7000gczb Led 4k",
              "condition": "new",
              "price": 825999,
              "pictures": [
                {
                  "id": "748098-MLU75806266862_042024",
                  "url": "http://http2.mlstatic.com/D_748098-MLU75806266862_042024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_748098-MLU75806266862_042024-O.jpg",
                  "size": "500x378",
                  "max_size": "1200x909",
                  "quality": ""
                },
                {
                  "id": "722684-MLU72859230576_112023",
                  "url": "http://http2.mlstatic.com/D_722684-MLU72859230576_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_722684-MLU72859230576_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "631311-MLU72859240176_112023",
                  "url": "http://http2.mlstatic.com/D_631311-MLU72859240176_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_631311-MLU72859240176_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "886626-MLU74977624481_032024",
                  "url": "http://http2.mlstatic.com/D_886626-MLU74977624481_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_886626-MLU74977624481_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "662849-MLU72859240138_112023",
                  "url": "http://http2.mlstatic.com/D_662849-MLU72859240138_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_662849-MLU72859240138_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "622217-MLU72859230556_112023",
                  "url": "http://http2.mlstatic.com/D_622217-MLU72859230556_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_622217-MLU72859230556_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "716427-MLU72859220612_112023",
                  "url": "http://http2.mlstatic.com/D_716427-MLU72859220612_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_716427-MLU72859220612_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "816103-MLU72859240188_112023",
                  "url": "http://http2.mlstatic.com/D_816103-MLU72859240188_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_816103-MLU72859240188_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "620218-MLA72721769071_112023",
                  "url": "http://http2.mlstatic.com/D_620218-MLA72721769071_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_620218-MLA72721769071_112023-O.jpg",
                  "size": "500x457",
                  "max_size": "1200x1097",
                  "quality": ""
                }
              ]
            },
            "MLA1781269140": {
              "productId": "MLA1781269140",
              "productName": "Smart Tv Samsung 2021 Un50au7000gczb Uhd 4k Tizen Led 50 Negro",
              "condition": "new",
              "price": 624999,
              "pictures": [
                {
                  "id": "770150-MLU74116121224_012024",
                  "url": "http://http2.mlstatic.com/D_770150-MLU74116121224_012024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_770150-MLU74116121224_012024-O.jpg",
                  "size": "500x360",
                  "max_size": "671x484",
                  "quality": ""
                },
                {
                  "id": "851605-MLU72336842989_102023",
                  "url": "http://http2.mlstatic.com/D_851605-MLU72336842989_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_851605-MLU72336842989_102023-O.jpg",
                  "size": "500x426",
                  "max_size": "598x510",
                  "quality": ""
                },
                {
                  "id": "912053-MLU69480557520_052023",
                  "url": "http://http2.mlstatic.com/D_912053-MLU69480557520_052023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_912053-MLU69480557520_052023-O.jpg",
                  "size": "500x500",
                  "max_size": "500x500",
                  "quality": ""
                },
                {
                  "id": "891217-MLU72336842999_102023",
                  "url": "http://http2.mlstatic.com/D_891217-MLU72336842999_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_891217-MLU72336842999_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "693759-MLU72337066507_102023",
                  "url": "http://http2.mlstatic.com/D_693759-MLU72337066507_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_693759-MLU72337066507_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "938842-MLU72272731432_102023",
                  "url": "http://http2.mlstatic.com/D_938842-MLU72272731432_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_938842-MLU72272731432_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "766389-MLU72272731458_102023",
                  "url": "http://http2.mlstatic.com/D_766389-MLU72272731458_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_766389-MLU72272731458_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "860032-MLU72272780412_102023",
                  "url": "http://http2.mlstatic.com/D_860032-MLU72272780412_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_860032-MLU72272780412_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                }
              ]
            },
            "MLA1592108396": {
              "productId": "MLA1592108396",
              "productName": "Smart Tv Samsung Gaming 50'' Neo Qled 4k Qn90c",
              "condition": "new",
              "price": 2249999,
              "pictures": [
                {
                  "id": "918286-MLU75809105032_042024",
                  "url": "http://http2.mlstatic.com/D_918286-MLU75809105032_042024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_918286-MLU75809105032_042024-O.jpg",
                  "size": "500x361",
                  "max_size": "1200x868",
                  "quality": ""
                },
                {
                  "id": "739165-MLU73312362086_122023",
                  "url": "http://http2.mlstatic.com/D_739165-MLU73312362086_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_739165-MLU73312362086_122023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "919570-MLU75556755233_042024",
                  "url": "http://http2.mlstatic.com/D_919570-MLU75556755233_042024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_919570-MLU75556755233_042024-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "717560-MLU73314195422_122023",
                  "url": "http://http2.mlstatic.com/D_717560-MLU73314195422_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_717560-MLU73314195422_122023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "907724-MLU73312818634_122023",
                  "url": "http://http2.mlstatic.com/D_907724-MLU73312818634_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_907724-MLU73312818634_122023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "608028-MLU73312788832_122023",
                  "url": "http://http2.mlstatic.com/D_608028-MLU73312788832_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_608028-MLU73312788832_122023-O.jpg",
                  "size": "455x500",
                  "max_size": "1093x1200",
                  "quality": ""
                },
                {
                  "id": "703633-MLU73312788838_122023",
                  "url": "http://http2.mlstatic.com/D_703633-MLU73312788838_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_703633-MLU73312788838_122023-O.jpg",
                  "size": "455x500",
                  "max_size": "1094x1200",
                  "quality": ""
                },
                {
                  "id": "635868-MLU73312362114_122023",
                  "url": "http://http2.mlstatic.com/D_635868-MLU73312362114_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_635868-MLU73312362114_122023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "800787-MLU73314195404_122023",
                  "url": "http://http2.mlstatic.com/D_800787-MLU73314195404_122023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_800787-MLU73314195404_122023-O.jpg",
                  "size": "472x500",
                  "max_size": "1135x1200",
                  "quality": ""
                }
              ]
            },
            "MLA1787917846": {
              "productId": "MLA1787917846",
              "productName": "Samsung 50 Neo Qled 4k Qn90b Tv Gaming",
              "condition": "new",
              "price": 2249999,
              "pictures": [
                {
                  "id": "962287-MLA52542555342_112022",
                  "url": "http://http2.mlstatic.com/D_962287-MLA52542555342_112022-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_962287-MLA52542555342_112022-O.jpg",
                  "size": "500x305",
                  "max_size": "1090x667",
                  "quality": ""
                },
                {
                  "id": "942892-MLU72756671806_112023",
                  "url": "http://http2.mlstatic.com/D_942892-MLU72756671806_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_942892-MLU72756671806_112023-O.jpg",
                  "size": "500x433",
                  "max_size": "995x862",
                  "quality": ""
                },
                {
                  "id": "839342-MLU71036961839_082023",
                  "url": "http://http2.mlstatic.com/D_839342-MLU71036961839_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_839342-MLU71036961839_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "920320-MLU71000133604_082023",
                  "url": "http://http2.mlstatic.com/D_920320-MLU71000133604_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_920320-MLU71000133604_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "774879-MLU71036961855_082023",
                  "url": "http://http2.mlstatic.com/D_774879-MLU71036961855_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_774879-MLU71036961855_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "744972-MLU71000133626_082023",
                  "url": "http://http2.mlstatic.com/D_744972-MLU71000133626_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_744972-MLU71000133626_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "841613-MLU71000133632_082023",
                  "url": "http://http2.mlstatic.com/D_841613-MLU71000133632_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_841613-MLU71000133632_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "879697-MLU71000133652_082023",
                  "url": "http://http2.mlstatic.com/D_879697-MLU71000133652_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_879697-MLU71000133652_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "949363-MLU71036961881_082023",
                  "url": "http://http2.mlstatic.com/D_949363-MLU71036961881_082023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_949363-MLU71036961881_082023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "922037-MLU72756710586_112023",
                  "url": "http://http2.mlstatic.com/D_922037-MLU72756710586_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_922037-MLU72756710586_112023-O.jpg",
                  "size": "500x425",
                  "max_size": "1004x855",
                  "quality": ""
                },
                {
                  "id": "855380-MLU72756710590_112023",
                  "url": "http://http2.mlstatic.com/D_855380-MLU72756710590_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_855380-MLU72756710590_112023-O.jpg",
                  "size": "500x323",
                  "max_size": "1048x678",
                  "quality": ""
                }
              ]
            },
            "MLA1711886540": {
              "productId": "MLA1711886540",
              "productName": "Smart Led Tv Samsung 50 Pulgadas 4k Uhd Un50cu7000gczb",
              "condition": "new",
              "price": 699999,
              "pictures": [
                {
                  "id": "767066-MLA75263328491_032024",
                  "url": "http://http2.mlstatic.com/D_767066-MLA75263328491_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_767066-MLA75263328491_032024-O.jpg",
                  "size": "500x377",
                  "max_size": "709x536",
                  "quality": ""
                },
                {
                  "id": "715288-MLA75263328495_032024",
                  "url": "http://http2.mlstatic.com/D_715288-MLA75263328495_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_715288-MLA75263328495_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "907430-MLA75263328485_032024",
                  "url": "http://http2.mlstatic.com/D_907430-MLA75263328485_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_907430-MLA75263328485_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "763589-MLA75263328489_032024",
                  "url": "http://http2.mlstatic.com/D_763589-MLA75263328489_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_763589-MLA75263328489_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "829582-MLA75263328487_032024",
                  "url": "http://http2.mlstatic.com/D_829582-MLA75263328487_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_829582-MLA75263328487_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "839968-MLA75263328497_032024",
                  "url": "http://http2.mlstatic.com/D_839968-MLA75263328497_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_839968-MLA75263328497_032024-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "698859-MLA75263328493_032024",
                  "url": "http://http2.mlstatic.com/D_698859-MLA75263328493_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_698859-MLA75263328493_032024-O.jpg",
                  "size": "476x500",
                  "max_size": "800x839",
                  "quality": ""
                }
              ]
            },
            "MLA1388345169": {
              "productId": "MLA1388345169",
              "productName": "Samsung 50  Neo Qled 4k Qn90c Tv Gaming",
              "condition": "new",
              "price": 2249999,
              "pictures": [
                {
                  "id": "998273-MLA71673656834_092023",
                  "url": "http://http2.mlstatic.com/D_998273-MLA71673656834_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_998273-MLA71673656834_092023-O.jpg",
                  "size": "500x317",
                  "max_size": "1200x763",
                  "quality": ""
                },
                {
                  "id": "916353-MLA71673439084_092023",
                  "url": "http://http2.mlstatic.com/D_916353-MLA71673439084_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_916353-MLA71673439084_092023-O.jpg",
                  "size": "500x484",
                  "max_size": "877x850",
                  "quality": ""
                },
                {
                  "id": "898972-MLA71673676742_092023",
                  "url": "http://http2.mlstatic.com/D_898972-MLA71673676742_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_898972-MLA71673676742_092023-O.jpg",
                  "size": "500x484",
                  "max_size": "877x850",
                  "quality": ""
                },
                {
                  "id": "691057-MLA71673804714_092023",
                  "url": "http://http2.mlstatic.com/D_691057-MLA71673804714_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_691057-MLA71673804714_092023-O.jpg",
                  "size": "293x500",
                  "max_size": "500x851",
                  "quality": ""
                },
                {
                  "id": "741225-MLA71673617202_092023",
                  "url": "http://http2.mlstatic.com/D_741225-MLA71673617202_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_741225-MLA71673617202_092023-O.jpg",
                  "size": "477x500",
                  "max_size": "760x795",
                  "quality": ""
                },
                {
                  "id": "640828-MLA71725055781_092023",
                  "url": "http://http2.mlstatic.com/D_640828-MLA71725055781_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_640828-MLA71725055781_092023-O.jpg",
                  "size": "500x387",
                  "max_size": "500x387",
                  "quality": ""
                },
                {
                  "id": "860407-MLA71724425695_092023",
                  "url": "http://http2.mlstatic.com/D_860407-MLA71724425695_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_860407-MLA71724425695_092023-O.jpg",
                  "size": "500x333",
                  "max_size": "900x600",
                  "quality": ""
                },
                {
                  "id": "957767-MLA71672963982_092023",
                  "url": "http://http2.mlstatic.com/D_957767-MLA71672963982_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_957767-MLA71672963982_092023-O.jpg",
                  "size": "396x500",
                  "max_size": "500x631",
                  "quality": ""
                },
                {
                  "id": "613536-MLA71673656836_092023",
                  "url": "http://http2.mlstatic.com/D_613536-MLA71673656836_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_613536-MLA71673656836_092023-O.jpg",
                  "size": "500x479",
                  "max_size": "1200x1151",
                  "quality": ""
                },
                {
                  "id": "790109-MLA71673656838_092023",
                  "url": "http://http2.mlstatic.com/D_790109-MLA71673656838_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_790109-MLA71673656838_092023-O.jpg",
                  "size": "492x500",
                  "max_size": "1183x1200",
                  "quality": ""
                }
              ]
            },
            "MLA1508190788": {
              "productId": "MLA1508190788",
              "productName": "Smart Tv Samsung Series 7 Un50tu7000gczb Led Tizen 4k 50  220v - 240v",
              "condition": "new",
              "price": 9999999,
              "pictures": [
                {
                  "id": "678217-MLU72772399466_112023",
                  "url": "http://http2.mlstatic.com/D_678217-MLU72772399466_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_678217-MLU72772399466_112023-O.jpg",
                  "size": "500x307",
                  "max_size": "1200x739",
                  "quality": ""
                },
                {
                  "id": "785736-MLU72572856698_112023",
                  "url": "http://http2.mlstatic.com/D_785736-MLU72572856698_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_785736-MLU72572856698_112023-O.jpg",
                  "size": "500x487",
                  "max_size": "1200x1171",
                  "quality": ""
                },
                {
                  "id": "871937-MLA44160072815_112020",
                  "url": "http://http2.mlstatic.com/D_871937-MLA44160072815_112020-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_871937-MLA44160072815_112020-O.jpg",
                  "size": "489x500",
                  "max_size": "1175x1200",
                  "quality": ""
                },
                {
                  "id": "710982-MLA74779503579_022024",
                  "url": "http://http2.mlstatic.com/D_710982-MLA74779503579_022024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_710982-MLA74779503579_022024-O.jpg",
                  "size": "174x500",
                  "max_size": "419x1200",
                  "quality": ""
                },
                {
                  "id": "809689-MLU75489045617_032024",
                  "url": "http://http2.mlstatic.com/D_809689-MLU75489045617_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_809689-MLU75489045617_032024-O.jpg",
                  "size": "500x104",
                  "max_size": "1200x250",
                  "quality": ""
                },
                {
                  "id": "967397-MLA44169757606_112020",
                  "url": "http://http2.mlstatic.com/D_967397-MLA44169757606_112020-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_967397-MLA44169757606_112020-O.jpg",
                  "size": "500x357",
                  "max_size": "1200x859",
                  "quality": ""
                },
                {
                  "id": "993134-MLU74820716890_032024",
                  "url": "http://http2.mlstatic.com/D_993134-MLU74820716890_032024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_993134-MLU74820716890_032024-O.jpg",
                  "size": "500x409",
                  "max_size": "1200x982",
                  "quality": ""
                },
                {
                  "id": "998447-MLU72772436174_112023",
                  "url": "http://http2.mlstatic.com/D_998447-MLU72772436174_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_998447-MLU72772436174_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "896491-MLU72772436204_112023",
                  "url": "http://http2.mlstatic.com/D_896491-MLU72772436204_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_896491-MLU72772436204_112023-O.jpg",
                  "size": "500x359",
                  "max_size": "1200x862",
                  "quality": ""
                },
                {
                  "id": "808062-MLU72847727717_112023",
                  "url": "http://http2.mlstatic.com/D_808062-MLU72847727717_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_808062-MLU72847727717_112023-O.jpg",
                  "size": "500x457",
                  "max_size": "1200x1097",
                  "quality": ""
                },
                {
                  "id": "820850-MLU72772436234_112023",
                  "url": "http://http2.mlstatic.com/D_820850-MLU72772436234_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_820850-MLU72772436234_112023-O.jpg",
                  "size": "500x451",
                  "max_size": "1200x1084",
                  "quality": ""
                }
              ]
            },
            "MLA1428855243": {
              "productId": "MLA1428855243",
              "productName": "Smart Tv Samsung Neo Qled 4k Qn50qn90bagxzd Qled Tizen 4k 50  100v/240v",
              "condition": "new",
              "price": 2249999,
              "pictures": [
                {
                  "id": "917686-MLA52124617386_102022",
                  "url": "http://http2.mlstatic.com/D_917686-MLA52124617386_102022-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_917686-MLA52124617386_102022-O.jpg",
                  "size": "500x324",
                  "max_size": "1056x685",
                  "quality": ""
                },
                {
                  "id": "825125-MLA52124542915_102022",
                  "url": "http://http2.mlstatic.com/D_825125-MLA52124542915_102022-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_825125-MLA52124542915_102022-O.jpg",
                  "size": "409x500",
                  "max_size": "612x748",
                  "quality": ""
                },
                {
                  "id": "722382-MLU72631201388_112023",
                  "url": "http://http2.mlstatic.com/D_722382-MLU72631201388_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_722382-MLU72631201388_112023-O.jpg",
                  "size": "499x500",
                  "max_size": "502x503",
                  "quality": ""
                }
              ]
            },
            "MLA1781204560": {
              "productId": "MLA1781204560",
              "productName": "Smart Tv Samsung Serie 7 Un50au7000 Uhd 4k Tizen 50''",
              "condition": "new",
              "price": 788249,
              "pictures": [
                {
                  "id": "770150-MLU74116121224_012024",
                  "url": "http://http2.mlstatic.com/D_770150-MLU74116121224_012024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_770150-MLU74116121224_012024-O.jpg",
                  "size": "500x360",
                  "max_size": "671x484",
                  "quality": ""
                },
                {
                  "id": "851605-MLU72336842989_102023",
                  "url": "http://http2.mlstatic.com/D_851605-MLU72336842989_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_851605-MLU72336842989_102023-O.jpg",
                  "size": "500x426",
                  "max_size": "598x510",
                  "quality": ""
                },
                {
                  "id": "912053-MLU69480557520_052023",
                  "url": "http://http2.mlstatic.com/D_912053-MLU69480557520_052023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_912053-MLU69480557520_052023-O.jpg",
                  "size": "500x500",
                  "max_size": "500x500",
                  "quality": ""
                },
                {
                  "id": "891217-MLU72336842999_102023",
                  "url": "http://http2.mlstatic.com/D_891217-MLU72336842999_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_891217-MLU72336842999_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "693759-MLU72337066507_102023",
                  "url": "http://http2.mlstatic.com/D_693759-MLU72337066507_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_693759-MLU72337066507_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "938842-MLU72272731432_102023",
                  "url": "http://http2.mlstatic.com/D_938842-MLU72272731432_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_938842-MLU72272731432_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "766389-MLU72272731458_102023",
                  "url": "http://http2.mlstatic.com/D_766389-MLU72272731458_102023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_766389-MLU72272731458_102023-O.jpg",
                  "size": "500x500",
                  "max_size": "800x800",
                  "quality": ""
                },
                {
                  "id": "789448-MLA76518692013_052024",
                  "url": "http://http2.mlstatic.com/D_789448-MLA76518692013_052024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_789448-MLA76518692013_052024-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                }
              ]
            },
            "MLA1512421732": {
              "productId": "MLA1512421732",
              "productName": "Samsung 50  Neo Qled 4k Gaming 144hz Qn50qn90cagczb ",
              "condition": "new",
              "price": 2217999,
              "pictures": [
                {
                  "id": "705193-MLA71826384421_092023",
                  "url": "http://http2.mlstatic.com/D_705193-MLA71826384421_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_705193-MLA71826384421_092023-O.jpg",
                  "size": "500x318",
                  "max_size": "500x318",
                  "quality": ""
                },
                {
                  "id": "633666-MLA71826659725_092023",
                  "url": "http://http2.mlstatic.com/D_633666-MLA71826659725_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_633666-MLA71826659725_092023-O.jpg",
                  "size": "500x485",
                  "max_size": "500x485",
                  "quality": ""
                },
                {
                  "id": "893136-MLA71826571075_092023",
                  "url": "http://http2.mlstatic.com/D_893136-MLA71826571075_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_893136-MLA71826571075_092023-O.jpg",
                  "size": "500x485",
                  "max_size": "500x485",
                  "quality": ""
                },
                {
                  "id": "633908-MLA71826659723_092023",
                  "url": "http://http2.mlstatic.com/D_633908-MLA71826659723_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_633908-MLA71826659723_092023-O.jpg",
                  "size": "500x333",
                  "max_size": "500x333",
                  "quality": ""
                },
                {
                  "id": "996246-MLA71826541405_092023",
                  "url": "http://http2.mlstatic.com/D_996246-MLA71826541405_092023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_996246-MLA71826541405_092023-O.jpg",
                  "size": "500x500",
                  "max_size": "500x500",
                  "quality": ""
                }
              ]
            },
            "MLA1410528723": {
              "productId": "MLA1410528723",
              "productName": "Smart Tv Samsung 50 Un50cu7000gczb Led 4k Crystal Hd",
              "condition": "new",
              "price": 695571,
              "pictures": [
                {
                  "id": "734638-MLA74609710417_022024",
                  "url": "http://http2.mlstatic.com/D_734638-MLA74609710417_022024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_734638-MLA74609710417_022024-O.jpg",
                  "size": "500x379",
                  "max_size": "1063x806",
                  "quality": ""
                },
                {
                  "id": "622122-MLU74089433592_012024",
                  "url": "http://http2.mlstatic.com/D_622122-MLU74089433592_012024-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_622122-MLU74089433592_012024-O.jpg",
                  "size": "500x378",
                  "max_size": "1063x804",
                  "quality": ""
                },
                {
                  "id": "722684-MLU72859230576_112023",
                  "url": "http://http2.mlstatic.com/D_722684-MLU72859230576_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_722684-MLU72859230576_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "631311-MLU72859240176_112023",
                  "url": "http://http2.mlstatic.com/D_631311-MLU72859240176_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_631311-MLU72859240176_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "662849-MLU72859240138_112023",
                  "url": "http://http2.mlstatic.com/D_662849-MLU72859240138_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_662849-MLU72859240138_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "622217-MLU72859230556_112023",
                  "url": "http://http2.mlstatic.com/D_622217-MLU72859230556_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_622217-MLU72859230556_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "816103-MLU72859240188_112023",
                  "url": "http://http2.mlstatic.com/D_816103-MLU72859240188_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_816103-MLU72859240188_112023-O.jpg",
                  "size": "500x500",
                  "max_size": "1200x1200",
                  "quality": ""
                },
                {
                  "id": "620218-MLA72721769071_112023",
                  "url": "http://http2.mlstatic.com/D_620218-MLA72721769071_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_620218-MLA72721769071_112023-O.jpg",
                  "size": "500x457",
                  "max_size": "1200x1097",
                  "quality": ""
                }
              ]
            },
            "MLA1567211864": {
              "productId": "MLA1567211864",
              "productName": "Smart Tv Samsung 50  Crystal Uhd 4k Un50cu7000",
              "condition": "new",
              "price": 888199,
              "pictures": [
                {
                  "id": "993114-MLA72839521112_112023",
                  "url": "http://http2.mlstatic.com/D_993114-MLA72839521112_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_993114-MLA72839521112_112023-O.jpg",
                  "size": "500x311",
                  "max_size": "803x500",
                  "quality": ""
                },
                {
                  "id": "676337-MLA72916329817_112023",
                  "url": "http://http2.mlstatic.com/D_676337-MLA72916329817_112023-O.jpg",
                  "secure_url": "https://http2.mlstatic.com/D_676337-MLA72916329817_112023-O.jpg",
                  "size": "312x500",
                  "max_size": "500x799",
                  "quality": ""
                }
              ]
            }
          }); // Send the enhanced product data as JSON response
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
