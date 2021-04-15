import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import Carousel from 'react-material-ui-carousel';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Components.css';
import 'src/css/Images.css';
import { v4 as uuid } from 'uuid';
import PageFooter from '../../components/PageFooter';

const FaceToFaceInterviews = () => {
  const pageTitle = 'Face-to-Face Interviews';
  const interviewTipCards = [
    {
      front: 'Research the organisation',
      back: "When applying to opportunities you are likely to find organisations you hadn't heard of before so research what they do and their mission statement to show how you will enhance the team. It is helpful to keep up with current events especially news within the organisation's industry"
    },
    {
      front: 'Research the job/role',
      back: 'Read the job description in full and consider what the job needs you to do (what might the challenges be? What about opportunities?). If you know someone working in the field, ask if you can talk to them and learn key topics for working in this area'
    },
    {
      front: 'Prepare Answers',
      back: 'Make a list of the selection criteria and note down your evidence and key example(s) for each one'
    },
    {
      front: 'Plan the practical elements',
      back: 'Your attire and travelling to the interview (allow plenty of time for traffic or public transport disruptions'
    },
    {
      front: 'Body Language',
      back: 'Make sure you listen to and make eye contact with the person who is speaking. In your reply address your answer to the person who asked the question, but also make eye contact with the other people present who are listening'
    },
    {
      front: 'Use Notes',
      back: 'If you worry about forgetting things to say, try noting down a few key bullet points that you can quickly glance at if needed'
    }
  ];
  const interviewQuestions = [
    'Tell me about yourself',
    'How would your friends describe you?',
    'Tell me about time you were part of a team, what was your role, what would you do differently next time?',
    'Describe a challenge you have faced, what was it, how did you cope?',
    'How would you persuade someone to your point of view?',
    'Why should we take you?',
    'Do you understand the job and how motivated are you?',
    'What do you think the challenges will be in this post?',
    'Who else have you applied to?',
    'Where do you see yourself in five years’ time?',
    'Do you understand what we do?',
    'What attracted you to applying to us?',
    'Who do you think our main competitors are?',
    'What challenges do you think we will be facing in the next five years?'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box className="embedded-video">
        <ReactPlayer url="https://youtu.be/HG68Ymazo18" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Preparation</Typography><br />
            <Typography>Face to Face interviews range from relatively informal interviews in a conversational style with
              one person, to a traditional interview featuring a number of people on a &quot;panel&ldquo; asking
              prepared questions. The most important thing during an interview is to be yourself and remain calm, but
              some preparation can assist with presenting your suitability for the role.
            </Typography>
            <Box sx={{ m: 3 }}>
              <Grid container className="center-grid-container" spacing={2} wrap="wrap">
                {interviewTipCards.map(((card) => (
                  <Flippy key={card.front}>
                    <FrontSide>
                      <Card>
                        <CardContent><Typography className="interview-card">{card.front}</Typography></CardContent>
                      </Card>
                    </FrontSide>
                    <BackSide>
                      <Card>
                        <CardContent><Typography className="interview-card">{card.back}</Typography></CardContent>
                      </Card>
                    </BackSide>
                  </Flippy>
                )))}
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <div className="img-centre">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thecvwriter.co.uk/applying-the-star-technique-in-an-interview/"
          >
            <Avatar
              alt="STAR Technique"
              style={{ width: 500, height: 280 }}
              src="/static/images/material/star-technique.png"
              variant="square"
            />
          </a>
        </div>
        <Typography className="img-caption">The STAR method and it’s application from www.thecvwriter.co.uk
        </Typography>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Typical Interview Questions</Typography><br />
            <Typography>It&apos;s difficult to guess the questions you may face at interview, but developing a bank of
              well evidenced examples of your achievements and experience can provide transferable responses for a
              multitude of questions. If you are asked competency-based questions, you can use STAR (Situation, Task,
              Action, Result) to compose your answer.
            </Typography>
            <Box className="carousel">
              <Carousel navButtonsAlwaysVisible>
                {interviewQuestions.map((item) => <InterviewQuestion key={uuid()} question={item} />)}
              </Carousel>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="face_to_face_interviews" />
      </Box>
    </>
  );
};

function InterviewQuestion({ question }) {
  return (
    <Card className="question-card" style={{ backgroundColor: '#5664d2' }}>
      <CardContent>
        <Typography color="white" variant="h3">{question}</Typography>
      </CardContent>
    </Card>
  );
}

InterviewQuestion.propTypes = {
  question: PropTypes.string
};

export default FaceToFaceInterviews;
