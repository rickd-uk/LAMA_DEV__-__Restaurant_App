import { forwardRef } from 'react'
import styles from '../styles/ProductCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const ImageComp = forwardRef((props, ref) => <Image {...props} />)

const ProductCard = ({ product }) => {
	return (
		<div className={styles.container}>
			<Link href={`/product/${product._id}`}>
				<ImageComp className={styles.img} src={product.img} alt='' width='500' height='500' />
			</Link>

			<h1 className={styles.title}> {product.title}</h1>
			<span className={styles.price}>${product.prices[0]}</span>
			<p className={styles.desc}>{product.desc}</p>
		</div>
	)
}

export default ProductCard
