import express from 'express'
import { Get_Quan_By_ID, Get_Quans} from '../controller/quan.js'

const router = express.Router()

router.get('/', Get_Quans)
router.post('/', Get_Quan_By_ID)

export default router