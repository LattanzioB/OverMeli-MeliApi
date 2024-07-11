const { ProductController } = require("./controller/product_controller.js")
const { TokenService } = require("./service/token_service.js")
const {mongoose} = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const {UserProductModel} = require("./model/user_product_model");
const {UserProductRouter} = require("./routes/user_product_routes") 
const {url, rwurl,clurl, port} = require('./config.js')
const {specs} = require('./swagger_config');
const swaggerUi = require("swagger-ui-express");
const cors = require('cors');
const corsOptions = require('./cors-options');

const routes = new UserProductRouter();


mongoose.connect(rwurl) //Web: clurl //docker: url
.then(async ()=> {
  console.log('Database Connected')
  await UserProductModel.deleteMany({});
  //await setupDatabase();
})
.catch((err) => console.log('Database not Connected', err))


const app = express();

app.use(cors(corsOptions));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use('/', routes.get_routes())
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(port, ()=> console.log(`server is running on port ${port}`))


