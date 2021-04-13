import { Box, Card, CardContent, Container, Grid, Pagination, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import products from '../components/podcasts/podcasts';
import PodcastCard from '../components/podcasts/PodcastCard';

const Podcasts = () => {
  const pageTitle = 'Podcasts';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography align="center">Podcasts are a great</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100%', py: 3 }}>
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <PodcastCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Podcasts;
