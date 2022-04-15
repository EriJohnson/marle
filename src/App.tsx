import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant='h1'>Hello, Marie</Typography>
      <Button color='secondary' variant='contained' size='large'>
        Continuar
      </Button>
    </Box>
  );
}
