import Link from 'next/link'
import styles from './navbar.module.css'

const Navbar = () => {
	return (
			<nav id={styles.nav}>
				<Link href='/'>
					<a className={styles.link}>About</a>
				</Link>
				<Link href='/whoisthisis'>
					<a className={styles.link}>WhoIsThisIs</a>
				</Link>
				<Link href='/randoBrew-1000'>
					<a className={styles.link}>RandoBrew 1000</a>
				</Link>
				<Link href='/rando-stringo'>
					<a className={styles.link}>RandoStringo</a>
				</Link>
			</nav>
	)
}

export default Navbar
