import express from 'express'
import { newOrder,getOrder,deleteOrder,newOrderFirst} from '../Controllers/Order-controller.js';
const router = express.Router();


router.post('/addorder',newOrder);
router.post('/getOrder',getOrder);
router.post('/deleteOrder',deleteOrder);
router.post('/orderFirst',newOrderFirst);


export default router