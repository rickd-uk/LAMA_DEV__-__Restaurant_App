import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<Image src='/img/bg.png' layout='fill' objectFit='cover' />
			</div>
			<div className={styles.item}>
				<div className={styles.card}>
					<div className={styles.motto}>
						<h2>Oh Yes, We make the best pizzas around!</h2>
					</div>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Find Our Restaurants</h1>
					<p className={styles.text}>
						1623 Peters Way <br />
						London
					</p>
					<p className={styles.text}>
						1623 Peters Way <br />
						London
					</p>
					<p className={styles.text}>
						1623 Peters Way <br />
						London
					</p>
					<p className={styles.text}>
						1623 Peters Way <br />
						London
					</p>
				</div>
				<div className={styles.card}>
					<h1 className={styles.title}>Working Hours</h1>
					<p className={styles.text}>
						MONDAY - FRIDAY
						<br /> 8.00 - 22:00
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
