import List from '@mui/material/List';

interface ILeadersList {
  children: React.ReactNode;
}

export default function LeadersList({ children }: ILeadersList) {
  return <List sx={{ mt: 1, p: 0, width: '100%' }}>{children}</List>;
}
