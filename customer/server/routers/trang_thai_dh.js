import express from 'express'
import { Get_Trang_Thais, Get_Trang_Thai_By_ID, Create_Trang_Thai } from '../controller/trang_thai_dh.js'

const router = express.Router()

router.get('/', Get_Trang_Thais)
router.post('/', Get_Trang_Thai_By_ID)
router.post('/create_trang_thai_dh', Create_Trang_Thai)

export default router