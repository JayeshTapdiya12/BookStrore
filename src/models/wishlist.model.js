import { description } from "@hapi/joi/lib/schemas";
import { Schema, model } from "mongoose";
const wishlistModel = new Schema({
    wishlistBy: {
        type: String,
        required: true
    },
    book: [{
        description: {
            type: String
        },
        discountPrice: {
            type: Number
        },
        bookName: {
            type: String
        },
        author: {
            type: String
        },
        price: {
            type: Number
        },
        image: {
            type: String
        }
    }]
},
    {
        timestamps: true
    });

export default model('WishList', wishlistModel);