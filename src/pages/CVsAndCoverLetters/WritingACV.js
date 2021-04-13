import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';

const CVsAndCoverLetters = () => {
  const pageTitle = 'Writing a CV';

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardHeader title="Things to Include" />
          <Divider />
          <CardContent>
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Name - Use your name as the heading, include the name you like to be known as if this is different from your official name.  Use capital letters for the first letter of your first name and surname"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Contact details – you can include your full address, or if you prefer, your location e.g. Reading. Include your contact phone number and a professional looking email address, which includes your name. You can add a link to your LinkedIn account if it is up to date or creative portfolio/website link"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Employment history (if applicable ) - start with your current or most recent job and include how long you were employed. Also add information about the role and the responsibilities you had"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Education – start with your current course and include the full course title and date you started to present and university e.g. September 2019-Present BSc Computer Science with Industrial Year, University of Reading and include results if required.  Many internship, placements and graduate roles require certain grades"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Interests - list interests or relevant experience you have related to the job that does not fit within the other sections. This could include volunteering, certifications and achievements"
            />
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video">
        <ReactPlayer url="https://youtu.be/_fP43gcBywU" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Typography color="textPrimary" variant="h3">Building the Perfect CV</Typography><br />
        <Grid container spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={12} sm={6} xs={12}>
            <Card className="perfect-cv-card">
              <CardHeader title="1. Choose the story you want to tell" />
              <Divider />
              <CardContent>
                <Typography>Use your CV to construct a narrative about yourself. This could be your track record of high
                  achievement, your long-held commitment to a profession or anything in your personal
                  backstory.
                </Typography>
              </CardContent>
            </Card>
            <Card className="perfect-cv-card">
              <CardHeader title="2. Select the best structure" />
              <Divider />
              <CardContent>
                <Typography>Consider how to group together your experiences and extracurriculars and which headings to
                  use that will enhance your story. For instance, if you want to convey a track record of high
                  achievement, you could open your CV with a section listing professional and volunteering achievements.
                  Ensure you choose examples that emphasise how you will be right for the job and write them up in such
                  a way that showcases your skills.
                </Typography>
              </CardContent>
            </Card>
            <Card className="perfect-cv-card">
              <CardHeader title="3. Talk the employer's language" />
              <Divider />
              <CardContent>
                <Typography>Tailor your story so that your CV immediately tells the recruiter that you are the candidate
                  they are looking for. When writing up the individual elements of your CV provide examples of the
                  skills, behaviours and values that the employer wants (typically listed in the job description). When
                  you write your CV, analyse the language the employer uses and echo it. Incorporate the key skills,
                  experience, values and behaviours the employer seeks through your CV and make sure that they appear
                  prominently by highlighting them in bold or in colour when this will not detract from the legibility.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={12} sm={6} xs={12}>
            <Card className="perfect-cv-card">
              <CardHeader title="4. Put yourself at the centre and in context" />
              <Divider />
              <CardContent>
                <Typography>Provide sufficient context to follow your story and gauge your achievements as employers
                  will not necessarily recognise your previous employers or student societies. Make sure you outline the
                  background to the task, the actions you took and your personal results.
                </Typography>
              </CardContent>
            </Card>
            <Card className="perfect-cv-card">
              <CardHeader title="5. Create talking points for an interview" />
              <Divider />
              <CardContent>
                <Typography>You could be asked about anything on your CV in an interview and the best interviews turn
                  into natural conversations, so add possible talking points throughout your CV. If you have an
                  out-of-the-ordinary hobby or a gap-year experience that taught you valuable skills, include
                  it. &quot;The key thing is to ensure that you are passionate about the interests and extracurricular
                  activities on your CV so that you can talk about them in-depth and set yourself apart during
                  interviews.&ldquo; - James Edmunds (a graduate product manager for L’Oréal)
                </Typography>
              </CardContent>
            </Card>
            <Card className="perfect-cv-card">
              <CardHeader title="6. Make any gaps in your CV part of your story" />
              <Divider />
              <CardContent>
                <Typography>You do not have to make sure that every university holiday is accounted for, but if there
                  are unusual or unaccounted for periods of time on your CV (such as taking an extra year or two to
                  complete your degree or a year of unemployment), employers will clock them. These gaps can be
                  addressed directly in the CV or sections can be added (such as skills) to make the gaps less obvious.
                  If you do choose to address the gap directly, be factual and focus on the positives.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CVsAndCoverLetters;
