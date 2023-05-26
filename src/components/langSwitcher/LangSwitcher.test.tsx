import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { LangSwitcher, locales } from './LangSwitcher';

const languages = Object.keys(locales);
const [defaultLang, nextLang] = languages;

beforeEach(() => {
  vi.mock('react-i18next', () => ({
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
          resolvedLanguage: defaultLang,
        },
      };
    },
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  }));
});

describe('LangSwitcher', () => {
  test('renders the default language', () => {
    render(<LangSwitcher />);
    screen.getByRole<HTMLButtonElement>('button');
    const img = screen.getByRole<HTMLImageElement>('img');

    const src = locales[defaultLang].img;
    expect(img).toHaveAttribute('src', src);
    expect(img).toBeVisible();
  });

  test('changes the language when a new language is selected', async () => {
    render(<LangSwitcher />);

    const button = screen.getByRole('button');

    screen.getByTestId(`lng-${defaultLang}`);

    userEvent.click(button);

    screen.getByTestId(`lng-${nextLang}`);
  });
});
