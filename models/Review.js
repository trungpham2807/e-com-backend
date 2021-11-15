const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    owner:{
        type: Schema.Types.ObjectId, required: true, ref: "User"
    },
    productId : { 
        type: Schema.Types.ObjectId,
        required: true, 
        ref: "Product",
    },
    status: {type: String, enum: ["active", "paid"], ref: "Cart"},

    comment: {type: String, required: true},
    // rating: {type: Number, required: true}

},
{
    timestamps: true
})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;