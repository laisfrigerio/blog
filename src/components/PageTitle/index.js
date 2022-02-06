import NextHead from 'next/head'

function PageTitle({ children }) {
  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  )
}

export { PageTitle }
