import Layout from '../components/Layout'
import '../styles/globals.css'
import { HeadTag as Head } from './Head'
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Head />
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
