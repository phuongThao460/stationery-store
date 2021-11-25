import express from 'express'
import { Get_CT_DHs, Create_CT_DH, Get_CT_DH_By_Id,
	Get_Don_Hang_By_DH_Id, Update_CTDH } from '../controller/ct_don_hang.js'

const router = express.Router()

router.get('/', Get_CT_DHs)
router.post('/', Get_CT_DH_By_Id)
router.post('/create', Create_CT_DH)
router.post('/by_dh_id', Get_Don_Hang_By_DH_Id)
router.post('/update', Update_CTDH)

export default router