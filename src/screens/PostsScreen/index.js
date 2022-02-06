import { ListItem, PostSubtitle, PostTile } from '../../components/Posts'
import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../ui/Header'

function PostsScreen({ posts }) {
  return (
    <>
      <Header active='posts' />
      <Wrapper>
        <ul>
          {posts.map((post) => (
            <ListItem key={post.slug}>
              <a href={post.slug}>
                <PostTile className='title'>{post.title}</PostTile>
                <PostSubtitle className='subtitle'>{post.excerpt}</PostSubtitle>
              </a>
            </ListItem>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

PostsScreen.defaultProps = {
  posts: []
}

export default PostsScreen
