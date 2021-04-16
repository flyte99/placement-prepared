import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';

const AccountProfile = (props) => {
  const currentUser = useSelector((state) => state.users);

  return (
    <Card {...props}>
      <CardContent>
        <Box sx={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <Gravatar
            style={{ width: 100, height: 100, borderRadius: 100 }}
            email={`${currentUser.username} `}
          />
          <Box sx={{ p: 1 }} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {currentUser.firstName} {currentUser.lastName}
          </Typography>
          <Typography color="textSecondary" variant="body1">{currentUser.institution}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AccountProfile;
