import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { v4 as uuid } from 'uuid';
import PageFooter from '../../components/PageFooter';

const VirtualAssessmentCentres = () => {
  const pageTitle = 'Virtual Assessment Centres';
  const centreActivities = [
    'Information Sessions',
    'Question and Answer Sessions',
    'A Group Exercise - Can be based on a case study',
    'An Individual Case Study Exercise - Technical Assessment',
    'A Presentation',
    'An Interview'
  ];
  const centreStructure = [
    'Timetable',
    'Information about what each exercise involves and the skills they are assessing',
    'Some tips on how to approach each exercise',
    'Guidance on dress codes',
    'Joining instructions for the technical platform they are using',
    'Information on what to ‘bring with you’, eg notepad and pen',
    'Contact details for the recruitment team if you have any specific questions'
  ];
  const technicalElements = [
    'Ask that people who share your WiFi signal avoid using it if possible to give yourself the best chance of connecting',
    'Make sure your device is fully charged before you begin and have your charger handy',
    'Practice positioning yourself in front of the camera so that you are seen in the best light - If seeing your face in the corner of the screen makes you self-conscious, see if the video platform functionality allows you to "hide" your picture. If not, consider putting a post-it or similar over your picture',
    'Do a sound check well in advance to check for any issues with audio',
    'Make sure you are comfortable and sitting upright'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
                <Typography>It is not clear how permanent the change will be to having virtual assessment centres but
                  due to the ongoing pandemic, they are becoming increasingly popular. Virtual assessment centres are a
                  way for an employer to get a group of candidates together online to be assessed for its graduate or
                  work experience programmes. Just as with an in-person assessment centre, activities could include:
                </Typography>
                <ul className="bullet-points">
                  {centreActivities.map((activity) => (<li key={uuid()}><Typography>{activity}</Typography></li>))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={6} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Differences from In-Person Assessment Centres</Typography>
                <br />
                <Typography>An advantage of an in-person assessment centre is that you visit the employer’s offices,
                  talk to employees and get a sense of whether you can see yourself working there. This is harder to do
                  on a virtual platform. Although some companies have put together videos of their teams and offices for
                  candidates to watch beforehand, it is not quite the same. It is useful to ask questions that will help
                  you work out whether the employer will suit you (this could be during your interview or in an
                  information session). Asking &quot;What do you like best about working here?&ldquo; will get you the
                  information you seek in a tactful way. If you are made an offer by an employer, its recruiters will
                  answer any questions you have if you are still making up your mind. They may also put you in touch
                  with current employees for an informal chat.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Structure</Typography> <br />
            <Typography>Typically, virtual assessment centres last between two and three hours but they may last longer
              depending on the number of activities set. Recruiters build in time to check that the technology is
              working. They also leave time for comfort and refreshment breaks. You usually log into a video or
              specifically designed assessment platform and for certain activities, you may go off into
              separate &quot;rooms&ldquo; with other candidates. It is usual to be given detailed information before the
              assessment centre to help you prepare and to put you at ease. For example:
            </Typography>
            <ul className="bullet-points">
              {centreStructure.map((point) => (<li key={uuid()}><Typography>{point}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Technical Elements</Typography> <br />
            <Typography>If you have a choice of devices, choose the one that gives you the best audio and picture and
              don&apos;t worry about any technical difficulties, the recruiters will do all they can to help. To prepare
              for the technical elements of a virtual assessment centre, you should:
            </Typography>
            <ul className="bullet-points">
              {technicalElements.map((element) => (<li key={uuid()}><Typography>{element}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="virtual_assessment_centres" />
      </Box>
    </>
  );
};

export default VirtualAssessmentCentres;
