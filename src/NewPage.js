import { Helmet } from 'react-helmet';
import { Box, Typography } from '@material-ui/core';

const NewPage = () => {
  const pageTitle = 'New Page Title';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
    </>
  );
};

export default NewPage;
