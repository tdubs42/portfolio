import styles from './UnderConstruction.module.css'

const UnderConstruction = () => {
	return (
			<article id={styles.container}>
				<h1 id={styles.header}>We'll be back soon!</h1>
				<section>
					<p>Sorry for the inconvenience but I'm performing a total portfolio overhaul at the moment. If you need to you
						can always message me <a className={styles.link} href="https://linkedin.com/in/tdubs42">on LinkedIn</a>,
						if not directly via <a className={styles.link}
																	 href="mailto:tdubs@duck.com">e-mail</a>!</p>
					<p>- tdubs</p>
				</section>
			</article>
	)
}

export default UnderConstruction
