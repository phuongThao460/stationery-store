import express from 'express'
import { Get_Chat_Lieus, Get_Chat_Lieu_By_ID, Create_Chat_Lieu } from '../controller/chat_lieu.js'

const router = express.Router()

router.get('/', Get_Chat_Lieus)
router.post('/', Get_Chat_Lieu_By_ID)
router.post('/create_chat_lieu', Create_Chat_Lieu)

export default router