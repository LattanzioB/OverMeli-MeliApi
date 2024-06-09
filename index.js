const { ProductController } = require("./controller/product_controller.js")
const { TokenService } = require("./service/token_service.js")
const {mongoose} = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const {UserProductModel} = require("./model/user_product_model");
const {UserProductRouter} = require("./routes/user_product_routes") 
const {url, rwurl,clurl} = require('./config.js')
const {specs} = require('./swagger_config');
const swaggerUi = require("swagger-ui-express");
/*
const token_service = new TokenService();
const product_controller = new ProductController(token_service);


async function main(){
    await token_service.update_token();
    await product_controller.first_call();
}
*/
const routes = new UserProductRouter();

console.log(url)

mongoose.connect(clurl) //Web: clurl //docker: url
.then(async ()=> {
  console.log('Database Connected')
  await UserProductModel.deleteMany({});
  //await setupDatabase();
})
.catch((err) => console.log('Database not Connected', err))


const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/', routes.get_routes())
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);


const port = 8010;
app.listen(port, ()=> console.log(`server is running on port ${port}`))


