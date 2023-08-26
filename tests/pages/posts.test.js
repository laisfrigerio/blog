import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import PostsPage from '../../pages/posts'

describe('Post page component', () => {
  it("should render the Post page with a header without post list", () => {
    render(<PostsPage />);
    expect(screen.getByTestId('post-header')).toBeInTheDocument();
    expect(screen.queryByTestId('post-list-item')).toBe(null);
  })

  describe('should render the Post page with a header and one post', () => {
    const slug = 'how-to-create-a-react-app'
    const post = {
        slug,
        title: 'How to create a React App',
        excerpt: 'Learn in this article how to create a React App from scratch',
        date: '2021-03-01'
    }

    it('the post should be in the document', () => {
        render(<PostsPage posts={[post]} />);
        expect(screen.getByTestId(`post-list-item-link-${slug}`)).toBeInTheDocument()
        expect(screen.getByTestId(`post-list-item-post-title-${slug}`)).toBeInTheDocument()
        expect(screen.getByTestId(`post-list-item-post-sub-title-${slug}`)).toBeInTheDocument()
    })

    it('the post title should be in the document', () => {
        render(<PostsPage posts={[post]} />);
        expect(screen.getByText(post.title)).toBeInTheDocument()
    })

    it('the post excerpt should be in the document', () => {
        render(<PostsPage posts={[post]} />);
        expect(screen.getByText(post.excerpt)).toBeInTheDocument()
    })
  })

  describe('should render the 2 posts in the page', () => {
    const slug1 = 'how-to-create-a-react-app'
    const post1 = {
        slug: slug1,
        title: 'How to create a React App',
        excerpt: 'Learn in this article how to create a React App from scratch',
        date: '2021-03-01'
    }

    const slug2 = '3-tips-to-create-a-react-app'
    const post2 = {
        slug: slug2,
        title: '3 tips to create a React App',
        excerpt: 'Learn in 3 tips how to create a React App from scratch',
        date: '2021-03-02'
    }

    it('should have 2 posts in the document', () => {
        render(<PostsPage posts={[post1, post2]} />);
        expect(screen.getByTestId(`post-list-item-post-title-${slug1}`)).toBeInTheDocument()
        expect(screen.getByTestId(`post-list-item-post-title-${slug2}`)).toBeInTheDocument()
    })

    it('should have the title from both posts in the document', () => {
        render(<PostsPage posts={[post1, post2]} />);
        expect(screen.getByText(post1.title)).toBeInTheDocument()
        expect(screen.getByText(post2.title)).toBeInTheDocument()
    })

    it('should have the except from both posts in the document', () => {
        render(<PostsPage posts={[post1, post2]} />);
        expect(screen.getByText(post1.excerpt)).toBeInTheDocument()
        expect(screen.getByText(post2.excerpt)).toBeInTheDocument()
    })
  })
})
