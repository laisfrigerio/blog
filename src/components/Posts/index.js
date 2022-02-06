import styled from 'styled-components'
import theme from '../../styles/theme'

const { fontFamily } = theme
const { border01, gray350, gray400, green500 } = theme.colors

const ListItem = styled.li`
  border-bottom: 1px solid ${gray400};
  cursor: pointer;
  margin-bottom: 2.5rem;
  padding: 1.5rem 0;

  &:hover {
    .title {
      color: ${border01};
    }
  }
`

const Post = styled.article`
  max-width: 800px;

  .title {
    font-family: ${fontFamily.montserrat} !important;
    font-size: 2rem !important;
    font-weight: bold;
    margin-bottom: 2rem !important;
    transition: color 0.2s;
  }

  .subtitle {
    font-size: 18px !important;
  }
`

const PostContent = styled.div`
  color: ${gray350};
  margin: 1.5rem 0 5rem;

  * {
    font-size: 18px !important;
    line-height: 150%;
    margin-bottom: 2rem !important;
  }

  a {
    color: ${green500};

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
        color: ${green500};
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
  color: ${gray350};
  font-family: ${fontFamily.montserrat};
  font-size: 0.8rem;
  font-weight: normal;
  line-height: 150%;
`

export { ListItem, Post, PostContent, PostTile, PostSubtitle }
