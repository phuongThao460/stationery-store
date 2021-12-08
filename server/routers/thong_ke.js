import express from 'express'
import { Get_ThongKes, Get_Thong_Ke_By_ID, Create_Thong_Ke } from '../controller/thong_ke.js'

const router = express.Router()

// GET: /thong_ke/
router.get('/', Get_ThongKes)

// POST: /thong_ke/
router.post('/', Get_Thong_Ke_By_ID)

// POST: /thong_ke/create
router.post('/create', Create_Thong_Ke)

export default router