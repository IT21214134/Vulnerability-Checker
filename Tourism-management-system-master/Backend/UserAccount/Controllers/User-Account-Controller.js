import User from '../Models/User-Account-Model.js'
import jwt from 'jsonwebtoken'
import fs from 'fs'
let refreshtokens = [];

export const UserRegister = async (req, res) => {
  console.log(req.body)
 try{
  let file = 'N/A'
  if (req.file) {
    file = req.file.filename
  }
  console.log(req.body.email)
    const ExsistUser = await User.findOne({ email: req.body.email });
    console.log(!ExsistUser)
    if (ExsistUser) {

      res.status(404).json({
        message: "User Already registered..!",

      })
    } else if(!ExsistUser) {
      const prefix = 'UID'
      const USER_ID = (prefix + Date.now())
      const bg = 'Level 01'
      console.log(USER_ID);
      const no = 0;

      const newUser = new User({
        user_id: USER_ID,
        userName: req.body.userName,
        birthday: req.body.birthday,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        gender:req.body.gender,
        badge:req.body.badge,
        tel_no:req.body.tel_no,
        post_count:no,
        ProfilePicture: {
          data: fs.readFileSync('UploadUserProfileImages/' + req.file.filename),
          contentType:"image/png"
        }

      });

      console.log(newUser);
      const newAcct = await newUser.save();
      if (newAcct) {
  
        res.status(201).json({
          message: "Registration Sucessfull..!",
          payload: newAcct
        })
      } else {

        res.status(400).json({
          message: "Somthing Went Wrong In Account Creating..!"
        })
      }


    }
  } catch (error) {
    res.status(500).json({
      message: "Somthing Went Wrong..!",
      error: error
    })



  }
}

export const Signin = async (req, res) => {
  try {
    
    /*console.log(req.body.email)*/
    const RegisterdUser = await User.findOne({ email: req.body.email });
   // console.log(RegisterdUser)  
    if (RegisterdUser) {
      const enterdPwd = req.body.password;
      const dbPwd = RegisterdUser.password;
      const uid = RegisterdUser._id;
      //console.log(enterdPwd,dbPwd);
      console.log(uid);
      if (enterdPwd === dbPwd) {
        const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY1, { expiresIn: '1h'});
        const refreshToken = jwt.sign({ email: req.body.email }, process.env.REFRESH_TOKEN_KEY1, { expiresIn: '24h' });
        // console.log("token  "+token)
        // console.log("refresh token    "+refreshToken)
        refreshtokens.push(refreshToken);
        res.status(201).json({
          mesage: "Login Successfull..!",
          token,
          refreshToken,
          payload:{uid}
        })
      } else {
        res.status(401).json({
          message: "Incorrect Password..!"
        })
      }
    } else {
      res.status(404).json({
        message: "User Not Registered..!"
      })
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server error..!",
      error: error
    })
  }
}

export const tokenRefresh = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) {
    res.status(401).json({
      message: "Unauthorized..!"
    })
  } else if (!refreshtokens.includes(refreshToken)) {
    res.status(403).json({
      message: "Forbidden..!"
    })
  } else {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY1, (err, user) => {
      if (err) {
        res.status(403).json({
          message: "Forbidden..!"
        })
      } else {
        const token = jwt.sign({ email: req.body.email }, process.env.JWT_TOKEN_KEY1, { expiresIn: "1h" });
        res.status(201).json({
          message: "Session Extended..!",
          token
        })
      }
    })
  }
}

export const Signout = (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    refreshtokens = refreshtokens.filter(token => token !== refreshToken);
    res.status(200).json({
      message: "Signout successful!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const allusers = await User.find();
    if (allusers) {
      res.status(200).json({
        message: "Fetched Successfull..!",
        payload: allusers
      })
    }
  }catch(error){
    console.log(error)
  }
}

export const getOneUser = async (req, res) => {
  try {
    let userId = req.params.userid;
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json({user
      })
    }
  }catch(error){
    console.log(error)
  }
}

export const updateUser = async (req, res) => {
 
  const id = req.params.id;

  const user_id = req.body.user_id;
  const userName = req.body.newuserName;
  const birthday = req.body.newbirthday;
  const email = req.body.newcountry;
  const password = req.body.newpassword;
  const country = req.body.newcountry;
  const gender = req.body.newgender;
  const tel_no = req.body.newtel_no;
  const badge = req.body.badge;
  const post_count = req.body.post_count;

  const updatePost = {
      user_id,
      userName,
      birthday,
      email,
      password,
      country,
      gender,
      badge,
      tel_no,
      post_count
  }

  try {
      const updatedPost = await User.findByIdAndUpdate(id, updatePost, { new: true });
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


export const updateCount = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  const postCount = user.post_count;
  const newPost = Number(postCount) + 1;
  console.log(newPost);
  user.post_count = newPost;
  if(newPost >=0 && newPost <3){
    user.badge = 'Silver'
  }else if(newPost >=3 && newPost <7){
    user.badge = 'Gold'
  }else if(newPost >=7){
    user.badge = 'Platinum'
  }
  await user.save();
}

export const updateCount2 = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  const postCount = user.post_count;
  const newPost = Number(postCount) - 1;
  console.log(newPost);
  user.post_count = newPost;
  if(user.post_count >= 0 && user.post_count <=3){
    user.badge = 'Silver'
    console.log('silver ekata awa')
  }else if(user.post_count >3 && user.post_count <=7){
    user.badge = 'Gold'
    console.log('gold ekata awa')
  }else if(user.post_count >7){
    user.badge = 'Platinum'
    console.log('Platinum ekata awa')
  }
  console.log(user.badge);
  await user.save();
}