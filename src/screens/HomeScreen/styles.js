import styled from 'styled-components'
import theme from '../../styles/theme'

const { fontFamily, wrapper } = theme
const { border01, gray350, gray400, green500 } = theme.colors

const Item = styled.li`
  border-bottom: 1px solid ${gray400};
  cursor: pointer;
  margin-bottom: 2.5rem;
  padding: 1.5rem 0;

  .title {
    color: ${green500};
    font-family: ${fontFamily.montserrat};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    transition: color 0.2s;
  }

  .subtitle {
    color: ${gray350};
    font-family: ${fontFamily.montserrat};
    font-size: 0.8rem;
    line-height: 150%;
  }

  &:hover {
    .title {
      color: ${border01};
    }
  }
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${wrapper};
  padding: 2rem 2rem 1rem;

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

export { Item, Wrapper }
