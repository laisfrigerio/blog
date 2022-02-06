import { Link } from '../../src/components/Link'
import { PageTitle } from '../../src/components/PageTitle'
import { ListItem, PostSubtitle, PostTile } from '../../src/components/Posts'
import { Wrapper } from '../../src/components/Wrapper'
import { Header } from '../../src/ui/Header'
import { getAllPosts } from '../../src/utils/getPosts'

export default function PostsPage({ posts }) {
  return (
    <>
      <PageTitle>Últimos Posts | Lais Frigério</PageTitle>
      <Header active='posts' />
      <Wrapper>
        <ul>
          {posts.map((post) => (
            <Link key={post.slug} href={post.slug} passHref>
              <ListItem>
                <a>
                  <PostTile className='title'>{post.title}</PostTile>
                  <PostSubtitle className='subtitle'>{post.excerpt}</PostSubtitle>
                </a>
              </ListItem>
            </Link>
          ))}
        </ul>
      </Wrapper>
    </>
  )
}

PostsPage.defaultProps = {
  posts: []
}

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(['slug', 'title', 'excerpt'])
    }
  }
}
