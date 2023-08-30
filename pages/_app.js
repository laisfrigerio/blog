import Head from 'next/head'
import { GlobalStyle } from '../src/styles/global'
import { Footer } from '../src/ui/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta key="og:title" property="og:title" content="Lais Frigério - Software Developer"></meta>
        <meta key="og:description" property="og:description" content="Olá, meu nome é Lais e sou formada em Análise e Desenvolvimento de Sistemas pela UFPR pós-graduada em Engenharia de Software pela mesma instituição. Aqui eu compartilho meus conhecimentos e experiências 💜"></meta>
        <meta key="og:url" property="og:url" content="https://blog.laisfrigerio.com.br/"></meta>
        <meta key="og:image" property="og:image" content="https://blog.laisfrigerio.com.br/images/avatar-lais.jpg"></meta>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
