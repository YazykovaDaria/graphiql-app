import { render, screen } from '@testing-library/react';
import i18n from 'src/i18next/i18nForTests';

import { I18nextProvider } from 'react-i18next';
import userEvent from '@testing-library/user-event';
import { LangSwitcher } from './LangSwitcher';

describe('LangSwitcher', () => {
  test('renders the default language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );

    expect(screen.getByRole('button')).toHaveTextContent('en');
  });

  test('changes the language when a new language is selected', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(screen.getByRole('button')).toHaveTextContent('ru');
  });
});
