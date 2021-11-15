const Review = require('../models/Review')
const Product = require("../models/Product");
const User = require("../models/User");

const sendResponse = require("../helpers/sendResponse");
const reviewController = {};

reviewController.createComment = async (req, res, next) => {
     // get inputs
     const owner = req.currentUser._id;
     const {comment} = req.body;
     const {productId} = req.params;
    try{
       
        // if product Id 
        if(!productId){
            throw new Error("Missing productId")
        }
        const newReview = {
            owner,
            comment,
            productId,
            // status
            
        }
        // if product ID is true
        const found = await Product.findById(productId);
        if(!found){
            throw new Error("Product not found")
        }
        // if(!status){
        //     throw new Error("Buy product before reviewing")
        // }if(status === "paid"){

        // }
    result = await Review.create(newReview);
    // result = await result.populate([
    //     {path: }
    // ])
    }catch(err){
        return next(error);
    }
    return sendResponse(
        res,
        200,
        true,
        result,
        false,
        "Successfully create review"
    )
}
reviewController.getComment = async (req,res, next) => {
    const {productId} = req.query;
    const owner = req.currentUser._id;
    let result;
    try{
        // result = Review.findOne({owner, _id: productId}).populate(
        //     "products.productId"
        // );
        result = await Review.find()
    }catch(error){
        return next(error);
    }
    return sendResponse(
        res, 
        200,
        true,
        result,
        false,
        "Success get comment"
    )
}

module.exports = reviewController;