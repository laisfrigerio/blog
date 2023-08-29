import styled from 'styled-components'
import theme from '../../styles/theme'

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

export {
  FeaturedPostList,
  FeaturedPosts,
  HomeWrapper
}
