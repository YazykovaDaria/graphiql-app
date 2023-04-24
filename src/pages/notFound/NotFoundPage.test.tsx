import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { NotFoundPage } from './NotFoundPage';

describe('Not found page', () => {
  it('render title', () => {
    render(<NotFoundPage />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not found');
  });
});
