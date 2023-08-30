import Head from 'next/head'
import Image from 'next/image'
import { Post, PostContent, PostImage, PostTile, PostSubtitle } from '../../src/components/Posts'
import { Wrapper } from '../../src/components/Wrapper'
import { Header } from '../../src/ui/Header'
import { getPost, getAllPosts } from '../../src/utils/getPosts'

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Blog Lais Frigério`}</title>
        <meta key="og:title" property="og:title" content={post.title}></meta>
        <meta key="og:description" property="og:description" content={post.excerpt}></meta>
        {post.cover && <meta key="og:image" property="og:image" content={`/images/${post.cover}`} />}
      </Head>
      <Header active='posts' />
      <Wrapper>
        <Post>
          <PostTile className='title'>{post.title}</PostTile>
          <PostSubtitle className='subtitle'>{post.excerpt}</PostSubtitle>
          {post.cover && <PostImage>
              <Image
                src={`/images/${post.cover}`}
                alt="Banner of the post"
                fill
                priority
              />
            </PostImage>}
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
      post: getPost(`${params.slug}.md`, ['slug', 'title', 'excerpt', 'content', 'cover'])
    }
  }
}
