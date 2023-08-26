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
      <Header data-testid='post-header' active='posts' />
      <Wrapper>
        <ul>
          {posts.map((post) => (
            <ListItem
              data-testid='post-list-item'
              key={post.slug}
            >
              <Link
                data-testid={`post-list-item-link-${post.slug}`}
                href={`/posts/${post.slug}`}
              >
                <PostTile
                  data-testid={`post-list-item-post-title-${post.slug}`}
                  className='title'
                >
                  {post.title}
                </PostTile>
                <PostSubtitle
                  data-testid={`post-list-item-post-sub-title-${post.slug}`}
                  className='subtitle'
                >
                  {post.excerpt}
                </PostSubtitle>
              </Link>
            </ListItem>
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
      posts: getAllPosts(['slug', 'title', 'excerpt', 'date'])
    }
  }
}
