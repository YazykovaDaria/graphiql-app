import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'src/i18next/i18nForTests';
import { AuthFormInputs } from 'src/types/AuthFormInputs';
import { AuthForm } from './AuthForm';

describe('Auth form', () => {
  const title = 'Sign up';
  const mockEmail = 'real-email@mail.com';
  const mockPassword = 'RealPass.123';
  const badPassword = 'BadPassword123';
  const rejectedValue = 'fail';
  const resolvedValue = 'done';

  const onSubmit = async ({ password }: Omit<AuthFormInputs, 'email'>) => {
    if (password === mockPassword) {
      Promise.reject(new Error(rejectedValue));
    } else {
      Promise.resolve(resolvedValue);
    }
  };

  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <AuthForm title={title} link='sign-in' authSubmit={onSubmit} />
      </I18nextProvider>,
      { wrapper: BrowserRouter }
    );
  });

  it('renders appropriate title', () => {
    expect(screen.getByRole('heading')).toHaveTextContent(title);
  });

  it('has appropriate link', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/sign-in');
  });

  it('throws an error if email requirements are not met', async () => {
    const emailField = screen.getByRole('textbox', { name: 'Email Address' });
    const passwordField = screen.getByLabelText(/password/i);
    await userEvent.type(emailField, 'bad-email');
    await userEvent.click(passwordField);

    expect(screen.getByText(/correct email/i)).toBeVisible();
  });

  it('throws an error if password requirements are not met', async () => {
    const emailField = screen.getByRole('textbox', { name: 'Email Address' });
    const passwordField = screen.getByLabelText(/password/i);
    await userEvent.type(passwordField, badPassword);
    await userEvent.click(emailField);

    expect(screen.getByText(/password should contain/i)).toBeVisible();
  });

  it('allows user to press submit button if all requirements are met', async () => {
    const emailField = screen.getByRole('textbox', { name: 'Email Address' });
    const passwordField = screen.getByLabelText(/password/i);
    await userEvent.type(emailField, mockEmail);
    await userEvent.type(passwordField, mockPassword);

    expect(screen.getByRole('button')).toBeEnabled();
  });
});
