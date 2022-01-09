import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Admin.module.css'
import Image from 'next/image'

const Index = ({ products, orders }) => {
	const [productsList, setProductsList] = useState(products)
	const [ordersList, setOrdersList] = useState(orders)
	const status = ['preparing', 'on the way', 'delivered']

	const router = useRouter()

	const handleDelete = async (id) => {
		try {
			const res = await axios.delete(`http://localhost:3000/api/products/${id}`)
			setProductsList(productsList.filter((product) => product._id !== id))
			router.reload(window.location.pathname)
		} catch (err) {
			console.log(err)
		}
	}

	const handleNextStage = async (id) => {
		const item = ordersList.filter((order) => order._id === id)[0]
		const currentStatus = item.status

		try {
			const res = await axios.put(`http://localhost:3000/api/orders/${id}`, { status: currentStatus + 1 })
			setOrdersList([res.data, ...ordersList.filter((order) => order._id !== id)])
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>Products</h1>
				<table className={styles.table}>
					<thead>
						<tr className={styles.tableTitle}>
							<th>Image</th>
							<th>Id</th>
							<th>Title</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>

					{products.map((product) => (
						<tbody key={product._id}>
							<tr className={styles.tableText}>
								<td>
									<Image src={product.img} alt='' width={50} height={50} objectFit='cover' />
								</td>
								<td>{product._id.slice(0, 5)}...</td>
								<td>{product.title}</td>
								<td>${product.prices[0].toFixed(2)}</td>
								{/* TODO: Display all price with map */}
								<td>
									<button className={`${styles.button} ${styles.buttonEdit}`}>Edit</button>
									<button onClick={() => handleDelete(product._id)} className={`${styles.button} ${styles.buttonDelete}`}>
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
			<div className={styles.item}>
				<h1 className={styles.title}>Orders</h1>
				<table className={styles.table}>
					<thead>
						<tr className={styles.tableTitle}>
							<th>Id</th>
							<th>Customer</th>
							<th>Total</th>
							<th>Payment</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>

					{ordersList.map((order) => (
						<tbody key={order._id}>
							<tr className={styles.tableText}>
								<td>{order._id.slice(0, 5)}...</td>
								<td>{order.customer}</td>
								<td>${order.total.toFixed(2)}</td>
								<td>{order.method === 0 ? <span>cash</span> : <span>paid</span>}</td>
								<td>{status[order.status]}</td>
								{order.status === 2 ? (
									<td></td>
								) : (
									<td>
										<button onClick={() => handleNextStage(order._id)} className={`${styles.button} ${styles.buttonNextStage}`}>
											Next Stage
										</button>
									</td>
								)}
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</div>
	)
}
// TODO: Create config file for Axios
export const getServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || ''

	if (myCookie.token !== process.env.TOKEN) {
		return {
			redirect: {
				destination: '/admin/login',
				permanent: false,
			},
		}
	}

	const productsRes = await axios.get(`http://localhost:3000/api/products`)
	const ordersRes = await axios.get(`http://localhost:3000/api/orders`)
	return {
		props: {
			products: productsRes.data,
			orders: ordersRes.data,
		},
	}
}

export default Index
