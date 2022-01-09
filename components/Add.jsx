import { useState } from 'react'
import styles from '../styles/Add.module.css'

const Add = () => {
	const [file, setFile] = useState(null)
	const [title, setTitle] = useState(null)
	const [desc, setDesc] = useState(null)
	const [prices, setPrices] = useState(null)
	const [extra, setExtra] = useState(null)
	const [extraOptions, setExtraOptions] = useState(null)

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<span onClick={() => setClose(true)} className={styles.close}>
					X
				</span>
				<h1>Add a new Pizza</h1>
				<div className={styles.item}>
					<label className={styles.label}>Choose an image</label>
					<input type='file' />
				</div>
			</div>
		</div>
	)
}

export default Add
