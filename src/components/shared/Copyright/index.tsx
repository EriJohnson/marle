import { Link, Typography } from '@mui/material';

export function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Todos os direitos reservados © '}
      <Link
        color='inherit'
        href='https://github.com/EriJohnson'
        target='_blank'
      >
        Eri JS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
