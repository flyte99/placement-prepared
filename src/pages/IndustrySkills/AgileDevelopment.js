import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { Helmet } from 'react-helmet';
import ScrumBoard from 'src/components/ScrumBoard';
import 'src/css/Images.css';

const developmentImg = require('/static/images/material/development-cycles.png').default;
const scrumImg = require('/static/images/material/sprint-cycle.png').default;

const AgileDevelopment = () => {
  const pageTitle = 'Agile Development Methods';
  const scrumPhases = [
    'Initial Phase - used to establish the general objectives for the project and design the software architecture',
    'Sprint Cycles - each cycle develops an increment of the system. A cycle is typically 2 to 4 weeks long',
    'Project Closure Phase - completes required documentation (e.g. system help frames and user manuals) and assesses the lessons learned from the project'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Agile development aim to reduce the delivery time for working software systems by interleaving
              program specification, design and implementation. Most software engineering teams will apply core concepts
              of these methodologies to their development cycles although in practice it can be difficult to
              achieve&quot;perfect&ldquo; agile development. Ideally there are frequent system releases to enable
              continuous feedback from users and to maintain simplicity through constant refactoring of code. Pair
              programming is also common among agile teams and involves programmers working in pairs to develop code
              together. This helps develop common ownership of code and spread knowledge across the team, which is
              invaluable when new members join the team.
            </Typography>
            <Box sx={{ m: 2 }}>
              <div className="dev-img"><Image imageStyle={{ width: 400, height: 300 }} src={developmentImg} /></div>
              <Typography className="img-caption">
                A comparison between plan-based development cycles and agile development cycles
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Applications in Industry</Typography> <br />
            <Typography>Scrum is an agile method that focuses on managing iterative development rather than specific
              agile practices. It can be simplified into three phases:
            </Typography>
            <ul className="bullet-points">
              {scrumPhases.map(((phase) => (<li><Typography>{phase}</Typography></li>)))}
            </ul>
            <Box sx={{ m: 2 }}>
              <div className="scrum-img"><Image imageStyle={{ width: 500, height: 200 }} src={scrumImg} /></div>
              <Typography className="img-caption">Stages of a Scrum sprint cycle</Typography>
            </Box>
            <Typography>A Scrum master is responsible for ensuring the Scrum process is followed and channelling
              communications from users and the rest of the organisation to minimise distractions for the development
              team. Products are broken down into sets of manageable and understandable chunks that are assigned to team
              members to complete before the end of the sprint. These chunks can be known as tickets which form part of
              a sprint board, where the whole team have visibility of everything that is being worked on. As progress is
              made, the state of a ticket is changed to reflect what has been done such as moving from &quot;In
              Progress&ldquo; to&quot;Testing&ldquo;. Sprint boards are reviewed in short daily meetings (often called
              Stand-ups), where each member of the team describes what they achieved since the last meeting and what is
              planned for the following day. These meetings allow for adaptions to be made when problems arise and more
              collaboration between team members.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Example Scrum Board</Typography> <br />
            <Typography>
              Try navigating the scrum board example below by moving the tickets between columns. Clicking on a column
              header to learn what the ticket state means.
            </Typography>
            <ScrumBoard />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default AgileDevelopment;
