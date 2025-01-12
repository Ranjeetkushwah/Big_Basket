const express = require('express')
const router = express.Router()
// const uuid = require('uuid');
const Product = require('../model/product');
const { request } = require('http');
const { body, validationResult } = require('express-validator');






// REST API
// --------
// 1) @usage : Get all Products
//    @url : http://127.0.0.1:5000/api/products
//    @fields : no-fields
//    @method : GET
//    @access : PUBLIC

router.get('/products', async (request, response) => {
    try {
        let product = await Product.find();
        response.status(200).json({ product: product })
    }
    catch (error) {
        console.log(error)
        response.status(500).json({ result: [{ msg: result.message }] })

    }
})













// 2) @usage : Get one  Product
//    @url : http://127.0.0.1:5000/api/products/:product_id
//    @fields : no-fields
//    @method : GET
//    @access : PUBLIC


router.get('/products/:product_id', async (request, response) => {
    try {

        let productID = request.params.product_id
        let product = await Product.findById(productID);
        response .status(200).json({ product: product })
    }
    catch (error) {
        console.log(error)
        response.status(500).json({ result: [{ msg: result.message }] })

    }
})












// 3) @usage : Create a Product
//    @url : http://127.0.0.1:5000/api/products

//    @fields : name , image , price , qty , info
//    @method : POST
//    @access : PUBLIC

router.post('/products', [
    body('name').notEmpty().withMessage("name is required"),
    body('image').notEmpty().withMessage("image is required"),
    body('price').notEmpty().withMessage("price is required"),
    body('quantity').notEmpty().withMessage("quantity is required"),
    body('info').notEmpty().withMessage("info is required"),
], async (request, response) => {
    const result = validationResult(request);
    if (!result.isEmpty()) {
        return response.status(400).send({ result: result.array() })
    }
    try {
        let newProduct = {


            name: request.body.name,
            image: request.body.image,
            price: request.body.price,
            quantity: request.body.quantity,
            info: request.body.info,
        }

        newProduct = new Product(newProduct)
        newProduct = await newProduct.save()
        response.status(201).json({ msg: "create a product", newProduct: newProduct })

    }
    catch (error) {
        console.log(error)
        response.status(500).json({ result: [{ msg: result.message }] })
    }


})






















// 4) @usage : Update Product
//    @url : http
// 4) @usage : Update Product
//    @url : http://127.0.0.1:5000/api/products/:product_id
//    @fields : name , image , price , qty , info
//    @method : PUT
//    @access : PUBLIC


router.put('/products/:product_id', [
    body('name').notEmpty().withMessage("name is required"),
    body('image').notEmpty().withMessage("image is required"),
    body('price').notEmpty().withMessage("price is required"),
    body('quantity').notEmpty().withMessage("quantity is required"),
    body('info').notEmpty().withMessage("info is required"),
], async (request, response) => {

    let productID = request.params.product_id


    if (!productID) {
        return response.status(400).send({ msg: "product not find" })
    }
    try {
       
        let newProduct = {
              name: request.body.name,
            image: request.body.image,
            price: request.body.price,
            quantity: request.body.quantity,
            info: request.body.info,
        }



       let product = await Product.findByIdAndUpdate(productID,
                {
                $set:newProduct
            },
            {
                new:true
            }
        )
        response.status(201).json({ msg: "update a product", product: product })
         

    }
    catch (error) {
        console.log(error)
        response.status(500).json({ msg: "product is not updated" })
    }


})











// 5) @usage : Delete Product
//    @url : http://127.0.0.1:5000/api/products/:product_id
//    @fields : no-fields
//    @method : DELETE
//    @access : PUBLIC


router.delete('/products/:product_id', async (request, response) => {


    let productID = request.params.product_id
    if (!productID) {
        return response.status(400).send({ msg: "product not find" })
    }
    try {
       

     let product = await Product.findByIdAndDelete(productID)
       response.status(201).json({ msg: "product is deleted   " })

    }
    catch (error) {
        console.log(error)
        response.status(510).json({  msg: 'product is not deleted'  })
    }


})



module.exports = router