import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import podcasts from '../components/resources/podcasts';
import ResourcePagination from '../components/resources/ResourcePagination';

const Podcasts = () => {
  const pageTitle = 'Podcasts';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography align="center">Podcasts provide different perspectives on various topics, which can improve
              employability but most importantly can broaden your knowledge and help you keep up with evolving
              technologies.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}><ResourcePagination podcasts resources={podcasts} numPerPage={6} /></Box>
    </>
  );
};

export default Podcasts;
