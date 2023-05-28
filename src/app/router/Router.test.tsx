import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18next/i18nForTests';
import { Router } from './Router';

describe('Router', () => {
  it('should render 404 if path is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-path']}>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/not exist/i);
  });
});
