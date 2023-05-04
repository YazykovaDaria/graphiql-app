import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LangSwitcher, locales } from './LangSwitcher';

const languages = Object.keys(locales);

describe('LangSwitcher', () => {
  test('renders the default language', () => {
    render(<LangSwitcher />);
    const select = screen.getByTestId('switch-lng');
    expect(select).toBeInTheDocument();
  });
});
