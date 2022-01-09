import Head from 'next/head'

export const HeadTag = () => {
	return (
		<Head>
			<title>Pizza Restaurant</title>
			<meta name='description' content='Great pizza place' />
			<link rel='icon' href='/pizza.ico' />
		</Head>
	)
}
