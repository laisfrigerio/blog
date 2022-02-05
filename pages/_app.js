import Head from 'next/head'
import { GlobalStyle } from '../src/styles/global'
import { Footer } from '../src/ui/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog | Lais Frigério</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="author" content="Lais Frigério"></meta>
        <meta name="description" content="Software Developer"></meta>
        <meta name="keywords" content="software developer, full-stack, back-end, front-end"></meta>
        <meta name="robots" content=""></meta>
        <meta name="revisit-after" content="1 day"></meta>
        <meta name="language" content="Portuguese"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta property="og:title" content="Lais Frigério - Software Developer"></meta>
        <meta property="og:description" content="Olá, meu nome é Lais e sou formada em Análise e Desenvolvimento de Sistemas pela UFPR com MELHOR índice de desempenho acadêmico. Atualmente estou cursando minha primeira Especialização em Engenharia de Software pela mesma instituição. Venha conhecer mais sobre mim em meu site 💜"></meta>
        <meta property="og:url" content="https://blog.laisfrigerio.com.br/"></meta>
        <meta property="og:image" content="https://blog.laisfrigerio.com.br/images/avatar-lais.jpg"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon-green.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <main>
        <GlobalStyle />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp
