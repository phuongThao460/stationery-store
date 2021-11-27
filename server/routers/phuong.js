import express from 'express'
import { Get_Phuongs, Get_Phuong_By_ID } from '../controller/phuong.js'

const router = express.Router()

router.get('/', Get_Phuongs)
router.post('/', Get_Phuong_By_ID)

export default router