import { Link, Stack, Typography } from '@mui/material';
import HeartIcon from '@mui/icons-material/Favorite';

export function Copyright(props: any) {
  return (
    <Stack {...props} direction={'row'} alignItems='center' spacing={0.5}>
      <Typography variant='body2' color='text.secondary' align='center'>
        Desenvolvido com
      </Typography>

      <HeartIcon sx={{ fontSize: 14 }} />

      <Typography variant='body2' color='text.secondary' align='center'>
        por{' '}
        <Link
          color='inherit'
          href='https://www.linkedin.com/in/erijsfernandes/'
          target='_blank'
        >
          @Eri JS
        </Link>
      </Typography>
    </Stack>
  );
}
