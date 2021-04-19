import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import 'src/css/Images.css';
import { v4 as uuid } from 'uuid';
import PageFooter from '../../components/PageFooter';
import numericalReasoningQuestions from '../../components/quiz/numericalReasoningQuestions';
import Quiz from '../../components/quiz/Quiz';
import verbalReasoningQuestions from '../../components/quiz/verbalReasoningQuestions';
import SubpageCards from '../../components/SubpageCards';

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

  const resources = [
    {
      caption: 'Practice Aptitude Tests',
      path: 'https://www.practiceaptitudetests.com/',
      image: '/static/images/resources/practice-tests/practice-aptitude-tests.svg',
      width: 230
    },
    {
      caption: 'Test Partnership',
      path: 'https://www.testpartnership.com/psychometric-test.html',
      image: '/static/images/resources/practice-tests/test-partnership.png',
      width: 170
    },
    {
      caption: 'Assessment Day',
      path: 'https://www.assessmentday.co.uk/',
      image: '/static/images/resources/practice-tests/assessment-day.svg',
      width: 220
    },
    {
      caption: 'Job Test Prep',
      path: 'https://www.jobtestprep.co.uk/',
      image: '/static/images/resources/practice-tests/job-test-prep.webp',
      width: 230
    },
    {
      caption: 'Job Test Success',
      path: 'https://www.jobtestsuccess.com/',
      image: '/static/images/resources/practice-tests/job-test-success.png',
      width: 150
    }
  ];

  const testPoints = [
    'Numerical reasoning tests are typically questions on basic GCSE maths concepts such as ratios, percentages and probability',
    'Verbal reasoning tests assess your ability to extract and summarise key points from written information by asking questions based on a paragraph of information. Verbal reasoning tests don’t typically assess your ability to write fluently or persuasively, they are more focused on your understanding',
    'Logical reasoning tests assess your ability to spot rules or consistencies in sets of objects and your logical thinking. They focus on your ability to work quickly and accurately'
  ];

  function formatQuestions(questions, randomiseAnswers) {
    const randomisedQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);

    if (randomiseAnswers) {
      for (let i = 0; i < randomisedQuestions.length; i++) {
        randomisedQuestions[i].answerOptions.sort(() => Math.random() - 0.5);
      }
    }

    return randomisedQuestions;
  }

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
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
            <ul className="bullet-points">{testPoints.map((point) => (
              <li key={uuid()}><Typography>{point}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Example Numerical Reasoning Test</Typography> <br />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Quiz questions={formatQuestions(numericalReasoningQuestions, true)} />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Example Verbal Reasoning Test</Typography> <br />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Quiz questions={formatQuestions(verbalReasoningQuestions, false)} />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h2">Online Practice Tests</Typography><br />
            <div className="img-block">
              {resources.map((item) => (
                <div key={item.caption}>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <Avatar
                      alt={item.caption}
                      style={{ width: item.width, height: 45 }}
                      src={item.image}
                      variant="square"
                    />
                  </a>
                  <Box><Typography>{item.caption}</Typography></Box>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="psychometric_testing" />
      </Box>
    </>
  );
};
export default PsychometricTesting;
