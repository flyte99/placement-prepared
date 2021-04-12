import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import TopicCards from 'src/components/home/TopicCards';

const Home = () => (
  <>
    <Helmet>
      <title>Home | Preparing for Placement</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <TopicCards />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Home;