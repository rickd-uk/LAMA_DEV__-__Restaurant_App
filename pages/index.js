import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import Add from '../components/Add'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import ProductList from '../components/ProductList'
import { useState } from 'react'
import AddButton from '../components/AddButton'

export default function Home({ productList, admin }) {
	const [close, setClose] = useState(false)

	return (
		<div className={styles.container}>
			<Featured />
			{admin && <AddButton setClose={setClose} />}
			<ProductList productList={productList} />
			{!close && <Add setClose={setClose} />}
		</div>
	)
}

export const getServerSideProps = async (ctx) => {
	const myCookie = ctx.req?.cookies || ''
	let admin = false

	if (myCookie.token === process.env.TOKEN) {
		admin = true
	}

	const res = await axios.get('http://localhost:3000/api/products')
	return {
		props: {
			productList: res.data,
			admin,
		},
	}
}
