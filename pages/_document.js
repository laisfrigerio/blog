import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

function MyDocument() {
  return (
    <Html>
      <Head>
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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/favicon-green.ico" />
      </Head>
      <body>
        <Main />

        <Script defer async src="https://www.googletagmanager.com/gtag/js?id=G-7TRRF5LZBD" />
        <Script id="google-analytics" defer async>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-7TRRF5LZBD');
          `}
        </Script>

        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument
