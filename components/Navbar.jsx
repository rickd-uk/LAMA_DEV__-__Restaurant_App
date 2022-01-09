import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
	const quantity = useSelector((state) => state.cart.quantity)
	const router = useRouter()

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callBtn}>
					<Image src='/img/telephone.png' alt='' width='32px' height='32px' />
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>
						<span>ORDER NOW!</span>
					</div>
					<div className={styles.text}>01876 465723</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<Link href='/'>
						<li className={styles.listItem}>Home</li>
					</Link>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<Image src='/img/logo.png' alt='' width='160px' height='69px' />
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<Link href='/cart' passHref>
				<div className={styles.item}>
					<div className={styles.cart}>
						<Image src='/img/cart.png' alt='' width='30px' height='30px' />
						<div className={styles.counter}>{quantity}</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Navbar
