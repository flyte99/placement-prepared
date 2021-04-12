import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Components.css';
import SubpageCards from '../../components/SubpageCards';

const AssessmentCentres = () => {
  const pageTitle = 'Assessment Centres';
  const subpages = [
    {
      title: 'Group Exercises',
      path: 'assessment_centres/group_exercises',
      summary: 'Applicants are placed into groups and expected to solve a problem by working together and agreeing on a solution within a set time limit'
    },
    {
      title: 'Virtual Assessment Centres',
      path: 'assessment_centres/virtual',
      summary: 'During the coronavirus pandemic, some graduate employers moved to running virtual or digital assessment centres instead'
    },
    {
      title: 'Presentations',
      path: 'assessment_centres/presentations',
      summary: 'Recruiters can ask applicants to prepare presentations individually or as a group'
    }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Preparing for Placement</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={7} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
                <Typography>Assessment Centres involve a combination of assessed tasks and activities that test an
                  applicant&apos;s suitability for the job. They are typically one of the final stages in the
                  recruitment process where employers observe a group of applicants and how they perform together and
                  individually. Assessment Centres can last from a few hours to a few days and it is important to
                  remember that between tasks, such as during meals and gaps in the schedule, observations continue.
                  This is a chance to show interpersonal skills by asking questions to employees along with other
                  candidates who could end up being colleagues.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={5} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Preparation</Typography> <br />
                <Typography>Before an assessment centre applicants are sent information by the potential employer, such
                  as the schedule, dress code and location. Research into the company (and competitors), industry, role
                  and details of the opportunity on offer is vital preparation before an Assessment Centre as it will
                  help in interviews, presentations and conversations throughout the day.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards subpages={subpages} />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Technical Assessments</Typography> <br />
            <Typography>Technical assessments are used to test an applicant&apos;s technical knowledge by solving
              problems or completing tasks. Technical assessments will vary between organisations from commenting on a
              range of scenarios or hypothetical situations of increasing complexity to brain teasers. Recruiters may
              also ask candidates to work on a short design exercise or code analysis activity. The aim of these
              assessments is to show recruiters that you can react to unfamiliar situations while keeping calm and
              giving your best solution to the problem. Similar to other aspects of the recruitment process, the answer
              you give is not important so don&apos;t worry about getting it &quot;right&ldquo; because knowledge can be
              taught whereas the recruiter is assessing how you think.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/DIR_rxusO8Q" />
      </Box>
    </>
  );
};

export default AssessmentCentres;
