import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'

import ttkh from './routers/tt_kh.js'
import tkkh from './routers/tk_kh.js'
import loai_sp from './routers/loai_sp.js'
import mau_sac from './routers/mau_sac.js'
import chat_lieu from './routers/chat_lieu.js'
import nha_cc from './routers/nha_cc.js'
import san_pham from './routers/san_pham.js'
import tt_dh from './routers/trang_thai_dh.js'
import gio_hang from './routers/gio_hang.js'
import ct_gh from './routers/ct_gio_hang.js'
import don_hang from './routers/don_hang.js'
import ct_dh from './routers/ct_don_hang.js'
<<<<<<< HEAD
import report from './routers/report.js'
import thanh_pho from './routers/thanh_pho.js'
import quan from './routers/quan.js'
import phuong from './routers/phuong.js'
=======
>>>>>>> 38ae51fe3cf6a7ffbb0e2f801e5eaf26d399534f

const app = express()
const PORT = process.env.port  || 8000

const URI = process.env.DB_URI

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', cors())

app.use('/ttkh', ttkh)
app.use('/tkkh', tkkh)
app.use('/loai_sp', loai_sp)
app.use('/mau_sac', mau_sac)
app.use('/chat_lieu', chat_lieu)
app.use('/nha_cc', nha_cc)
app.use('/san_pham', san_pham)
app.use('/tt_dh', tt_dh)
app.use('/gio_hang', gio_hang)
app.use('/ct_gh', ct_gh)
app.use('/don_hang', don_hang)
app.use('/ct_dh', ct_dh)
<<<<<<< HEAD
app.use('/report', report)
app.use('/thanh_pho', thanh_pho)
app.use('/quan', quan)
app.use('/phuong', phuong)
=======
>>>>>>> 38ae51fe3cf6a7ffbb0e2f801e5eaf26d399534f

mongoose
	.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => {
		console.log('Connected to DB')
		app.listen(PORT, () => {
			console.log(`Server is running on port ${ PORT }`)
		})
	})
	.catch(err => {
		console.log('err', err)
	}) 

app.get('/', (req, res) => {
	res.send('SUCESS')
})
