import Navbar from './navbar.jsx'

const Layout = ({children}) => {
	return (
			<>
				<Navbar />
				<main>{children}</main>
			</>
	)
}

export default Layout
