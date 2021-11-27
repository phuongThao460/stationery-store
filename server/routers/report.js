import express from 'express'
import { Create_Report } from '../controller/report.js'

const router = express.Router()

router.get('/', Create_Report)

export default router