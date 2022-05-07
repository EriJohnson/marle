import HeartIcon from '@mui/icons-material/Favorite';
import { Link, Stack, Typography } from '@mui/material';

export default function Copyright(props: any) {
  return (
    <Stack {...props} direction="row" alignItems="center" spacing={0.5}>
      <Typography variant="body2" color="text.secondary" align="center">
        Desenvolvido com
      </Typography>

      <HeartIcon sx={{ fontSize: 14 }} />

      <Typography variant="body2" color="text.secondary" align="center">
        por{' '}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/erijsfernandes/"
          target="_blank"
        >
          @Eri JS
        </Link>
      </Typography>
    </Stack>
  );
}
