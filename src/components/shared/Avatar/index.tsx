import { AvatarProps, SxProps, Theme } from '@mui/material';
import MUIAvatar from '@mui/material/Avatar';

import { User } from 'types/User';

function getSxProps(club: string): SxProps {
  return (
    {
      URSINHOS: { backgroundColor: '#ffe7d9', color: '#b72136' },
      FAISCA: { backgroundColor: '#fff7cd', color: '#7a4f01' },
      FLAMA: { backgroundColor: '#dcf1d7', color: '#67ba5d' },
      TOCHA: { backgroundColor: '#d1e9fc', color: '#3f548e' },
    }[club] || { backgroundColor: 'red', color: 'white' }
  );
}

function getAvatarProps(user: User): AvatarProps {
  return {
    sx: {
      fontSize: '1rem',
      fontWeight: (theme: Theme) => theme.typography.fontWeightMedium,
      ...getSxProps(user?.club),
    },
    children: `${user?.fullName?.split(' ')[0][0]}${
      user?.fullName?.split(' ')[1][0]
    }`,
  };
}

interface IAvatarProps {
  user: User;
}

export default function Avatar({ user }: IAvatarProps) {
  return <MUIAvatar {...getAvatarProps(user)} />;
}
