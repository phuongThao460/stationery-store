import express from 'express'
import { Get_Phuongs, Get_Phuong_By_ID, Get_Phuong_By_ID_Quan } from '../controller/phuong.js'

const router = express.Router()

router.get('/', Get_Phuongs)
router.post('/', Get_Phuong_By_ID)
router.post('/by_quan', Get_Phuong_By_ID_Quan)

export default router