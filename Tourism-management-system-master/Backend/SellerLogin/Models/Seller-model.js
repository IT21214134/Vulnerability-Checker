import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema;

const SellerSchema = new Schema({

    Seller_ID: {
        type: String,
        required: true
    },
    Company_name: {
        type: String,
        required: true
    },
    Company_email: {
        type: String,
        required: true
    },
    Company_contact_no: {
        type: String,
        required: true
    },
    Company_address: {
        type: String,
        required: true
    },
    Personal_name: {
        type: String,
        required: true
    },
    Personal_contact_no: {
        type: String,
        required: true
    },
    Personal_address: {
        type: String,
        required: true
    },
    Personal_email: {
        type: String,
        required: true
    },
    Hash_password: {
        type: String,
        required: true
    },
    ProfilePicture: {
        type: String
    },
    Description: {
        type: String
    },
    ImagesCom: [
        {
            img:{
                type: String
            }
        }
    ]

}, { timestamps: true })

SellerSchema.virtual('password').set(function (Password) {
    this.Hash_password = bcrypt.hashSync(Password, 8)
});

SellerSchema.methods = {
    authenticate: function () {
        return bcrypt.compareSync(password, this.Hash_password);
    }
}

export default mongoose.model("Seller", SellerSchema)
