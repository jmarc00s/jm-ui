import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './Navbar';

describe('<Navbar />', () => {
  it('should render the Navbar component', () => {
    render(<Navbar>test</Navbar>);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render the Navbar start component', () => {
    render(
      <Navbar>
        <Navbar.Start>test</Navbar.Start>
      </Navbar>,
    );
    const navbarStart = screen.getByTestId('navbar-start');
    expect(navbarStart).toBeInTheDocument();
    expect(navbarStart).toHaveClass('navbar-start');
  });

  it('should render the Navbar center component', () => {
    render(
      <Navbar>
        <Navbar.Center>test</Navbar.Center>
      </Navbar>,
    );
    const navbarCenter = screen.getByTestId('navbar-center');
    expect(navbarCenter).toBeInTheDocument();
    expect(navbarCenter).toHaveClass('navbar-center');
  });

  it('should render the Navbar end component', () => {
    render(
      <Navbar>
        <Navbar.End>test</Navbar.End>
      </Navbar>,
    );
    const navbarEnd = screen.getByTestId('navbar-end');
    expect(navbarEnd).toBeInTheDocument();
    expect(navbarEnd).toHaveClass('navbar-end');
  });
});
