import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
	{
		customer: {
			type: String,
			maxLength: 60,
			required: true,
		},
		addr: {
			type: String,
			maxLength: 200,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		status: {
			type: Number,
			default: 0,
		},
		paymentMethod: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true },
)

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)
