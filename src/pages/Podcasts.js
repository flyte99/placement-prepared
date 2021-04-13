import { Box, Card, CardContent, Container, Grid, Pagination, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import PodcastCard from '../components/podcasts/PodcastCard';
import podcasts from '../components/podcasts/podcasts';

class Podcasts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  render() {
    const pageTitle = 'Podcasts';
    const pages = [];

    let tempArray;
    const chunk = 6;

    for (let i = 0, j = podcasts.length; i < j; i += chunk) {
      tempArray = podcasts.slice(i, i + chunk);
      pages.push(tempArray);
    }

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
        <Box sx={{ m: 5 }}>
          <Container maxWidth={false}>
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {pages[this.state.currentPage].map((podcast) => (
                  <Grid item key={podcast.id} lg={4} md={6} xs={12}>
                    <PodcastCard product={podcast} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: 3 }}>
              <Pagination
                color="primary"
                count={pages.length}
                size="small"
                onChange={(event, page) => {
                  this.setState({ currentPage: page - 1 });
                }}
              />
            </Box>
          </Container>
        </Box>
      </>
    );
  }
}

export default Podcasts;
