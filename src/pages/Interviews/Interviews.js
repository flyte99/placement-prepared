import { Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Components.css';
import SubpageCards from '../../components/SubpageCards';

const Interviews = () => {
  const pageTitle = 'Interviews';
  const subpages = [
    {
      title: 'Telephone Interviews',
      path: 'interviews/telephone',
      summary: 'Typically focused on the competencies that the recruiter is looking for and used to determine which applicants to invite to a face-to-face interview'
    },
    {
      title: 'Video Interviews',
      path: 'interviews/video',
      summary: 'Applicants are presented with questions and asked to record their response, often within a time limit'
    },
    {
      title: 'Face-to-Face Interviews',
      path: 'interviews/face-to-face',
      summary: 'During Face-to-Face interviews employers explain the job and ask the applicant questions to determine their fit for the role'
    }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography>For a competitive opportunity with a large number of applicants such as a placement year or
              graduate scheme, it is common for employers to use more than one interview stage. This often starts with a
              telephone or asynchronous video interview, and then asking successful applicants to take one (or more)
              face-to-face interviews. Interviews can also occur during an assessment centre or after one where the top
              applicants have been narrowed down as the final stage of the recruitment process. This depends on the
              organisation.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards subpages={subpages} />
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/l0OBCtzk_oM" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Managing Interview Nerves</Typography><br />
            <Box sx={{ m: 5 }}>
              <Grid container spacing={6} wrap="wrap">
                <Card className="nerves-card">
                  <CardHeader title="Reflection" />
                  <Divider />
                  <CardContent>
                    <Typography>Start by reflecting on what happens when you get nervous? Does your heart beat faster,
                      palms
                      get sweaty, do you talk faster? Identify your own experiences. Does this impair your interview
                      performance? If so, how?
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="nerves-card">
                  <CardHeader title="Physiological Remedies" />
                  <Divider />
                  <CardContent>
                    <Typography>Focus on your body can help you feel more in control and it’s possible to relieve some
                      physiological symptoms. Ideas include practicing slowing your breathing (e.g. in for 3, hold for
                      2,
                      out for 3), running cool water over your wrists to cool your body temperature before the
                      interview,
                      taking a pause for a deep breath before you answer a question, and focusing on the feeling of the
                      chair against your back (a good way of making sure your lungs have room for those deep breaths).
                      Try
                      noticing the pressure of your feet on the ground (literally making you feel a little more
                      grounded).
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="nerves-card">
                  <CardHeader title="Cognitive Remedies" />
                  <Divider />
                  <CardContent>
                    <Typography>Write down the negative thoughts that plague you about/during interviews. If your best
                      friend was thinking like this, what would you say to them? Write positive equivalents down to
                      balance
                      things out. Reading about unhelpful thinking styles can be useful here if your thoughts are
                      fuelling
                      anxiety.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="nerves-card">
                  <CardHeader title="Visualisation" />
                  <Divider />
                  <CardContent>
                    <Typography>Take 5 minutes and visualise how you would feel if the interview went well. What would
                      it be
                      like during the interview? How would you feel? How would you feel afterwards? Make the image
                      colourful
                      and detailed and positive.
                    </Typography>
                  </CardContent>
                </Card>
                <Card className="nerves-card">
                  <CardHeader title="Prepare well and practice" />
                  <Divider />
                  <CardContent>
                    <Typography>Familiarity with your material and the experience of being interviewed can reduce
                      anxiety. This means that every interview you do, you’ll become more familiar with the process and
                      thus regardless of the outcome, that’s a valuable experience and an investment in your future
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Interviews;
