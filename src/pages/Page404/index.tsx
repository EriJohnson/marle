import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Page404() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          margin: 'auto',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Página não encontrada!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Desculpe, não conseguimos encontrar a página que você está procurando.
          Talvez você tenha digitado incorretamente a URL? Certifique-se de ter
          digitado corretamente.
        </Typography>

        <Button
          fullWidth
          color="secondary"
          size="small"
          to="/"
          variant="contained"
          component={RouterLink}
          sx={{ mt: 4 }}
        >
          Voltar ao início
        </Button>
      </Box>
    </Container>
  );
}
