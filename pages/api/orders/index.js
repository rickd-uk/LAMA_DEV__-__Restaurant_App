import dbConnect from '../../../utils/mongo'
import Order from '../../../models/Order'

const handler = async (req, res) => {
	const { method } = req

	await dbConnect()

	if (method == 'GET') {
		try {
			const orders = await Order.find()
			res.status(200).json(orders)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method == 'POST') {
		console.log('POST')
		try {
			const order = await Order.create(req.body)
			console.log('ORDER:  ', order)
			res.status(201).json(order)
		} catch (err) {
			res.status(500).json(err)
		}
	}
}

export default handler
