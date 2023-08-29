import { GlobalStyle } from '../src/styles/global'
import { Footer } from '../src/ui/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
