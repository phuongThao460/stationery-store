import express from 'express'
import { Get_Gio_Hangs, Get_Gio_Hangs_By_ID, Create_Gio_Hang } from '../controller/gio_hang.js'

const router = express.Router()

router.get('/', Get_Gio_Hangs)
router.post('/', Get_Gio_Hangs_By_ID)
router.post('/create_gio_hang', Create_Gio_Hang)

export default router