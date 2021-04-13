import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Components.css';
import 'src/css/Images.css';

const image = require('/static/images/resources/myers-briggs.svg').default;

const PersonalityAssessments = () => {
  const pageTitle = 'Personality Assessments';
  const traitCards = [
    { front: 'Extrovert vs Introvert', back: 'How you interact with others' },
    { front: 'Sensing vs Intuition', back: 'How you access information' },
    { front: 'Thinking vs Feeling', back: 'How you make decisions' },
    { front: 'Judging or Perceiving', back: 'How you deal with the world' },
    { front: 'Assertive vs Turbulent', back: 'How confident you are in your abilities and decisions' }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography>There are a vast variety of personally assessments used by employers to find appropriate
              candidates. It&apos;s important to not to focus on giving the &quot;right&ldquo; answers because the aim
              is to assess if YOU are the ideal candidate, which can only be achieved if you answer honestly. Make sure
              you read all of the options before answering and remain consistent throughout.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Myers-Briggs Type Indicator</Typography> <br />
            <Typography>The Myers-Briggs Type Indicator (MBTI) test is a very popular personality assessment that uses a
              series of questions to categorise people into one of 16 different personality types. These personality
              types
              are based on four distinct traits and an underlying identity aspect:
            </Typography><br />
            <Grid container className="center-grid-container" spacing={2} wrap="wrap">
              {traitCards.map(((card) => (
                <Flippy>
                  <FrontSide>
                    <Card>
                      <CardContent>
                        <Typography className="trait-card">{card.front}</Typography>
                      </CardContent>
                    </Card>
                  </FrontSide>
                  <BackSide>
                    <Card>
                      <CardContent>
                        <Typography className="trait-card">{card.back}</Typography>
                      </CardContent>
                    </Card>
                  </BackSide>
                </Flippy>
              )))}
            </Grid>
          </CardContent>
          <CardContent sx={{ height: 130 }}>
            <div className="mbti-img">
              <a target="_blank" rel="noreferrer" href="https://www.16personalities.com/free-personality-test">
                <Image imageStyle={{ width: 350, height: 75 }} src={image} />
              </a>
            </div>
            <Typography className="img-caption">Take the Myers-Briggs Personality test</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Caliper Profile</Typography> <br />
            <Typography>The Caliper Profile is an objective assessment that measures an individual’s personality
              characteristics and individual motivations in order to predict on-the-job behaviors and potential. The
              results show key personality traits related to skills within the job environment. The test is split into a
              behavioural section and a cognitive section, and will take a couple of hours to complete. Caliper Profiles
              are tailored for different jobs so the results will vary between applications.
            </Typography>
          </CardContent>
          <Box className="embedded-video">
            <ReactPlayer url="https://youtu.be/w3-dveTlgbw" />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default PersonalityAssessments;
