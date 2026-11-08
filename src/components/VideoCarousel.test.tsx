import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';

import VideoCarousel from './VideoCarousel';

function renderCarousel() {
  render(<VideoCarousel />);

  const carousel = screen.getByRole('region', {
    name: 'Freight services',
  });

  return { carousel };
}

describe('VideoCarousel component', () => {
  it('displays the initial Air Freight slide', () => {
    const { carousel } = renderCarousel();

    expect(
      within(carousel).getByRole('heading', {
        name: 'Air Freight Services',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByText(
        'Efficient global delivery via air cargo.',
      ),
    ).toBeInTheDocument();

    const video = carousel.querySelector('video');

    expect(video).toHaveAttribute(
      'aria-label',
      'Air Freight Services',
    );
  });

  it('moves to the next Sea Freight slide', async () => {
    const { carousel } = renderCarousel();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Next freight service',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Sea Freight Services',
      }),
    ).toBeInTheDocument();

    expect(
      within(carousel).getByText(
        'Reliable ocean shipping for bulk goods.',
      ),
    ).toBeInTheDocument();

    expect(carousel.querySelector('video')).not.toBeInTheDocument();
  });

  it('moves to the previous slide and wraps around', async () => {
    const { carousel } = renderCarousel();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Previous freight service',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Sea Freight Services',
      }),
    ).toBeInTheDocument();

    await userEvent.click(
      within(carousel).getByRole('button', {
        name: 'Next freight service',
      }),
    );

    expect(
      within(carousel).getByRole('heading', {
        name: 'Air Freight Services',
      }),
    ).toBeInTheDocument();
  });

  it('selects a slide using its indicator', async () => {
    const { carousel } = renderCarousel();

    const indicator = within(carousel).getByRole('button', {
      name: 'Show Sea Freight Services',
    });

    await userEvent.click(indicator);

    expect(
      within(carousel).getByRole('heading', {
        name: 'Sea Freight Services',
      }),
    ).toBeInTheDocument();

    expect(indicator).toHaveAttribute('aria-current', 'true');
  });

  it('renders the correct video source for Air Freight', () => {
    const { carousel } = renderCarousel();

    const video = carousel.querySelector('video');

    expect(video?.querySelector('source')).toHaveAttribute(
      'src',
      '/videos/air-freight.mp4',
    );

    expect(video?.querySelector('source')).toHaveAttribute(
      'type',
      'video/mp4',
    );
  });
});
