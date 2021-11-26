import pdf from 'pdf-creator-node'
import fs from 'fs'


export const Create_Report = async (req, res) => {

	var html = fs.readFileSync('report_template.html', 'utf-8')

	var options = { format: "A3", orientation: "portrait", border: "10mm" }

	var items = [
		{
			name: "abc",
			price: 50000,
			quantity: 500,
			total: 10000
		}
	]

	var document = {
		html: html,
		data: {
			data: Get_Data_To_Render()
		},
		path: "./output.pdf"
	}

	const rs = await pdf.create(document, options)

	res.status(200).json(rs)

}

const Get_Data_To_Render = () => {
	var date_begin = new Date().toLocaleDateString()
	
	var date_end = new Date()
	date_end.setDate(date_end.getDate() + 20)
	date_end = date_end.toLocaleDateString()

	var nhan_vien = {
		name: "Luu Gia Khang"
	}

	var items = [
		{
			name: "Sổ tay bìa cứng",
			price: 50000,
			quantity: 2,
			total: 100000
		},
		{
			name: "Bút bi MUJI",
			price: 20000,
			quantity: 10,
			total: 200000
		},
		{
			name: "Bút bi Thiên Long",
			price: 5000,
			quantity: 10,
			total: 50000
		},
		{
			name: "Sổ tay đặc biệt",
			price: 25000,
			quantity: 2,
			total: 50000
		},
		{
			name: "Bút highlight 2 đầu",
			price: 20000,
			quantity:1,
			total: 20000
		}
	]

	var total = 0
	items.forEach(item => total += item.total) 

	var data = {
		date_begin: date_begin,
		date_end: date_end,
		nhan_vien: nhan_vien,
		items: items,
		total: total
	}

	return data
}