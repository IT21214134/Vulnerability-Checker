import Post from '../Models/User-Post-model.js'
import fs from 'fs'

export const addPost = async (req, res) => {
  // console.log(req.body)
 try{
 
      const prefix = 'PID'
      const POST_ID = (prefix + Date.now())
      // console.log(POST_ID)

      const newPost = new Post({
        post_id: POST_ID,
        user_id: req.body.user_id,
        post_title: req.body.post_title,
        post_description: req.body.post_description,
        post_date: req.body.post_date,
        post_location: req.body.post_location,
        post_remark:req.body.post_remark,
        post_image: req.file.originalname

      });

      const newAcct = await newPost.save();
      console.log(newAcct);
      if (newAcct) {
      
        res.status(201).json({
          message: "Post Created Sucessfull..!",
          payload: newAcct
        })
      } else {

        res.status(400).json({
          message: "Somthing Went Wrong In Post Creating..!"
        })
      } 
  } catch (error) {
    res.status(500).json({
      message: "Somthing Went Wrong..!",
      error: error
    })
  }
}

export const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    if (allPost) {
      res.status(200).json({
        message: "Fetched Successfull..!",
        payload: allPost
      })
    }
  }catch(error){
    console.log(error)
  }
}

export const getOnePost = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    const posts = await Post.find({user_id});
    if (posts) {
      res.status(200).json({ posts });
    } else {
      res.status(404).json({ message: "No posts found for user ID " + user_id });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}


// export const updatePost =  (async(req,res)=>{

//     let file = 'N/A'
//     if (req.file) {
//         file = req.file.filename
//     }

//     let id = req.params.id;
//     console.log(id)
//     // const post_title = req.body.post_title;
//     // const post_description = req.body.post_description;
//     // const post_date = req.body.post_date;
//     // const post_location = req.body.post_location;
//     // const post_remark = req.body.post_remark;
//     const post_image = file;
//     const user_id = req.body.user_id;
//     const post_title = req.body.post_title;
//     const post_description = req.body.post_description;
//     const post_date = req.body.post_date;
//     const post_location = req.body.post_location;
//     const post_remark = req.body.post_remark;
   
//     const updatePost = {
//         user_id,
//         post_title,
//         post_description,
//         post_date,
//         post_location,
//         post_remark,
//         post_image
//     }
//     console.log(updatePost);
//     const update = await Post.findByIdAndUpdate(id, updatePost).then(() => {
//         res.status(200).send({status: "Post Updated"})
//     }).catch((err) =>{
//         console.log(err);
//         res.status(500).send({status: "Error with updation data"});
//     })

    
// })

export const updatePost = async (req, res) => {
  let file = 'N/A'
  if (req.file) {
      file = req.file.filename
  }

  const id = req.params.id;

  const user_id = req.body.user_id;
  const post_title = req.body.post_title;
  const post_description = req.body.post_description;
  const post_date = req.body.post_date;
  const post_location = req.body.post_location;
  const post_remark = req.body.post_remark;
  const post_image = file;

  const updatePost = {
      user_id,
      post_title,
      post_description,
      post_date,
      post_location,
      post_remark,
      post_image
  }

  try {
      const updatedPost = await Post.findByIdAndUpdate(id, updatePost, { new: true });
      if (updatedPost) {
          res.status(200).send({ status: "Post Updated", data: updatedPost });
      } else {
          res.status(404).send({ status: "Post not found" });
      }
  } catch (err) {
      console.log(err);
      res.status(500).send({ status: "Error with updating data" });
  }
};


export const deletePost = (async (req,res) =>{
     let post_id = req.params.post_id;

     await Post.findByIdAndDelete(post_id).then(() => {
        res.status(200).send({status: "Post deleted"});
     }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})
