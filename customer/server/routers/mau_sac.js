import express from 'express'
import { Get_Mau_Sacs, Get_Mau_Sac_By_ID, Create_Mau_Sac } from '../controller/mau_sac.js'

const router = express.Router()

router.get('/', Get_Mau_Sacs)
router.post('/', Get_Mau_Sac_By_ID)
router.post('/create_mau_sac', Create_Mau_Sac)

export default router