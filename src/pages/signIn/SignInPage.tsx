import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import { AuthForm } from 'src/components/authForm/AuthForm';
import { authSubmit } from 'src/utils/authSubmit/authSubmit';
import { AuthFormInputs } from 'src/types/AuthFormInputs';

export function SignInPage() {
  const { t } = useTranslation();

  const onSubmit = async ({ email, password }: AuthFormInputs) => {
    await authSubmit({ isSignIn: true, email, password });
  };

  return (
    <Container>
      <AuthForm title={t('auth.sign-in')} link='sign-up' authSubmit={onSubmit} />
    </Container>
  );
}