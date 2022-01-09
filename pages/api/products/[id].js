import dbConnect from '../../../utils/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) {
	const {
		method,
		query: { id },
	} = req

	await dbConnect()

	if (method === 'GET') {
		try {
			const product = await Product.findById(id)
			res.status(200).json(product)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'POST') {
		try {
			const product = await Product.create(req.body)
			res.status(201).json(product)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'PUT') {
		try {
			const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
			res.status(201).json(product)
		} catch (err) {
			res.status(500).json(err)
		}
	}
	if (method === 'DELETE') {
		try {
			const product = await Product.findByIdAndDelete(id)
			res.status(200).json(`Product ${product.title} has been deleted`)
		} catch (err) {
			res.status(500).json(err)
		}
	}
}
