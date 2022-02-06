import PostsScreen from '../../src/screens/PostsScreen'
import { PageTitle } from '../../src/components/PageTitle'
import { Header } from '../../src/ui/Header'
import { getAllPosts } from '../../src/utils/getPosts'

export default function PostsPage({ posts }) {
  return (
    <>
      <PageTitle>Últimos Posts | Lais Frigério</PageTitle>
      <Header active='posts' />
      <PostsScreen posts={posts} />
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(['slug', 'title', 'excerpt'])
    }
  }
}
