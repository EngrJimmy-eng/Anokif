import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import WhatWeDo from './WhatWeDo';

describe('WhatWeDo component', () => {
  it('renders the section heading', () => {
    render(<WhatWeDo />);

    expect(
      screen.getByRole('heading', { name: 'WHAT WE DO' }),
    ).toBeInTheDocument();
  });

  it('renders the company description', () => {
    render(<WhatWeDo />);

    expect(
      screen.getByText(/Anokif Express Services Limited is a/),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/seamless logistics from port to destination/),
    ).toBeInTheDocument();
  });

  it('emphasizes its customs licensing and clearing services', () => {
    render(<WhatWeDo />);

    expect(
      screen.getByText('Customs Licensed Agency').tagName,
    ).toBe('STRONG');

    expect(
      screen.getByText('clearing and forwarding').tagName,
    ).toBe('STRONG');
  });

  it('renders the three service articles', () => {
    render(<WhatWeDo />);

    const articles = screen.getAllByRole('article');

    expect(articles).toHaveLength(3);

    expect(
      within(articles[0]).getByRole('heading', {
        name: 'Clearing Imported Goods',
      }),
    ).toBeInTheDocument();

    expect(
      within(articles[1]).getByRole('heading', {
        name: 'Forwarding Exports',
      }),
    ).toBeInTheDocument();

    expect(
      within(articles[2]).getByRole('heading', {
        name: 'Global Reach',
      }),
    ).toBeInTheDocument();
  });

  it('renders the correct section ID', () => {
    const { container } = render(<WhatWeDo />);

    expect(
      container.querySelector('#what-we-do'),
    ).toBeInTheDocument();
  });
});
