import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import SubpageCards from '../../components/SubpageCards';

const IndustrySkills = () => {
  const pageTitle = 'Industry Skills';
  const subpages = [
    {
      title: 'Agile Development Methods',
      path: 'industry_skills/agile_development',
      summary: 'Used in software development cycles to aid productivity by collaboration and constant reassessment'
    },
    {
      title: 'Git',
      path: 'industry_skills/git',
      summary: 'Git is a popular version control system used for tracking changes in repositories'
    },
    {
      title: 'MySQL',
      path: 'industry_skills/mysql',
      summary: 'MySQL is a relational database management system'
    },
    {
      title: 'Unit Testing',
      path: 'industry_skills/unit_testing',
      summary: 'A testing method where individual units of source code are tested to determine whether they are fit for use'
    }
  ];

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
        <SubpageCards subpages={subpages} />
      </Box>
    </>
  );
};

export default IndustrySkills;
