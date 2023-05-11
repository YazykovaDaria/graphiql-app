import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'src/i18next/i18nForTests';
import { SignUpPage } from './SignUpPage';

describe('Sign up page', () => {
  it('renders appropriate title', () => {
    render(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <SignUpPage />
        </I18nextProvider>
      </MemoryRouter>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/sign up/i);
  });
});
