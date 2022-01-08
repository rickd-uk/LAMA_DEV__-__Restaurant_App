import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home({ productList }) {
	return (
		<div className={styles.container}>
			<Featured />
			<ProductList productList={productList} />
		</div>
	)
}

export const getServerSideProps = async () => {
	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			productList: res.data,
		},
	}
}
