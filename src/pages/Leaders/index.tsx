import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import SearchInput from 'components/shared/SearchInput';
import { ChangeEvent, useMemo, useState } from 'react';
import UsersService from 'services/api/services/users';
import LeadersList from './LeadersList';
import LeadersListItem from './LeadersListItem';

export default function Leaders() {
  const [search, setSearch] = useState('');

  const { data } = useQuery({
    queryKey: ['leaders'],
    queryFn: UsersService.findAll,
  });

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const filteredLeaders = useMemo(
    () =>
      data?.filter(leader =>
        leader.fullName.toLowerCase().includes(search.toLowerCase())
      ),
    [search, data]
  );

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Líderes
      </Typography>

      <SearchInput
        placeholder="Busque pelo nome do líder"
        onChange={handleSearchChange}
        sx={{ mt: 3 }}
      />

      <LeadersList>
        {filteredLeaders?.map(leader => (
          <LeadersListItem key={leader.id} leader={leader} />
        ))}
      </LeadersList>
    </>
  );
}
