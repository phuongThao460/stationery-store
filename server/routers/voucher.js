import express from 'express'
import { Get_Vouchers, Get_Voucher_By_ID, Create_Voucher,
		Test_Find_TKKH_Meets_The_Conditions  } from '../controller/voucher.js'

const router = express.Router()

router.get('/', Get_Vouchers)
router.post('/', Get_Voucher_By_ID)
router.post('/create', Create_Voucher)
router.post('/test', Test_Find_TKKH_Meets_The_Conditions)

export default router