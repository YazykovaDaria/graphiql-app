import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { vi } from 'vitest';
import { Router } from './Router';
import { locales } from '../../components/langSwitcher/LangSwitcher';

const languages = Object.keys(locales);
const [defaultLang] = languages;

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

describe('Router', () => {
  it('should render 404 if path is invalid', () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-path']}>
        <Router />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent(/not found/i);
  });
});
