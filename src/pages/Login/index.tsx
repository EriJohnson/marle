import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import backgroundImage from 'assets/images/login-background.png';
import oanseLogo from 'assets/images/oanse-logo.png';
import { Copyright } from 'components/shared/Copyright';
import { Link as RouterLink } from 'react-router-dom';

export function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        md={7}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
        }}
      />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component='img' alt='OANSE Logo' src={oanseLogo} />
          <Box component='form' noValidate onSubmit={handleSubmit}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email ou usuário'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              color='secondary'
              size='large'
            >
              Entrar
            </Button>

            <Grid container justifyContent='center'>
              <Grid item>
                <Typography sx={{ display: 'inline' }} variant='body2'>
                  Ainda não tem uma conta?
                </Typography>
                <Link
                  component={RouterLink}
                  to='register'
                  variant='body2'
                  sx={{ ml: 0.5 }}
                >
                  {'Cadastre-se'}
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8 }} />
        </Box>
      </Grid>
    </Grid>
  );
}
