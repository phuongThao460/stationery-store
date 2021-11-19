import express from 'express'
import { Get_Nha_CCs, Get_Nha_CC_By_ID, Create_Nha_CC } from '../controller/nha_cc.js'

const router = express.Router()

router.get('/', Get_Nha_CCs)
router.post('/', Get_Nha_CC_By_ID)
router.post('/create_nha_cc', Create_Nha_CC)

export default router