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

import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Club = {
  URSINHOS: 'URSINHOS';
  FAISCA: 'FAISCA';
  FLAMA: 'FLAMA';
  TOCHA: 'TOCHA';
  JV: 'JV';
  GQ7: 'GQ7';
};

type Role = {
  ADMIN: 'ADMIN';
  DEACON: 'DEACON';
  DIRECTOR: 'DIRECTOR';
  LEADER: 'LEADER';
};

interface IUser {
  id?: string;
  email: string;
  full_name: string;
  birth_date: string;
  username: string;
  password: string;
  phone?: string;
  club?: Club;
  role?: Role;
  is_active?: boolean;
  created_at?: string | Date;
  updated_at?: string | Date;
}

export function Register() {
  const [birthDate, setBirthDate] = useState<null | unknown>(null);

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

        <Grid container component='form' spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField
              required
              id='full_name'
              name='full_name'
              label='Nome completo'
              fullWidth
              variant='outlined'
              autoFocus
            />
          </Grid>

          <Grid item xs={12} sm={7}>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              fullWidth
              variant='outlined'
              type={'email'}
            />
          </Grid>

          <Grid item xs={12} sm={5}>
            <TextField
              required
              id='phone'
              name='phone'
              label='Telefone'
              fullWidth
              variant='outlined'
              type={'tel'}
            />
          </Grid>

          <Grid item xs={12}>
            <DatePicker
              value={birthDate}
              onChange={value => setBirthDate(value)}
              renderInput={params => <TextField {...params} required />}
              label='Data de nascimento'
              openTo='year'
              views={['year', 'month', 'day']}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='username'
              name='username'
              label='Usuário'
              fullWidth
              variant='outlined'
              autoComplete='off'
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id='password'
              name='password'
              label='Senha'
              fullWidth
              variant='outlined'
              type={'password'}
              autoComplete='new-password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 4 }}
              color='secondary'
              size='large'
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
