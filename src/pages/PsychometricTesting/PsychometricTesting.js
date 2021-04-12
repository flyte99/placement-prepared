import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { Helmet } from 'react-helmet';
import 'src/css/Images.css';
import SubpageCards from '../../components/SubpageCards';

const aptTestLogo = require('src/img/practice-aptitude-tests.svg').default;
const testPartnershipLogo = require('src/img/test-partnership.png').default;
const assessDayLogo = require('src/img/assessment-day.svg').default;
const jobTestPrepLogo = require('src/img/job-test-prep.webp').default;
const jobTestSuccessLogo = require('src/img/job-test-success.png').default;

const PsychometricTesting = () => {
  const pageTitle = 'Psychometric Tests';
  const subpages = [
    {
      title: 'Situational Judgement',
      path: 'psychometric_testing/situational_judgement',
      summary: 'Situational judgement tests assess how an applicant would behave in a variety of work-based situations'
    },
    {
      title: 'Personality Assessments',
      path: 'psychometric_testing/personality',
      summary: 'Personality assessments examine how likely an applicant is to fit into the role and company culture'
    }
  ];

  const imgs = [
    { caption: 'Practice Aptitude Tests', path: 'https://www.practiceaptitudetests.com/', image: aptTestLogo },
    {
      caption: 'Test Partnership',
      path: 'https://www.testpartnership.com/psychometric-test.html',
      image: testPartnershipLogo
    },
    { caption: 'Assessment Day', path: 'https://www.assessmentday.co.uk/', image: assessDayLogo },
    { caption: 'Job Test Prep', path: 'https://www.jobtestprep.co.uk/', image: jobTestPrepLogo },
    { caption: 'Job Test Success', path: 'https://www.jobtestsuccess.com/', image: jobTestSuccessLogo }
  ];

  const testPoints = [
    'Numerical reasoning tests are typically questions on basic GCSE maths concepts such as ratios, percentages and probability',
    'Verbal reasoning tests assess your ability to extract and summarise key points from written information by asking questions based on a paragraph of information. Verbal reasoning tests don’t typically assess your ability to write fluently or persuasively, they are more focused on your understanding',
    'Logical reasoning tests assess your ability to spot rules or consistencies in sets of objects and your logical thinking. They focus on your ability to work quickly and accurately'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Preparing for Placement</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography>Online tests are used early in the recruitment process to filter through large volumes of
              applications. These tests can take many forms and are all designed to assess different qualities but there
              are lots of sites that provide practice tests. The focus of psychometric tests is not on what you answer
              but how you answer the question so they vary for each application.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards subpages={subpages} />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Reasoning Tests</Typography> <br />
            <Typography>Employers also use Numerical/Verbal/Logical Reasoning tests to explore how well a candidate
              reasons with numerical, written or diagrammatical data. Unlike other psychometric tests, these do have
              right and wrong answers and are multiple choice and timed. Many of the skills required for reasoning tests
              can be improved by regularly exercising brain with puzzles such as Sudoku or crosswords.
            </Typography>
            <ul className="bullet-points">{testPoints.map((point) => (<li><Typography>{point}</Typography></li>))}</ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h2">Online Practice Tests</Typography><br />
            <div className="img-block">
              {imgs.map((item) => (
                <div>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <Image imageStyle={{ height: item.image.height, width: item.image.width }} src={item.image} />
                  </a>
                  <Box><Typography>{item.caption}</Typography></Box>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default PsychometricTesting;