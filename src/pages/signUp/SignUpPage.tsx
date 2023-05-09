import { useTranslation } from 'react-i18next';
import { Container } from '@mui/material';
import { AuthForm } from 'src/components/authForm/AuthForm';
import { authSubmit } from 'src/utils/authSubmit/authSubmit';
import { AuthFormInputs } from 'src/types/AuthFormInputs';

export function SignUpPage() {
  const { t } = useTranslation();

  const onSubmit = async ({ email, password }: AuthFormInputs) => {
    await authSubmit({ isSignIn: false, email, password });
  };

  return (
    <Container>
      <AuthForm title={t('auth.sign-up')} link='sign-in' authSubmit={onSubmit} />
    </Container>
  );
}
