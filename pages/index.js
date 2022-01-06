import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pizza Restaurant</title>
				<meta name='description' content='Great pizza place' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Featured />
			<ProductList />
		</div>
	)
}
