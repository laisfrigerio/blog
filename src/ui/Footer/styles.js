import styled from 'styled-components'
import theme from '../../styles/theme'

const { breakPoints, fontFamily } = theme
const { gray350, gray375 } = theme.colors

const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  span {
    color: ${gray375};
    font-family: ${fontFamily.firaCode};
  }

  .avatar {
    height: auto;
    margin-top: 20px;
    width: 60px;
  }

  .social-media {
    a {
      width: 30px;
  
      &:last-child {
        width: 20px;
      }
    }
  
    svg {
      height: 20px;
      width: 20px;
  
      path {
        fill: ${gray350};
      }
    }
  }

  @media ${breakPoints.mediaMax992} {
    margin-top: 0;
  }
`

export { Wrapper }
