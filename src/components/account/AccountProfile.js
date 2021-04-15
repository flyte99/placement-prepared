import { Box, Card, CardContent, Typography } from '@material-ui/core';
import moment from 'moment';
import Gravatar from 'react-gravatar';

const user = {
  avatar: <Gravatar
    style={{ width: 100, height: 100, borderRadius: 100 }}
    email={`${localStorage.getItem('username')} `}
  />,
  name: `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`,
  institution: localStorage.getItem('institution')
};

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        {user.avatar}
        <Typography color="textPrimary" gutterBottom variant="h3">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          {`${moment().format('hh:mm A')} ${user.timezone}`}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default AccountProfile;
