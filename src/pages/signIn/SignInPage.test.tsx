import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'src/i18next/i18nForTests';
import { vi } from 'vitest';
import { SignInPage } from './SignInPage';

vi.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({ email: undefined, checked: true }),
}));

describe('Sign in page', () => {
  it('renders appropriate title', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <SignInPage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/sign in/i);
  });
});
