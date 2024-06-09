const express = require('express');

const cors = require('cors');
const {UserProductController} = require('../controller/user_product_controller')
const {ProductController} = require('../controller/product_controller')
/**
 * @swagger
 * components:
 *   schemas:
 *     UserProduct:
 *       type: object
 *       required:
 *         - user
 *         - productId
 *         - productName
 *       properties:
 *         user:
 *           type: string
 *           description: The user name
 *         productId:
 *           type: string
 *           description: The product identificator
 *         productName:
 *           type: string
 *           description: The product identificator
 *         rate:
 *           type: string
 *           description: The product identificator
 *         comment:
 *           type: string
 *           description: The product identificator
 *       example:
 *         user: user1
 *         productId: 1
 *         productName: TV LCD 40" FULL HD
 *         rate: 5
 *         comment: best TV Ive ever bought
 * 
 */

/**
 * @swagger
 * tags:
 *   name: UserProduct
 *   description: The UserProduct managing API
 * /register_user_product:
 *   post:
 *     summary: Create a new UserProduct relation
 *     tags: [UserProduct]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProduct'
 *     responses:
 *       200:
 *         description: The created user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProduct'
 *       500:
 *         description: Some server error
 * 
 * 
 * /searchProduct:
 *   get:
 *     summary: Search for a product
 *     tags: [UserProduct]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: The search query for the product
 *     responses:
 *       200:
 *         description: A list of products matching the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         description: The product ID
 *                       title:
 *                         type: string
 *                         description: The product title
 *                       price:
 *                         type: number
 *                         description: The product price
 *       500:
 *         description: Some server error
 */

class UserProductRouter {
    constructor(){
        this.user_product_router = express.Router();
        this.user_product_controller = new UserProductController();
        this.product_controller = new ProductController();
        this.p
        this.user_product_router.use(
            cors({
                credentials: true,
                origin: 'http://localhost:8090'
            })
        )
        this.user_product_router.post('/register_user_product', (req, res) => this.user_product_controller.saveUserProduct(req, res))
        this.user_product_router.get('/searchProduct', (req, res) => this.product_controller.search_product(req, res))
    }
//query = 'Samsung 20 Galaxy S8 64 GB rosa'
    get_routes() {
        return this.user_product_router
    }
}





module.exports = {UserProductRouter}