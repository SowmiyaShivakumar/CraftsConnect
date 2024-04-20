const express = require('express')
const route = express.Router()

const {
    getProducts,
    getAllProducts,
    getProductWithId,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController')

const requireAuth = require('../middleware/requireAuth')

route.use(requireAuth)

//get product details for particular artisan
route.get('/' , getProducts)

//get all the product
route.get('/all' , getAllProducts)

//get product with id
route.get('/:id' , getProductWithId)

//create a product
route.post('/', createProduct)

//delete a product
route.delete('/:id' , deleteProduct)

//update a product
route.put('/:id' , updateProduct)

module.exports = route