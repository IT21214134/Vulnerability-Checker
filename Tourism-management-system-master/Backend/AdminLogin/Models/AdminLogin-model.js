import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create user account model class
const AdminSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("admin", AdminSchema);
