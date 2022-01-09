import axios from 'axios'
import styles from '../../styles/Order.module.css'
import Image from 'next/image'

const Order = ({ order }) => {
	const status = order.status

	const statusClass = (index) => {
		if (index - status < 1) return styles.done
		if (index - status == 1) return styles.inProgress
		if (index - status > 1) return styles.undone
	}

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.row}>
					<table className={styles.table}>
						<thead>
							<tr className={styles.tableTitle}>
								<th>Order ID</th>
								<th>Customer</th>
								<th>Address</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className={styles.tableText}>
								<td>
									<span className={styles.orderId}>{order._id} </span>
								</td>
								<td>
									<span className={styles.name}>{order.customer}</span>
								</td>
								<td>
									<span className={styles.address}>{order.address}</span>
								</td>

								<td>
									<span className={styles.total}>${order.total}</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className={styles.row}>
					<div className={statusClass(0)}>
						<Image src='/img/paid.png' alt='' width={30} height={30} />
						<span>Payment</span>
						<div className={styles.checkedIcon}>
							<Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={20} height={20} />
						</div>
					</div>
					<div className={statusClass(1)}>
						<Image src='/img/bake.png' alt='' width={30} height={30} />
						<span>Preparing</span>
						<div className={styles.checkedIcon}>
							<Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={20} height={20} />
						</div>
					</div>
					<div className={statusClass(2)}>
						<Image src='/img/bike.png' alt='' width={30} height={30} />
						<span>On the Way</span>
						<div className={styles.checkedIcon}>
							<Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={20} height={20} />
						</div>
					</div>
					<div className={statusClass(3)}>
						<Image src='/img/delivered.png' alt='' width={30} height={30} />
						<span>Delivered</span>
						<div className={styles.checkedIcon}>
							<Image className={styles.checkedIcon} src='/img/checked.png' alt='' width={20} height={20} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.wrapper}>
					<h2 className={styles.title}>CART TOTAL</h2>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Sub Total:</b>$79.60
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Discount:</b>$0.00
					</div>
					<div className={styles.totalText}>
						<b className={styles.totalTextTitle}>Total:</b>$79.60
					</div>
					<button disabled className={styles.button}>
						PAID
					</button>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps = async ({ params }) => {
	const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`)
	return {
		props: { order: res.data },
	}
}

export default Order
