import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './Navbar';

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('renders the company logo and navigation links', () => {
    renderNavbar();

    expect(screen.getByAltText('ANOKIF Logo')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'HOME' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('link', { name: 'SERVICES' })).toHaveAttribute(
      'href',
      '/services',
    );
    expect(screen.getByRole('link', { name: 'CONTACT' })).toHaveAttribute(
      'href',
      '/contact',
    );
    expect(screen.getByRole('link', { name: 'ABOUT' })).toHaveAttribute(
      'href',
      '/about',
    );
  });

  it('opens and closes the mobile navigation menu', () => {
    renderNavbar();

    const openButton = screen.getByRole('button', {
      name: 'Open navigation menu',
    });

    expect(openButton).toHaveAttribute('aria-expanded', 'false');

    userEvent.click(openButton);

    const closeButton = screen.getByRole('button', {
      name: 'Close navigation menu',
    });

    expect(closeButton).toHaveAttribute('aria-expanded', 'true');

    userEvent.click(closeButton);

    expect(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    ).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu when a navigation link is clicked', () => {
    renderNavbar();

    userEvent.click(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    );

    userEvent.click(screen.getByRole('link', { name: 'SERVICES' }));

    expect(
      screen.getByRole('button', { name: 'Open navigation menu' }),
    ).toHaveAttribute('aria-expanded', 'false');
  });
});
