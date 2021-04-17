import { Card, CardContent, Divider, Typography } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import { Award } from 'react-feather';

const Leaderboard = ({ users }) => (
  <Card>
    <CardContent>
      <Typography variant="h3"><Award /> Leaderboard</Typography>
      <Divider />
      {users}
    </CardContent>
  </Card>
);

Leaderboard.propTypes = {
  users: PropTypes.array.isRequired
};

export default Leaderboard;
