import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Components.css';

const TelephoneInterviews = () => {
  const pageTitle = 'Telephone Interviews';
  const tips = [
    'Let members of your household know when you will be on the phone and ask them to leave the room and remain quiet',
    "Only use speakerphone if you're sure there will be no interruptions and you are comfortable with this way of using a phone",
    "Dressing formally can help to feel professional so you're more likely to sound professional",
    'Make sure you are somewhere with a good signal and that your mobile is charged, topped up and switched on',
    'Check that your answerphone message is appropriate and will help to create a professional first impression',
    'Sit next to a table or desk with your notes, a copy of your application or CV, the interview details and a pen and paper to hand. Put them into a good order so that you can easily reach for information you might want to refer to',
    'If the call comes at an unexpected or awkward time, you could ask your interviewer to wait for a few minutes while you move to a quieter room or make other adjustments',
    "If you're the one making the call, take a couple of deep breaths before you dial and remember to smile",
    'Stay calm - Answer clearly and at a reasonable pace',
    'Answer the phone professionally - Address your interviewer as Miss, Mrs or Mr unless invited to use his or her first name',
    'Do ask questions at the end, but this is not the time for a discussion about salary, training and start dates'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Preparing for Placement</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Telephone interviews are often used at an early stage of the graduate recruitment process to
              filter applicants and decide who to invite to a second interview or assessment centre. The questions are
              likely to focus more on your general competencies and skills, and it&apos;s a good opportunity to show
              your enthusiasm and commitment in a short conversation. You could also be given a structured assessment
              such as a personality test over the phone. For example, your interviewer might read out a series of
              statements on areas such as working on your own, and ask you to rate how well these reflect your
              preferences. From the employer&apos;s point of view, they provide useful insights into your verbal
              communication skills.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Preparing for a Phone Interview</Typography> <br />
            <Typography>It&apos;s normal to be nervous before a telephone interview, but it will really help if you know
              you&apos;ve done the groundwork. Make sure you find out as much as you can about the recruiter. Read the
              job description carefully and think about how you match the selection criteria. Write down any questions
              you might like to ask, as well as planning answers to those questions you think are likely to come up such
              as&quot;Tell me about yourself&ldquo; and &quot;What interests you in the job?&ldquo;. If you feel you
              need more experience of using the phone in a professional context to build your confidence, ask a friend,
              a relative or someone at your careers service to help. They’ll be able to give you feedback on how you
              come across by phone. You could also record yourself so that you can listen back and identify any
              problems, such as speaking too quietly or quickly.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Top Tips</Typography> <br />
            <ul className="bullet-points">
              {tips.map(((tip) => (<li><Typography>{tip}</Typography></li>)))}
            </ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Example Phone Interview Question</Typography>
            <Box className="embedded-video">
              <ReactPlayer url="https://youtu.be/7lbwfkCfNQ4" />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default TelephoneInterviews;
