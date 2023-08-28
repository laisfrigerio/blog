import styled from 'styled-components'
import theme from '../../styles/theme'

const { purple500, white } = theme.colors

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  max-height: 98px;
  padding: 1rem 0;

  a {
    width: 40px;
  }

  .ico {
    height: 30px;
    transition: filter 0.2s;
    width: 30px;

    path {
      fill: ${purple500};
      transition: fill 0.2s;
    }

    &:hover {
      filter: brightness(0.9);

      path {
      fill: ${white};
      }
    }
  }
`

export { Wrapper }
