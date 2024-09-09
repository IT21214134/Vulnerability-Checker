import express from 'express'
import { addNewPost,uploadImages,getPost,deletePost ,getOnePost ,getAllPost} from '../Controllers/Sellerpost-controller.js';
import multer from 'multer'

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null , 'uploads')
    },
    filename: function(re,file,cb){
        cb(null, Date.now() + '_' + file.originalname);
    },
})
const upload = multer({storage});

router.post('/AddnewPost', upload.single('Thumbnail'), addNewPost);
router.post('/updateImages', upload.array('Images'), uploadImages);
router.post('/getPost',getPost);
router.post('/onepost',getOnePost);
router.post('/deletePost',deletePost);
router.get('/getAll',getAllPost);


export default router