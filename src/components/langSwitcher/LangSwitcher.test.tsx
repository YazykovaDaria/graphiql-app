import { render, screen } from '@testing-library/react';
import i18n from 'src/i18next/i18nForTests';

import { I18nextProvider } from 'react-i18next';
import userEvent from '@testing-library/user-event';
import { LangSwitcher, locales } from './LangSwitcher';

const languages = Object.keys(locales);
const [defaultLang, nextLang] = languages;

describe('LangSwitcher', () => {
  test('renders the default language', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );
    screen.getByRole<HTMLButtonElement>('button');
    const img = screen.getByRole<HTMLImageElement>('img');

    const src = locales[defaultLang].img;
    expect(img).toHaveAttribute('src', src);
    expect(img).toBeVisible();
  });

  test('changes the language when a new language is selected', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSwitcher />
      </I18nextProvider>
    );

    const button = screen.getByTestId('lng-button');

    screen.getByTestId(`lng-${defaultLang}`);

    await userEvent.click(button);

    await screen.findByTestId(`lng-${nextLang}`);
  });
});
