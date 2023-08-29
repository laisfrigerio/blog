import styled from 'styled-components'
import theme from '../../styles/theme'

const { breakPoints, fontFamily } = theme
const { border01, purple500, white } = theme.colors

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
  max-width: 992px;
`

const FeaturedPosts = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 768px;
  width: 100%;
`

const FeaturedPostList = styled.ul`
  width: 100%;
`

const FeaturedPost = styled.li`
  border: 1px solid ${border01};
  margin-bottom: 2rem;
  transition: box-shadow 0.2s;

  &:hover {
    h2 {
      color: ${purple500};
    }
  }
`

const FeaturedPostDate = styled.span`
  color: #6b6b6b;
`

const FeaturedPostTitle = styled.h2`
  color: ${white};
  font-family: ${fontFamily.firaCode} !important;
  font-size: 35px !important;
  margin-top: 12px;
  transition: color 0.2s;

  @media ${breakPoints.mediaMax768} {
    font-size: 28px !important;
  }

  @media ${breakPoints.mediaMax500} {
    font-size: 24px !important;
  }
`

const FeaturedPostSubTitle = styled.h3`
  color: #969696;
  font-family: ${fontFamily.montserrat} !important;
  font-weight: normal;
  margin-top: 12px;
  font-size: 14px;
  line-height: 150%;
`

const FeaturedPostImage = styled.picture`
  position: relative;
  max-width: 800px;
  width: 100%;

  img {
    border-bottom: 1px solid #242424;
    position: relative !important;
    height: 230px !important;
    object-fit: cover;
  }
`

const FeaturedPostHeader = styled.div`
  padding: 24px;
`

export {
  FeaturedPost,
  FeaturedPostDate,
  FeaturedPostHeader,
  FeaturedPostImage,
  FeaturedPostList,
  FeaturedPostTitle,
  FeaturedPostSubTitle,
  FeaturedPosts,
  HomeWrapper
}
