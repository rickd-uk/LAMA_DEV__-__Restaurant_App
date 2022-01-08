import styles from '../styles/ProductList.module.css'
import ProductCard from './ProductCard'

const ProductList = ({ productList }) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE ULTIMATE PIZZA IS HERE!</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut debitis qui neque eos amet quas quia minima numquam molestias nisi
				voluptatem totam ipsum adipisci, unde error aliquid, id, rem asperiores delectus ullam? Vitae quam quia laborum laboriosam commodi
				asperiores amet!
			</p>
			<div className={styles.wrapper}>
				{productList.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</div>
	)
}

export default ProductList
