import express from 'express'
import { Get_TTKHs, Get_TTKH_By_ID, create_TTKH } from '../controller/tt_kh.js'

const router = express.Router()

router.get('/', Get_TTKHs)

router.post('/', Get_TTKH_By_ID)

router.post('/create_ttkh', create_TTKH)

export default router