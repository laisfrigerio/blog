import styled from 'styled-components'
import theme from '../../styles/theme'

const { fontFamily, wrapper } = theme
const { gray350, green500 } = theme.colors

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${wrapper};
  padding: 6rem 0;

  h1 {
    color: ${green500};
    font-family: ${fontFamily.firaCode};
    font-size: 18px;
    margin-bottom: 2rem;
  }

  .ico {
    height: 200px;
    width: 200px;

    path {
      fill: ${gray350};
    }
  }
`

export { Wrapper }
