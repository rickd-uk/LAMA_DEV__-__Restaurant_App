import styles from '../styles/Featured.module.css'
import Image from 'next/image'
import { useState } from 'react'

const Featured = () => {
	const images = ['/img/featured.png', '/img/featured2.png', '/img/featured3.png']

	const handleChangeImg = (direction) => {
		if (direction == 'left') {
			setIndex(index <= 0 ? images.length - 1 : index - 1)
		} else if (direction == 'right') {
			console.log(index)
			setIndex(index >= images.length - 1 ? 0 : index + 1)
		}
	}

	const [index, setIndex] = useState(0)
	console.log(index)

	return (
		<div className={styles.container}>
			<div className={styles.arrowContainer} style={{ left: 0 }} onClick={() => handleChangeImg('left')}>
				<Image src='/img/arrowl.png' alt='' layout='fill' objectFit='contain' />
			</div>

			<div className={styles.wrapper} style={{ transform: `translateX(${-100 * index}vw)` }}>
				{images.map((img) => (
					<div className={styles.imgContainer} key={img}>
						<Image src={img} layout='fill' objectFit='contain' />
					</div>
				))}
			</div>
			<div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleChangeImg('right')}>
				<Image src='/img/arrowr.png' alt='' layout='fill' objectFit='contain' />
			</div>
		</div>
	)
}

export default Featured
