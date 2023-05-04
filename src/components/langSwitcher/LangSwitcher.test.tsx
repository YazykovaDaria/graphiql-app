import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { LangSwitcher, locales } from './LangSwitcher';

const languages = Object.keys(locales);
const [defaultLang, nextLang] = languages;

describe('LangSwitcher', () => {
  beforeAll(() => {
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

  test('renders the default language', () => {
    render(<LangSwitcher />);
    const img = screen.getByRole('img');
    const src = locales[defaultLang].img;
    expect(img).toHaveAttribute('src', src);
    expect(img).toBeVisible();
  });

  test('changes the language when a new language is selected', async () => {
    render(<LangSwitcher />);
    fireEvent.mouseDown(screen.getByRole('button'));
    const selectLng = screen.getByTestId(`lng-${nextLang}`);

    userEvent.click(selectLng);
    const img = await within(selectLng).findByRole('img');
    const src = locales[nextLang].img;
    expect(img).toHaveAttribute('src', src);
    expect(img).toBeVisible();
  });
});
