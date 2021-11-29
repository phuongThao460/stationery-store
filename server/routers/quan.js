import express from 'express'
import { Get_Quan_By_ID, Get_Quans, Get_Quan_By_ID_Thanh_Pho} from '../controller/quan.js'

const router = express.Router()

router.get('/', Get_Quans)
router.post('/', Get_Quan_By_ID)
router.post('/by_thanh_pho', Get_Quan_By_ID_Thanh_Pho)

export default router