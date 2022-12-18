import { ListItemButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Avatar from 'components/shared/Avatar';
import { User } from 'types/User';

interface ILeadersListItem {
  leader: User;
}

export default function LeadersListItem({ leader }: ILeadersListItem) {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ p: 0 }}>
        <ListItemButton sx={{ px: { xs: 0, sm: 1 }, p: 2 }}>
          <ListItemAvatar>
            <Avatar user={leader} />
          </ListItemAvatar>

          <ListItemText
            primary={
              <Typography
                variant="body1"
                component="p"
                color="text.secondary"
                fontWeight="600"
              >
                {leader.fullName}
              </Typography>
            }
            secondary={
              <Typography
                component="p"
                variant="body2"
                color="text.primary"
                textTransform="capitalize"
              >
                {leader?.club.toString().toLowerCase()}
              </Typography>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}
