import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			maxLength: 60,
			required: true,
		},
		desc: {
			type: String,
			maxLength: 200,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		prices: {
			type: [Number],
			required: true,
		},
		extraOpts: {
			type: [
				{
					text: {
						type: String,
						required: true,
					},
					price: {
						type: Number,
						required: true,
					},
				},
			],
		},
	},
	{ timestamps: true },
)

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
