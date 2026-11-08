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

function renderCarousel() {
  render(<Home />);

  const carousel = screen.getByRole('region', {
    name: 'Anokif Express services',
  });

  return { carousel };
}

describe('Home page', () => {
  it('displays the initial Warehousing slide', () => {
    const { carousel } = renderCarousel();

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

  it('moves to the next Haulage slide', async () => {
    const { carousel } = renderCarousel();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Next slide',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Haulage Services',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByRole('img', {
        name: 'Anokif Express haulage truck',
      }),
    ).toHaveAttribute('src', '/lorry.jpg');
  });

  it('moves to the previous slide and wraps around', async () => {
    const { carousel } = renderCarousel();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Previous slide',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Haulage Services',
      }),
    ).toBeInTheDocument();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Next slide',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Warehousing',
      }),
    ).toBeInTheDocument();
  });

  it('selects a slide using its indicator', async () => {
    const { carousel } = renderCarousel();

    const indicator = within(carousel).getByRole('button', {
      name: 'Show slide 2: Haulage Services',
    });

    await userEvent.click(indicator);

    expect(
      within(carousel).getByRole('heading', {
        name: 'Haulage Services',
      }),
    ).toBeInTheDocument();

    expect(indicator).toHaveAttribute('aria-current', 'true');
  });
});
