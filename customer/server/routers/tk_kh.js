import express from 'express'
import { Get_TKKHs, Get_TKKH_By_ID, Login } from '../controller/tk_kh.js'

const router = express.Router()

router.get('/', Get_TKKHs)
router.post('/', Get_TKKH_By_ID)
router.post('/login', Login)

export default router