import { Box, Card, CardContent, CircularProgress, Typography } from '@material-ui/core';
import axios from 'axios';
import { useState } from 'react';
import Gravatar from 'react-gravatar';
import { useSelector } from 'react-redux';
import 'src/css/Components.css';
import getProgressScore from '../../utils/getProgressScore';

const Leaderboard = () => {
  const { firstName, lastName } = useSelector((state) => state.users);
  const currentUser = `${firstName} ${lastName}`;
  const [users, setUsers] = useState([]);

  const allUsers = [];
  axios.get('http://localhost:8000/api/users/', { headers: { 'Content-Type': 'application/json' } })
    .then((userResponse) => {
      for (let i = 0; i < userResponse.data.length; i++) {
        if (userResponse.data[i].student) {
          const { username, student } = userResponse.data[i];
          const name = `${student.firstName} ${student.lastName}`;
          const score = getProgressScore(student.progress) * 100;
          const userInfo = { username, name, score };
          allUsers.push(userInfo);
        }
      }

      const sortedUsers = allUsers.sort((a, b) => ((a.score < b.score) ? 1 : -1)).slice(0, 10);
      setUsers(sortedUsers);
    }).catch((error) => {
      console.log(error);
    });

  return (
    <>
      {users === [] ? (
        <Card>
          <CardContent>
            {users.map((user) => (
              <Card key={user.username} className="leaderboard-entry" variant="outlined">
                <CardContent className="align-row">
                  <Typography
                    color={user.name === currentUser ? 'primary' : 'default'}
                    sx={{ width: 40 }}
                  >
                    {users.indexOf(user) + 1}.
                  </Typography>
                  <div className="leaderboard-user">
                    <Gravatar
                      style={{ width: 30, height: 30, borderRadius: 30 }}
                      email={`${user.username} `}
                    />
                    <Typography
                      color={user.name === currentUser ? 'primary' : 'default'}
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      color={user.name === currentUser ? 'primary' : 'default'}
                    >
                      {user.score}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      ) : <Box className="leaderboard-loading"><CircularProgress /></Box>}
    </>
  );
};

export default Leaderboard;
