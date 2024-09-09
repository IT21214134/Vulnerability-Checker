import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    Trip_ID: {
        type: String,
        required: true
    },
    Seller_ID: {
        type: String,
        required: true
    },
    Trip_Name: {
        type: String,
        required: true
    },
    No_Of_Days: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Accomodation: {
        type: String,
        required: true
    },
    Meals: {
        type: String,
        required: true
    },
    Transport: {
        type: String,
        required: true
    },
    About_Trip: {
        type: String,
        required: true
    },
    What_will_You_Do: {
        type: String,
        required: true
    },
    Thumbnail: {
        type: String,
        required: true
    },
    Images: [
        {
            img: {
                type: String
            }
        }
    ],
    Destinations: {
        type: String,
        required: true
    },


    Activities: {
        type: String,
        required: true
    }

}, { timestamps: true })

export default mongoose.model("SellerPost", PostSchema)
