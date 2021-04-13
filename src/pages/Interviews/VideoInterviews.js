import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Images.css';

const image = require('/static/images/resources/shortlistme-logo.png').default;

const VideoInterviews = () => {
  const pageTitle = 'Video Interviews';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Live On-Screen Interviews</Typography> <br />
            <Typography>These interviews have increased in popularity due to the coronavirus pandemic where traditional
              face-to-face interviews are done using video calling software such as Zoom, Microsoft Teams or Skype.
              Practising on your own before a video interview using your laptop to record yourself can be done to see
              how you come across on screen so adjustments can be made before the real interview. For example, check
              your body language and tone of voice to ensure you are not slouched and that you speak clearly at a pace
              where you can be easily understood. Having bullet pointed notes where you can see them easily can prompt
              answers if you find yourself struggling during the interview.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video">
        <ReactPlayer url="https://youtu.be/ydlSq1siuvI" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Pre-recorded Video Interviews</Typography> <br />
            <Typography>Pre-recorded or asynchronous video interviews are often used to filter candidates at an early
              stage and can be an alternative to phone interviews. They require candidates to respond to questions using
              an online video interface. Answers are recorded for the employer to review at a later date. There is
              usually a time limit for preparing your answer (e.g. 30 seconds) and then a time limit for answering the
              question (e.g. 2 minutes). Typically there is only one attempt to answer each question so it is important
              to practice questions beforehand and do the same preparation for video interviews as for in person
              interviews. An invitation to complete the interview will be emailed to you and you will need to complete
              it before a certain deadline. It’s common for employers to outsource pre-recorded video interviews to
              external organisations such as Sonru, SparkHire, HireVue, VidCruiter, LaunchPad and InterviewStream.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Example Video Interview Questions</Typography>
            <Box className="embedded-video">
              <ReactPlayer url="https://youtu.be/9BlTO3jURwk" />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <div className="shortlist-img">
          <a target="_blank" rel="noreferrer" href="https://go.shortlister.com/marketplace/univreading">
            <Image imageStyle={{ width: 300, height: 170 }} src={image} />
          </a>
        </div>
        <Typography className="img-caption">Practice and perfect your interview skills using Shortlist.me</Typography>
      </Box>
    </>
  );
};

export default VideoInterviews;
