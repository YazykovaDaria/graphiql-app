import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Router } from './Router';

describe('Router', () => {
  it('should render 404 if path is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-path']}>
        <Router />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/not found/i);
  });
});
