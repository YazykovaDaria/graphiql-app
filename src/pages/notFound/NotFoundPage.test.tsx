import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/i18next/i18nForTests';
import { NotFoundPage } from './NotFoundPage';

describe('Not found page', () => {
  it('renders title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <NotFoundPage />
      </I18nextProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/not exist/i);
  });
});
