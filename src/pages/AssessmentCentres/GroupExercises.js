import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Components.css';

const GroupExercises = () => {
  const pageTitle = 'Group Exercises';

  return (
    <>
      <Helmet><title>{pageTitle} | Preparing for Placement</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Group exercises are used to assess your communication and problem-solving skills to ensure you
              can work effectively in a team. There are a variety of activities that an organisation may choose such as
              working through a job-related scenario, discussion groups or exercises that involve role-playing to a
              specific brief. In most group exercises, the candidates are deliberately not assigned a particular role.
              This is done to see who naturally is a leader, a facilitator, an ideas generator, etc. The type of
              behaviour assessors are looking for will depend on what competencies the company has decided are
              important. Think of a valuable point to make, make it, and avoid being either the loud and shouty one or
              the quiet and subservient one. It is important to support the group in completing the task while also
              promoting yourself by showing yourself as a good team player.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/R1VflXIeZEM?t=8" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Group Exercise: Icebreaker</Typography> <br />
            <Typography>One of the first things candidates might be faced with at their assessment centre is an
              icebreaker exercise. Typically a candidate will be asked to spend 5-10 minutes finding about the person
              next to them and then tell the rest of the group about that person. This is a good way to get candidates
              chatting to each other, and for the group to feel more familiar with everyone. You may also be asked to
              &quot;tell the group something about yourself which not many people know&ldquo; or &quot;tell the group
              something interesting about yourself&ldquo; as a different icebreaker. This is a good time to project on
              other candidates that you&apos;re a friendly approachable person to talk to, because you want them on your
              side during the exercises.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Group Exercise: Role-play</Typography> <br />
            <Typography>In some assessment centre group activities, candidates are assigned roles, such
              as &quot;co-ordinator&ldquo;, &quot;client&ldquo;, &quot;regulator&ldquo; or &quot;chairman&ldquo;. In
              these cases make sure you stick to your role and try to negotiate the best outcome for your character. At
              some point in the real job you will inevitably have to fight for a view not necessarily held by you. This
              assessment centre exercise is designed to measure how good you are at this. If the exercise does not
              stipulate specific roles to individuals, be careful not to tell other candidates what role they should
              adopt. Instead try &quot;does anyone have any strong feelings about being the presenter&ldquo; and wait
              for volunteers. It is poor leadership to assign roles to people before you have any idea of their skills,
              so avoid it.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Group Exercise: Marshmallow Tower</Typography> <br />
            <Typography>
              A common group exercise at assessment centres is to build a tower from marshmallows and spaghetti:
            </Typography>
          </CardContent>
          <Box className="embedded-video">
            <ReactPlayer url="https://youtu.be/H0_yKBitO8M" />
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default GroupExercises;
