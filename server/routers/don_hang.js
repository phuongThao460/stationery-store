import express from 'express'
import { Get_Don_Hangs, Create_Don_Hang,
	Get_Don_Hang_By_Id, Get_Don_Hang_By_User_Id,
	Update_Don_Hang } from '../controller/don_hang.js'

const router = express.Router()

router.get('/', Get_Don_Hangs)
router.post('/', Get_Don_Hang_By_Id)
router.post('/create_don_hang', Create_Don_Hang)
router.post('/by_id_ttkh', Get_Don_Hang_By_User_Id)
router.post('/update_by_id', Update_Don_Hang)

export default router