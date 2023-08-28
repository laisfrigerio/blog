import styled from 'styled-components'
import theme from '../../styles/theme'

const { breakPoints, wrapper } = theme
const { primary, border01, gray300, purple500, white } = theme.colors
const { indexHigher } = theme.zIndex

const Wrapper = styled.header`
  background: ${primary};
  border: 1px solid ${border01};
  height: 5rem;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${indexHigher};

  .ico-glass-header {
    height: 40px;
    width: 40px;

    @media ${breakPoints.mediaMax487} {
      width: 50px !important;
    }
  }
`

const Nav = styled.nav`
  height: inherit;
  margin-left: 5rem;

  @media ${breakPoints.mediaMax487} {
    margin-left: 2.5rem;
  }

  a {
    color: ${gray300};
    display: inline-block;
    height: inherit;
    line-height: 5rem;
    padding: 0 0.5rem;
    position: relative;
    text-decoration: none;
    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: ${white};
    }

    &.active {
      color: ${purple500};
      font-weight: bold;
      &:after {
        background-color: ${purple500};
        border-radius: 3px 3px 0 0;
        bottom: 1px;
        content: '';
        height: 3px;
        left: 0;
        position: absolute;
        width: 100%;
      }
    }

    @media ${breakPoints.mediaMax487} {
      & + a {
        margin-left: 1rem;
      }
    }
  }
`

const NavLink = styled.a`
  color: ${gray300};
  display: inline-block;
  height: inherit;
  line-height: 5rem;
  padding: 0 0.5rem;
  position: relative;
  text-decoration: none;
  transition: color 0.2s;

  & + a {
    margin-left: 2rem;
  }

  &:hover {
    color: ${white};
  }

  &.active {
    color: ${purple500};
    font-weight: bold;
    &:after {
      background-color: ${purple500};
      border-radius: 3px 3px 0 0;
      bottom: 1px;
      content: '';
      height: 3px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }

  @media ${breakPoints.mediaMax487} {
    & + a {
      margin-left: 1rem;
    }
  }
`

const WrapperHeader = styled.div`
  align-items: center;
  display: flex;
  height: inherit;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${wrapper};
  padding: 0 2rem;

  @media ${breakPoints.mediaMax487} {
    padding: 0 1rem;
  }
`

export { Nav, NavLink, Wrapper, WrapperHeader }
