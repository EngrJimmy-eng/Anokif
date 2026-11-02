import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

vi.mock('../components/Hero', () => ({
  default: () => <div>Hero component</div>,
}));

vi.mock('../components/VideoCarousel', () => ({
  default: () => <div>Video carousel component</div>,
}));

vi.mock('../components/WhatWeDo', () => ({
  default: () => <div>What we do component</div>,
}));

import Home from './Home';

describe('Home page', () => {
  it('displays the initial carousel slide', () => {
    render(<Home />);

    const carousel = screen.getByRole('region', {
      name: 'Anokif Express services',
    });

    expect(
      within(carousel).getByRole('heading', {
        name: 'Clearing & Forwarding',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByRole('img', {
        name: 'Anokif Express plane offloading cargo',
      }),
    ).toHaveAttribute('src', '/planeoffloading2.jpeg');
  });

  it('moves to the next slide', () => {
    render(<Home />);

    const carousel = screen.getByRole('region', {
      name: 'Anokif Express services',
    });

    userEvent.click(
      within(carousel).getByRole('button', { name: 'Next slide' }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Warehousing',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByRole('img', {
        name: 'Anokif Express warehousing',
      }),
    ).toHaveAttribute('src', '/warehouse.jpg');
  });

  it('moves to the previous slide and wraps around', () => {
    render(<Home />);

    const carousel = screen.getByRole('region', {
      name: 'Anokif Express services',
    });

    userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Previous slide',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Haulage Services',
      }),
    ).toBeInTheDocument();

    userEvent.click(
      within(carousel).getByRole('button', { name: 'Next slide' }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Clearing & Forwarding',
      }),
    ).toBeInTheDocument();
  });

  it('selects a slide using its indicator', () => {
    render(<Home />);

    const carousel = screen.getByRole('region', {
      name: 'Anokif Express services',
    });

    userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Show slide 3: Haulage Services',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Haulage Services',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByRole('button', {
        name: 'Show slide 3: Haulage Services',
      }),
    ).toHaveAttribute('aria-current', 'true');
  });
});
