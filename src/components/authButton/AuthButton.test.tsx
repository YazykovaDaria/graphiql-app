import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthButton } from './AuthButton';

describe('Auth button', () => {
  it('renders appropriate title', async () => {
    const title = 'Sign in';

    render(<AuthButton isLogout={false} link='sign-in' title={title} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByRole('button')).toHaveTextContent(title);
  });
});
