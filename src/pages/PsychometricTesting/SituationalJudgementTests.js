import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import 'src/css/Cards.css';
import { v4 as uuid } from 'uuid';
import PageFooter from '../../components/PageFooter';

const SituationalJudgementTests = () => {
  const pageTitle = 'Situational Judgement Tests';
  const testTypes = [
    'Rated Responses - The situation is presented with the possible responses and you are asked to rate each response for effectiveness',
    'Most and Least Effective - The situation is presented with four or five possible responses and you are asked to indicate which is "most" and which is "least" effective',
    'Ranked Responses - The situation is presented with the possible responses and you are asked to place the responses in rank order as to how effective or appropriate they are. Typically you will only be able to allocate a number once',
    'Likely to Perform - You are given the possible actions or responses and asked to say which you are "most likely to do" given the situation and which you would be "least likely to do". They are seeking to identify your tendencies, personality traits and past behaviour more than they want to know about your ability to evaluate the "best" and "worst" answer from a group of possible answers'
  ];
  const competencyCards = [
    {
      front: 'Communicating, Influencing and Negotiating',
      back: 'Looking for clarity, appropriateness and persuasiveness of communication'
    },
    {
      front: 'Drive to Achieve Results',
      back: 'Looking for motivation and drive to achieve high standards and deliver results on time'
    },
    {
      front: 'Planning & Organising',
      back: 'Looking for the tendency to approach tasks in a systematic and organised fashion, to prioritise activities and manage time'
    },
    {
      front: 'Analysis & Decision-making',
      back: 'Looking for accurate and timely analysis of information, facts and data and good judgement with regard to what course of action to take based on that information'
    },
    {
      front: 'People & Relationship Skills',
      back: 'Looking for capacity to build effective working relationships, to have empathy and awareness of others and work well in a team'
    }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Situational judgement tests present candidates with a range of different situations they might
              experience in the job they are applying for. For each situation, a number of possible actions are
              suggested that the candidate must choose between and judge which is the most effective course of action to
              take. They are always multiple choice and there is no option to add your own answer so the candidate must
              select the most applicable answer. The questions asked about each situation can very with the principle
              remaining the same of ensuring you answer it using your personal judgement:
            </Typography>
            <ul className="bullet-points">{testTypes.map((type) => (
              <li key={uuid()}><Typography>{type}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Typography color="textPrimary" variant="h3">Competencies Recruiters are Looking for</Typography> <br />
        <Grid container className="center-grid-container" spacing={2} wrap="wrap">
          {competencyCards.map(((card) => (
            <Flippy key={card.front}>
              <FrontSide>
                <Card>
                  <CardContent><Typography className="competency-card">{card.front}</Typography></CardContent>
                </Card>
              </FrontSide>
              <BackSide>
                <Card>
                  <CardContent><Typography className="competency-card">{card.back}</Typography></CardContent>
                </Card>
              </BackSide>
            </Flippy>
          )))}
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="situational_judgement" />
      </Box>
    </>
  );
};

export default SituationalJudgementTests;
