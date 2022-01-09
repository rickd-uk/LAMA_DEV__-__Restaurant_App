import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/Login.module.css'

const login = () => {
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [error, setError] = useState(false)
	const router = useRouter()

	const handleClick = async () => {
		try {
			await axios.post(`http://localhost:3000/api/login`, { username, password })
			router.push('/admin')
		} catch (err) {
			setError(true)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.dashboardTitle}>Admin Dashboard</h1>
				<input className={styles.input} placeholder='username' type='text' onChange={(e) => setUsername(e.target.value)} />
				<input className={styles.input} placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
				<button onClick={handleClick} className={styles.button}>
					Sign In
				</button>
				{error && <span className={styles.error}>Wrong Credentials!</span>}
			</div>
		</div>
	)
}

export default login
