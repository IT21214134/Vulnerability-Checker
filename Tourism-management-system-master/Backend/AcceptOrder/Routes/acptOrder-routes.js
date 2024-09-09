import express from 'express'
import { orderAccept ,getAcptOrder ,deleteacptOrder} from '../Controllers/acptOrder-controller.js';
const router = express.Router();


router.post('/orderAccept',orderAccept);
router.post('/getAcptOrder',getAcptOrder);
router.post('/delete',deleteacptOrder);






export default router