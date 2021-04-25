import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import SubpageCards from '../../components/SubpageCards';

const IndustrySkills = () => {
  const pageTitle = 'Industry Skills';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography align="center">The guides below aim to give practical insight over the variety of topics to
              better prepare
              individuals for working in industry
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards topic={pageTitle} />
      </Box>
    </>
  );
};

export default IndustrySkills;
