import styled from 'styled-components'
import theme from '../../styles/theme'

const { fontFamily, wrapper } = theme
const { purple500 } = theme.colors

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${wrapper};
  padding: 2rem 2rem 1rem;

  h1 {
    color: ${purple500};
    font-family: ${fontFamily.firaCode};
    font-size: 18px;
    margin-bottom: 2rem;
  }
`

export { Wrapper }
