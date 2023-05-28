import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';
import { AuthForm } from 'src/components/authForm/AuthForm';
import { authSubmit } from 'src/utils/authSubmit/authSubmit';
import { AuthFormInputs } from 'src/types/AuthFormInputs';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function SignUpPage() {
  const { t } = useTranslation();

  const { email: emailChecked, checked } = useAuth();

  if (!checked) return <Typography>Checking...</Typography>;

  if (emailChecked) {
    return <Navigate to='/main' />;
  }

  const onSubmit = async ({ email, password }: AuthFormInputs) => {
    await authSubmit({ isSignIn: false, email, password });
  };

  return (
    <Container
      component='main'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
      }}
    >
      <AuthForm title={t('auth.sign-up')} link='sign-in' authSubmit={onSubmit} />
    </Container>
  );
}
