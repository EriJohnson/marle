import List from '@mui/material/List';

interface ILeadersList {
  children: React.ReactNode;
}

export default function LeadersList({ children }: ILeadersList) {
  return <List sx={{ width: '100%' }}>{children}</List>;
}
