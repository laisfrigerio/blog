import NextLink from 'next/link'

function Link({ href, children, ...props }) {
  return (
    <NextLink {...props} href={href}>
      {children}
    </NextLink>
  )
}

export { Link }
