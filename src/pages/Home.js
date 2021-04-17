import { Box, Card, CardContent, CircularProgress, Container, Divider, Grid, Typography } from '@material-ui/core';
import { Award, BarChart2 } from 'react-feather';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import TopicCards from 'src/components/home/TopicCards';
import 'src/css/Components.css';

const Home = () => {
  const currentUser = useSelector((state) => state.users);

  let score = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const page in currentUser.progress) {
    if (currentUser.progress[page]) {
      score++;
    }
  }

  return (
    <>
      <Helmet>
        <title>Home | Placement Prepared</title>
      </Helmet>
      <Box sx={{ m: 5 }}>
        <Card sx={{ textAlign: 'center', backgroundColor: '#5664d2' }}>
          <CardContent>
            <Typography color="#ffffff" variant="h1">Welcome to Placement Prepared</Typography><br />
            <Typography color="#ffffff" variant="h3">The eLearning System preparing Computer Science Students for
              Industry
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          backgroundColor: 'background.default',
          m: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={9} md={6} xs={12}>
              <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                <TopicCards />
              </Grid>
            </Grid>
            <Grid item lg={3} md={6} xs={12}>
              {currentUser.token
                ? (
                  <Card sx={{ height: '30%' }}>
                    <CardContent>
                      <Typography variant="h3"><Award /> Progress</Typography>
                      <Divider />
                      <Box className="progress-diagram">
                        <Box className="progress-circle">
                          <CircularProgress
                            value={Math.round((score / Object.keys(currentUser.progress).length) * 100)}
                            variant="determinate"
                            thickness={5}
                            size={100}
                          />
                          <Box className="progress-percentage">
                            <Typography variant="h5" component="div" color="textSecondary">
                              {Math.round((score / Object.keys(currentUser.progress).length) * 100)}%
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ) : null}
              <Card sx={{ mt: currentUser.token ? 2 : 0, height: currentUser.token ? '80%' : '100%' }}>
                <CardContent>
                  <Typography variant="h3"><BarChart2 /> Leaderboard</Typography>
                  <Divider />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
