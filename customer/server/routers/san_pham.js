import express from 'express'
import { Get_San_Phams, Get_San_Pham_By_ID, Create_San_Pham } from '../controller/san_pham.js'

const router = express.Router()

router.get('/', Get_San_Phams)
router.post('/', Get_San_Pham_By_ID)
router.post('/create_san_pham', Create_San_Pham)

export default router