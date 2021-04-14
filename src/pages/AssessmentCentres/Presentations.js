import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Components.css';
import { v4 as uuid } from 'uuid';

const Presentations = () => {
  const pageTitle = 'Presentations';
  const competencies = [
    'Oral Communication',
    'Organising and Planning',
    'Professional Style',
    'Presenting Information',
    'Time Management'
  ];
  const presentationTips = [
    'Use no more than one slide per two minutes presenting',
    "Keep slides sparse - They are meant to be a prompt for the audience to follow what you're saying and not to be read because you want the assessor’s attention on you, not the slides",
    'Use slides for graphically presenting numerical information that is difficult to describe orally',
    "Replace bullet point lists with a simple graphic alongside text to maintain the audience's focus",
    'Practice your presentation out loud, record it and play it back to make improvements. Practising out loud will also give you an accurate estimate of how long it takes',
    'Write your prompt notes on envelope-sized cards as A4 paper can distract from your presentation and will exaggerate any shaky hand tendencies'
  ];
  const presentationPoints = [
    'Your introduction should briefly explain who you are and what your presentation will cover',
    'Tell your audience at the start whether you’d prefer to take questions at the end or as you go through',
    'Use simple, clear language - Tell them what you’re going to say, say it, then remind them what you said',
    'Look at the audience, not the slides - Don’t take your cue from the slides. Keep your attention on the audience and take your cue from your note cards'
  ];
  const assessmentPoints = [
    'To what extent were visual aids used effectively?',
    'Was prior preparation and planning evident?',
    'Did the candidate come across confident and convincing?',
    'Were the audience engaged?',
    'Was the brief question satisfactorily answered?',
    'What was the standard of oral communication?',
    'How well were questions addressed?'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Presentation skills are important in the workplace, so the assessors want to see if you are able
              to deliver a well-structured, clear, confident presentation. Most employers will give you information
              before the assessment centre about the presentation exercise, and what they expect you to have prepared in
              advance. However, a small number of employers may set a presentation on the day providing a variety of
              topics to choose from and 15 minutes to prepare a 5 minute presentation. The typical competencies assessed
              in the presentation exercise are:
            </Typography>
            <Grid container className="competency-grid" wrap="wrap">
              {competencies.map(((competency) => (
                <Card key={uuid()}><CardContent><Typography>{competency}</Typography></CardContent></Card>
              )))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Tips for your Presentation</Typography> <br />
            <ul className="bullet-points">
              {presentationTips.map((tip) => (<li key={uuid()}><Typography>{tip}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/yoD8RMq2OkU" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Group Presentations</Typography>
                <br />
                <Typography>Some assessment centres may involve working with other applicants to give a presentation.
                  This will usually be short and based on a task completed as a team, such as sorting items in order of
                  importance. It is important to ensure everyone is given the opportunity to speak during a group
                  presentation to show team work and inclusion. Make sure to equally divide the presentation into
                  sections and try to tailor it so each person is happy with their section.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Giving your Presentation</Typography> <br />
                <ul className="bullet-points">
                  {presentationPoints.map((point) => (<li key={uuid()}><Typography>{point}</Typography></li>))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">How Presentations are Assessed</Typography> <br />
            <Typography>The assessors will gain an overall feel of your presentation, but to standardise assessment
              amongst candidates and to justify hiring decisions, the assessors will be scoring you against a set of
              criteria agreed with the employer. Each employer will have their own scoring criteria but some common
              criteria used is:
            </Typography>
            <Grid container className="competency-grid" wrap="wrap">
              {assessmentPoints.map((point) => (
                <Card key={uuid()}><CardContent><Typography>{point}</Typography></CardContent></Card>))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Presentations;
