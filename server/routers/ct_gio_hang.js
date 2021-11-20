import express from 'express'
import { Get_CT_Gio_Hangs, Get_CT_Gio_Hang_By_ID, Create_CT_GioHang,
		 Update_CT_GioHang } from '../controller/ct_gio_hang.js'

const router = express.Router()

router.get('/', Get_CT_Gio_Hangs)
router.post('/', Get_CT_Gio_Hang_By_ID)
router.post('/create_ct_gh', Create_CT_GioHang)
router.post('/update_ct_gh', Update_CT_GioHang)

export default router