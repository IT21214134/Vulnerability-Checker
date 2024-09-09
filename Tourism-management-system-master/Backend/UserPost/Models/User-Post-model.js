import mongoose from "mongoose";
const Schema = mongoose.Schema;

//create user post model class
const UserPostSchema = new Schema(
  {
    post_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    post_title: {
      type: String,
      required: true,
    },
    post_description: {
      type: String,
      required: true,
    },
    post_date: {
      type: String,
      required: true,
    },
    post_location: {
      type: String,
      required: true,
    },
    post_remark: {
      type: String,
    },
    post_image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user_posts", UserPostSchema);
