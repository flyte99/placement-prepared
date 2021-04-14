import { Box, Card, CardContent, Grid, List, Typography } from '@material-ui/core';
import 'src/css/Cards.css';
import { v4 as uuid } from 'uuid';
import NavItem from '../NavItem';

const TopicCards = () => {
  const cards = [
    {
      title: 'CVs and Cover Letters',
      path: 'cvs_and_cover_letters',
      subpages: [
        { title: 'Writing a CV', path: 'cvs_and_cover_letters/cv' },
        { title: 'Cover Letters', path: 'cvs_and_cover_letters/cover-letters' },
        { title: 'LinkedIn', path: 'cvs_and_cover_letters/LinkedIn' }
      ]
    },
    {
      title: 'Psychometric Tests',
      path: 'psychometric_testing',
      subpages: [
        { title: 'Situational Judgement', path: 'psychometric_testing/situational_judgement' },
        { title: 'Personality Assessments', path: 'psychometric_testing/personality' }
      ]
    },
    {
      title: 'Assessment Centres',
      path: 'assessment_centres',
      subpages: [
        { title: 'Group Exercises', path: 'assessment_centres/group_exercises' },
        { title: 'Virtual Assessment Centres', path: 'assessment_centres/virtual' },
        { title: 'Presentations', path: 'assessment_centres/presentations' }
      ]
    },
    {
      title: 'Interviews',
      path: 'interviews',
      subpages: [
        { title: 'Telephone Interviews', path: 'interviews/telephone' },
        { title: 'Video Interviews', path: 'interviews/video' },
        { title: 'Face-to-Face Interviews', path: 'interviews/face-to-face' }
      ]
    },
    {
      title: 'Industry Skills',
      path: 'industry_skills',
      subpages: [
        { title: 'Agile Development Methods', path: 'industry_skills/agile_development' },
        { title: 'Git', path: 'industry_skills/git' },
        { title: 'MySQL', path: 'industry_skills/mysql' },
        { title: 'Unit Testing', path: 'industry_skills/unit_testing' }
      ]
    }
  ];

  return (
    cards.map((card) => (
      <Grid key={uuid()} item lg={3} sm={6} xl={3} xs={12}>
        <Card className="topic-card" sx={{ height: '100%' }}>
          <CardContent>
            <Grid item>
              <Typography color="textPrimary" variant="h3">
                {card.title}
              </Typography>
            </Grid>
            <Box sx={{ p: 1 }}>
              <List>
                {card.subpages.map((page) => (
                  <NavItem
                    href={page.path}
                    key={page.title}
                    title={page.title}
                  />
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))
  );
};

export default TopicCards;
