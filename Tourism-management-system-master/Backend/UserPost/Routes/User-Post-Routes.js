import  express  from 'express';
import {addPost, getAllPost, getOnePost, updatePost, deletePost } from '../Controllers/User-Post-Controller.js'
import multer from 'multer';
const router = express.Router();



const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, 'UploadUserPostImages')
    },
    filename: function(req, file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage});



router.post('/postadd',upload.single('post_image'), addPost);
router.delete('/postdelete/:post_id',deletePost);
router.get("/allpost", getAllPost);
router.get("/post/:user_id", getOnePost);
router.put("/postupdate/:id",upload.single('post_image'), updatePost);


export default router;