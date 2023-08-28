import styled from 'styled-components'
import theme from '../../styles/theme'

const { breakPoints, fontFamily } = theme
const { border01, gray200, gray350, gray400, purple500, white } = theme.colors

const ListItem = styled.li`
  border-bottom: 1px solid ${gray400};
  cursor: pointer;
  padding: 1.5rem 0;

  &:hover {
    .title {
      color: ${white};
    }
  }
`

const Post = styled.article`
  max-width: 800px;

  .title {
    color: ${purple500};
    font-family: ${fontFamily.firaCode} !important;
    font-size: 60px !important;
    font-weight: bold;
    margin-bottom: 2rem !important;
    transition: color 0.2s;

    @media ${breakPoints.mediaMax992} {
      font-size: 45px !important;
    }

    @media ${breakPoints.mediaMax487} {
      font-size: 35px !important;
    }
  }

  .subtitle {
    color: ${white};
    border-bottom: 1px solid ${gray400};
    font-size: 18px !important;
    padding-bottom: 1.5rem;
  }
`

const PostContent = styled.div`
  color: ${gray350};
  margin: 2.5rem 0 5rem;

  * {
    color: ${gray200};
    font-size: 18px !important;
    line-height: 200%;
    margin-bottom: 2rem !important;

    @media ${breakPoints.mediaMax500} {
      font-size: 16px !important;
    }
  }

  hr {
    border: 1px solid ${border01};
  }

  ul li {
    margin-bottom: 0.850rem !important;
  }

  h2 {
    color: ${white};
    font-family: ${fontFamily.firaCode} !important;
    font-size: 32px !important;

    @media ${breakPoints.mediaMax500} {
      font-size: 24px !important;
    }
  }

  a {
    color: ${purple500};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: initial;
    padding-left: 2rem;

    li {
      margin-bottom: 1rem;

      strong {
        color: ${purple500};
      }
    }
  }
`

const PostTile = styled.h1`
  font-family: ${fontFamily.montserrat} !important;
  font-weight: bold;
  margin-bottom: 0.5rem !important;
  transition: color 0.2s;
`

const PostSubtitle = styled.h2`
  color: ${gray200};
  font-family: ${fontFamily.montserrat};
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 200%;
`

const PostImage = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;

  img {
    position: relative !important;
    height: auto !important;
  }
`

export { ListItem, Post, PostContent, PostImage, PostTile, PostSubtitle }
