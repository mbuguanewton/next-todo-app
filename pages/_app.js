import App from 'next/app'
import '../src/scss/main.scss'
import AuthProvider from '../src/utils/context/User'

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext)

    return { ...appProps }
}

export default MyApp
