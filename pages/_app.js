import Layout from '../components/layout.jsx'
import '../styles/styles.css'

// This default export is required in a new `pages/_app.js` file.
const MyApp = ({ Component, pageProps }) => {
	return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
	)
}

export default MyApp
