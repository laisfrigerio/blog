import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Header } from '../../src/ui/Header'

describe('Header component', () => {
  it("should render the Header component with it's links", () => {
    render(<Header />);

    expect(screen.getByTestId('header-link-home')).toBeInTheDocument();
    expect(screen.getByTestId('header-link-posts')).toBeInTheDocument();
  })
})
