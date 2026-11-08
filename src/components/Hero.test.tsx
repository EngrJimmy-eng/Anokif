import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import Hero from './Hero';

describe('Hero component', () => {
  it('renders the company name', () => {
    render(<Hero />);

    expect(
      screen.getByRole('heading', {
        name: 'ANOKIF EXPRESS SERVICES LIMITED',
      }),
    ).toBeInTheDocument();
  });

  it('renders the company description', () => {
    render(<Hero />);

    expect(
      screen.getByText('Licensed Customs Logistics Agency'),
    ).toBeInTheDocument();
  });

  it('renders the services offered', () => {
    render(<Hero />);

    expect(
      screen.getByText(
        'Haulage • Warehousing • Import & Export • General Merchandise',
      ),
    ).toBeInTheDocument();
  });

  it('renders the hero section with the home ID', () => {
    const { container } = render(<Hero />);

    expect(container.querySelector('#home')).toBeInTheDocument();
  });
});
