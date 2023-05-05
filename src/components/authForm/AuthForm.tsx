import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm, Controller } from 'react-hook-form';
import { Box, Avatar, Typography, Grid, TextField, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type FormData = {
  title: string;
  link: string;
  authSubmit: () => void;
};

type FormInputs = {
  email: string;
  password: string;
};

export function AuthForm({ title, link, authSubmit }: FormData) {
  const isSignIn = link === '/sign-in';
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormInputs>({ mode: 'onBlur' });

  const onSubmit = () => {
    authSubmit();
    reset();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        {title}
      </Typography>
      <Box component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: t('auth.email-pattern-error'),
                },
              }}
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  type='email'
                  label={t('auth.email-label')}
                  autoComplete='email'
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  inputRef={ref}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ''}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message: t('auth.password-pattern-error'),
                },
                minLength: {
                  value: 8,
                  message: t('auth.password-min-length-error'),
                },
              }}
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <TextField
                  margin='normal'
                  fullWidth
                  required
                  label={t('auth.password-label')}
                  type='password'
                  autoComplete='current-password'
                  onChange={onChange}
                  onBlur={onBlur}
                  name={name}
                  inputRef={ref}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password?.message : ''}
                />
              )}
            />
          </Grid>
        </Grid>
        <LoadingButton
          type='submit'
          fullWidth
          disabled={!isValid}
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          <span>{title}</span>
        </LoadingButton>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <Link component={RouterLink} to={link} variant='body2'>
              {isSignIn ? t('auth.sign-in-link') : t('auth.sign-up-link')} {title}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
