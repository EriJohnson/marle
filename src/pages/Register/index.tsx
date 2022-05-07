import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import DatePicker from 'components/shared/DatePicker';
import PhoneInput from 'components/shared/PhoneInput';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import validationSchema from './validationSchema';

export default function Register() {
  const form = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
  } = form;

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container maxWidth="sm" disableGutters>
      <Paper
        variant="outlined"
        sx={{
          height: { xs: '100vh', sm: '100%' },
          my: { xs: 0, sm: 5 },
          px: { xs: 3, sm: 5 },
          py: 5,
        }}
        color="secondary"
      >
        <Typography variant="h4" gutterBottom>
          Bem-vindo(a)
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Por favor, crie sua conta com seus dados pessoais.
        </Typography>

        <Grid
          container
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          spacing={3}
          sx={{ mt: 1 }}
          noValidate
          autoComplete="off"
        >
          <Grid item xs={12}>
            <TextField
              error={!!errors.fullName}
              {...register('fullName')}
              helperText={errors.fullName?.message}
              label="Nome completo"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              label="Email"
              type="email"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <PhoneInput
              name="phone"
              label="Telefone"
              control={control}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              name="birthdate"
              label="Data de nascimento"
              control={control}
              openTo="year"
              views={['year', 'month', 'day']}
              minDate={dayjs().subtract(100, 'year')}
              maxDate={dayjs().subtract(1, 'year')}
              disableFuture
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
              label="Nome de usuário"
              inputProps={{ maxLength: 24 }}
              autoComplete="off"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              label="Senha"
              type="password"
              autoComplete="new-password"
              required
            />
          </Grid>

          <Grid item xs={12}>
            <LoadingButton
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!isValid}
              loading={isSubmitting}
            >
              Criar conta
            </LoadingButton>
          </Grid>

          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <Grid item>
              <Typography sx={{ display: 'inline' }} variant="body2">
                Já possui uma conta?
              </Typography>
              <Link
                component={RouterLink}
                to="/"
                variant="body1"
                sx={{ ml: 0.5, fontWeight: 500 }}
                tabIndex={-1}
              >
                Fazer login
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
