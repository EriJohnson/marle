import { LoadingButton } from '@mui/lab';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import backgroundImage from 'assets/images/login-background-01.webp';
import oanseLogo from 'assets/images/oanse-logo.png';
import Copyright from 'components/shared/Copyright';
import useAuth from 'hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  const { isLoading, handleLogin } = useAuth();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    await handleLogin({
      identifier: data.get('identifier').toString(),
      password: data.get('password').toString(),
    });
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        lg={8}
        xl={6}
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
        }}
      />
      <Grid item xs={12} lg={4} xl={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            mx: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <Box
            component="img"
            alt="OANSE Logo"
            src={oanseLogo}
            sx={{ height: 64 }}
          />
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email ou usuário"
              name="identifier"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              color="secondary"
              size="large"
              loading={isLoading}
              disableRipple
            >
              Entrar
            </LoadingButton>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Grid item>
                <Typography sx={{ display: 'inline' }} variant="body1">
                  Ainda não tem uma conta?
                </Typography>
                <Link
                  component={RouterLink}
                  to="/register"
                  variant="body1"
                  sx={{ ml: 0.5, fontWeight: 'bold' }}
                >
                  Cadastre-se
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
}
