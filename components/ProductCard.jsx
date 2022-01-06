import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'

const ProductCard = () => {
	return (
		<div className={styles.container}>
			<Image src='/img/pizza.png' alt='' width='500' height='500' />
			<h1 className={styles.title}> FIORI DI ZUCCA</h1>
			<span className={styles.price}>$19.99</span>
			<p className={styles.desc}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non necessitatibus voluptates temporibus quaerat blanditiis fuga omnis aut
				nobis. Eligendi, perferendis.
			</p>
		</div>
	)
}

export default ProductCard
