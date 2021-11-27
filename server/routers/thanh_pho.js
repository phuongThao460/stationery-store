import express from 'express'
import { Get_Thanh_Phos, Get_Thanh_Pho_By_ID} from '../controller/thanh_pho.js'

const router = express.Router()

router.get('/', Get_Thanh_Phos)
router.post('/', Get_Thanh_Pho_By_ID)

export default router