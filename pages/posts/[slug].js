import { PageTitle } from '../../src/components/PageTitle'
import { Post, PostContent, PostTile, PostSubtitle } from '../../src/components/Posts'
import { Wrapper } from '../../src/components/Wrapper'
import { Header } from '../../src/ui/Header'
import { getPost, getAllPosts } from '../../src/utils/getPosts'

export default function PostPage({ post }) {
  return (
    <>
      <PageTitle>{post.title} | Blog Lais Frigério</PageTitle>
      <Header active='posts' />
      <Wrapper>
        <Post>
          <PostTile className='title'>{post.title}</PostTile>
          <PostSubtitle className='subtitle'>{post.excerpt}</PostSubtitle>
          <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </Post>
      </Wrapper>
    </>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      post: getPost(`${params.slug}.md`, ['slug', 'title', 'excerpt', 'content'])
    }
  }
}
