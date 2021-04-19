import { Box, Container, Grid, Pagination } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ResourceCard from './ResourceCard';

const ResourcePagination = ({ podcasts, resources, numPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [];

  let tempArray;

  for (let i = 0, j = resources.length; i < j; i += numPerPage) {
    tempArray = resources.slice(i, i + numPerPage);
    pages.push(tempArray);
  }

  return (
    <Container maxWidth={false}>
      <Box sx={{ pt: 3 }}>
        <Grid container spacing={3}>
          {pages[currentPage].map((resource) => (
            <Grid item key={resource.id} lg={4} md={6} xs={12}>
              <ResourceCard podcasts={podcasts} resource={resource} />
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
            setCurrentPage(page - 1);
          }}
        />
      </Box>
    </Container>
  );
};

ResourcePagination.propTypes = {
  podcasts: PropTypes.bool,
  resources: PropTypes.array.isRequired,
  numPerPage: PropTypes.number.isRequired
};

export default ResourcePagination;
