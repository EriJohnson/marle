import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Container,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker } from 'components/shared/DatePicker';
import { useForm } from 'react-hook-form';
import { Link as RouterLink } from 'react-router-dom';
import { validationSchema } from './validationSchema';

export function Register() {
  const form = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = form;

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <Container
      maxWidth='sm'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      disableGutters
    >
      <Paper variant='outlined' sx={{ p: { xs: 3 } }} color='secondary'>
        <Typography variant='h4'>Bem-vindo(a)</Typography>
        <Typography variant='subtitle1' color='text.secondary'>
          Crie sua conta com seus dados pessoais.
        </Typography>

        <Grid
          container
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
          spacing={3}
          sx={{ mt: 1 }}
          noValidate
          autoComplete='off'
        >
          <Grid item xs={12}>
            <TextField
              {...register('fullName')}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              label='Nome completo'
              required
            />
          </Grid>

          <Grid item xs={12} sm={8}>
            <TextField
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              label='Email'
              required
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              label='Telefone'
              required
              type={'tel'}
              inputProps={{ maxLength: 11 }}
            />
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              name='birthdate'
              label='Data de nascimento'
              openTo='year'
              views={['year', 'month', 'day']}
              control={control}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('username')}
              error={!!errors.username}
              helperText={errors.username?.message}
              label='Nome de usuário'
              autoComplete='off'
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              label='Senha'
              type={'password'}
              required
              autoComplete='new-password'
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              size='large'
              type='submit'
              // disabled={!isValid}
            >
              Criar conta
            </Button>
          </Grid>

          <Grid container justifyContent='center' sx={{ mt: 4 }}>
            <Grid item>
              <Typography sx={{ display: 'inline' }} variant='body2'>
                Já possui uma conta?
              </Typography>
              <Link
                component={RouterLink}
                to='/'
                variant='body1'
                sx={{ ml: 0.5, fontWeight: 'bold' }}
              >
                {'Fazer login'}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
