import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { LinkBtnWithAuth } from './LinkBtnWithAuth';

describe('Auth button', () => {
  it('renders appropriate title', async () => {
    const title = 'Sign in';

    render(<LinkBtnWithAuth isLogout={false} link='sign-in' title={title} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole('button')).toHaveTextContent(title);
  });
});
