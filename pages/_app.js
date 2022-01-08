import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Pizza Restaurant</title>
				<meta name='description' content='Great pizza place' />
				<link rel='icon' href='/pizza.ico' />
			</Head>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
