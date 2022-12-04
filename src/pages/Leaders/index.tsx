import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import LeadersService from 'services/api/services/leaders';
import LeadersList from './LeadersList';

export default function Leaders() {
  const { data } = useQuery({
    queryKey: ['leaders'],
    queryFn: LeadersService.findAll,
  });

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Líderes
      </Typography>
      <LeadersList>{data?.map((leader) => leader.fullName)}</LeadersList>
    </>
  );
}
