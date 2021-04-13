import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Components.css';
import 'src/css/Images.css';

const image = require('/static/images/resources/linkedin.png').default;

const LinkedIn = () => {
  const pageTitle = 'LinkedIn';
  const profileFactCards = [
    {
      front: 'Name and Headline',
      back: 'In one line, explain your current role (or where you are studying), what you are interested in and what you are hoping to find.'
    },
    {
      front: 'Profile and Background photos',
      back: 'Aim for approachable, relaxed and friendly profile pictures while avoiding plain white backgrounds and maintaining professionalism. Cover/Background photos can also be set and should reflect your interests, passions and/or ambitions.'
    },
    {
      front: 'About',
      back: "Explain who you are, briefly mention what your current job or degree involves (such as your specialisation or the projects you are most proud of) and provide a bit about your background. There's also space to attach media (such as images, videos, presentations, links to blog posts and online portfolios) to showcase the work that you have been involved in."
    },
    {
      front: 'Experience',
      back: 'List previous examples of your work experience, including the job title, name of employer/organisation, length of time spent in each role and a brief description of responsibilities. Mentioning specific details of achievements is always impressive.'
    },
    {
      front: 'Education',
      back: 'List the details of major qualifications in reverse chronological order. Include specific modules and dissertation title for your degree to differentiate yourself from other students and graduates.'
    },
    {
      front: 'Skills and Accomplishments',
      back: "List your key skills, proficiencies and traits focusing on five to ten key skills you think are especially worth highlighting. This might include languages you can speak, skills particularly important to the sector you're interested in, and certifications you've achieved or are working towards. Your connections on LinkedIn can \"endorse\" specific skills although it is not vital to have these endorsements."
    },
    {
      front: 'Recommendations',
      back: 'Here people you have worked with can write a few sentences advocating for you and your capabilities. If you have connected with a colleague from a part-time job or other form of work experience, you can "Request a recommendation" from them.'
    }
  ];
  const connectionTips = [
    "Personalise your connection request - When sending a connection request, select the option to \"Add a note\" especially if it's someone you don't know well personally",
    "Join Groups - Groups are places where like-minded professionals can share resources and have discussions. Look out for groups related to the sector, job role or employer that you're interested in and join them to further expand your network",
    "Connect during offline networking events - If you're attending a careers fair or a networking event, and you feel it is appropriate, you can ask people whether you can connect with them on LinkedIn"
  ];
  const topTips = [
    'Change you LinkedIn URl - Having a more search-friendly or snappy online identity can be part of your personal brand',
    'Constantly update your profile so it becomes a growing record of your working life',
    "Don't just include the jobs and work experience that are directly relevant to the sector and/or job you are interested in. Part-time roles, volunteering positions and positions of responsibility from extracurricular activities are all worth putting on your LinkedIn profile",
    'You can download your profile as a PDF and use it as a broad CV',
    'Be Professional - Treat all of your activity on LinkedIn as if you were interacting with a potential employer at a networking event',
    'Start posting and being an active presence to grow your personal brand'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box className="embedded-video">
        <ReactPlayer url="https://youtu.be/ZVlUwwgOfKw" />
        <ReactPlayer url="https://youtu.be/zd4ALKv8Das" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Typography color="textPrimary" variant="h3">Creating a Profile</Typography> <br />
        <Grid container className="center-grid-container" spacing={2} wrap="wrap">
          {profileFactCards.map(((card) => (
            <Flippy>
              <FrontSide>
                <Card><CardContent><Typography className="linkedin-card">{card.front}</Typography></CardContent></Card>
              </FrontSide>
              <BackSide>
                <Card><CardContent><Typography className="linkedin-card">{card.back}</Typography></CardContent></Card>
              </BackSide>
            </Flippy>
          )))}
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={7} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Making Connections</Typography> <br />
                <Typography>The core of LinkedIn is building up your &quot;connections&ldquo; but LinkedIn only allows
                  you to send invites to people who it considers to already be &quot;in your network&ldquo;. This
                  includes connections of connections (called &quot;2nd degree connections&ldquo;), connection
                  suggestions based on academic or employment history, contacts imported from your email address book
                  and people who are in the same LinkedIn groups as you.
                </Typography>
                <ul className="bullet-points">
                  {connectionTips.map((tip) => (<li><Typography>{tip}</Typography></li>))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={5} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Finding Opportunities</Typography> <br />
                <Typography>Employers advertise their job vacancies on LinkedIn and you often have the ability to apply
                  for the opportunity directly using your LinkedIn account. There is a specific &quot;Job&ldquo; tab
                  within LinkedIn where jobs can be filtered by the title, skill, company and location. Recruiters may
                  also use LinkedIn to headhunt candidates and there are tools that when utilised well can show
                  recruiters that you are interested in being hired. On your LinkedIn profile there is an option to put
                  that you are open to &quot;finding a job&ldquo; where you can show recruiters you are looking for work
                  in a particular industry and/or location. These opportunities can be filtered further by putting a
                  start date and the type of job (e.g. full-time, part-time, internship, etc.)
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Top Tips</Typography> <br />
            <ul className="bullet-points">{topTips.map((tip) => (<li><Typography>{tip}</Typography></li>))}</ul>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <div className="link-img">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
            <Image style={{ width: 130, height: 130 }} src={image} />
          </a>
        </div>
        <Typography className="img-caption">Create your LinkedIn account now</Typography>
      </Box>
    </>
  );
};

export default LinkedIn;
