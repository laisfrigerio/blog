import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { FeaturedPost } from '../../src/components/FeaturedPost'

describe('FeaturedPost component', () => {
  const post = {
    href: '/posts/2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript',
    title: '3 materiais para aprender testes automatizados com JavaScript',
    subtitle: '3 recursos (1 livro e 2 cursos) para você aprender e aprofundar seus conhecimentos em testes automatizados com JavaScript',
    imgSrc: '/images/home-2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript.png',
    imgAlt: 'Foto em preto e branco de uma mesa de trabalho com um monitor e computador portátil',
    date: '27/08/2023 às 23:00'
  }

  it("should render the post title (h2)", () => {
    render(<FeaturedPost {...post} />);
    expect(screen.getByText(post.title)).toBeInTheDocument();
  })

  it("should render the post sub title (h3)", () => {
    render(<FeaturedPost {...post} />);
    expect(screen.getByText(post.subtitle)).toBeInTheDocument();
  })

  it("should render the post publish date", () => {
    render(<FeaturedPost {...post} />);
    expect(screen.getByText(post.date)).toBeInTheDocument();
  })

  it("should render the post image", () => {
    render(<FeaturedPost {...post} />);
    expect(screen.getByAltText(post.imgAlt)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  })

  it("should render the post link", () => {
    render(<FeaturedPost {...post} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('href', post.href);
  })
})
