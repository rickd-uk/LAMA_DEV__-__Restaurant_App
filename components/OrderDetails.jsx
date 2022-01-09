import styles from '../styles/OrderDetail.module.css'
import { useState } from 'react'

const OrderDetails = ({ total, createOrder }) => {
	const [customer, setCustomer] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [address, setAddress] = useState('')

	const handleClick = () => {
		// method: 0 for cash order; 1 for paypal
		createOrder({ customer, address, total, method: 0 })
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>You will pay $12 after delivery.</h1>
				<div className={styles.item}>
					<label className={styles.label}>Full name</label>
					<input type='text' placeholder='John Doe' className={styles.input} onChange={(e) => setCustomer(e.target.value)} />
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Phone Number</label>
					<input type='text' placeholder='+2 453 324 32' className={styles.input} onChange={(e) => setPhoneNumber(e.target.value)} />
				</div>
				<div className={styles.item}>
					<label className={styles.label}>Address</label>
					<textarea
						rows={5}
						type='text'
						placeholder='329 Walker Street'
						className={styles.textarea}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<button className={styles.button} onClick={handleClick}>
					Make Order
				</button>
			</div>
		</div>
	)
}

export default OrderDetails
