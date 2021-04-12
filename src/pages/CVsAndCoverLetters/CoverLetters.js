import { Helmet } from 'react-helmet';
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
import ReactPlayer from 'react-player';
import 'src/css/Components.css';

const CoverLetters = () => {
  const pageTitle = 'Cover Letters';

  return (
    <>
      <Helmet><title>{pageTitle} | Preparing for Placement</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>There are many variations of cover letters including personal statements, an accompanying email,
              motivational statement or a supporting statement. Having a skeleton of a cover letter &quot;ready to
              go&ldquo; is great for applying to multiple job opportunities, which gives insight to an applicant&apos;s
              skills and motivations for applying. However, it is vital to tailor a cover letter to the organisation
              being applied to and provide information to spotlight the important and relevant details within the CV. If
              you are uncertain of what to write, there is a large variety of online templates and examples that can be
              adapted for your skill set and application.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video">
        <ReactPlayer url="https://youtu.be/hrZSfMly_Ck" />
      </Box>
      <Box sx={{ m: 5 }}>
        <Grid container className="center-grid-container" spacing={6} wrap="wrap">
          <Grid item className="grid-item" md={4} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Applying By Email</Typography> <br />
                <Typography>When emailing a CV and Cover Letter to a potential employer, you should make sure it comes
                  from professional email such as your student email or one containing simply your name (no nicknames).
                  Use the same font type and size in both documents to portray consistency. If you have been asked to
                  send
                  your application by email, you can attach both letter and CV to a brief email. Alternatively, you can
                  use the covering letter as the text of the email and attach your CV. Make sure you follow any
                  instructions the employer has given.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className="grid-item" md={4} sm={6} xs={12}>
            <Card>
              <CardContent>
                <Typography color="textPrimary" variant="h3">Speculative letters</Typography> <br />
                <Typography>A speculative application is sent to an organisation to see if they have any opportunities
                  which have not yet been advertised. It can be a good way of sourcing work experience or working
                  shadowing. Good research and careful thinking around the employer/organisation will help you to
                  suggest
                  roles/areas you are interested in. Along with a well researched speculative letter, try to think about
                  the employer&apos;s point of view by explaining what you can bring to the organisation. Write about
                  relevant experience or your interest in the area of work and lots of enthusiasm.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardHeader title="Checklist" />
          <Divider />
          <CardContent>
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Proof Read -  Check the document for grammatically or spelling errors, particularly make sure all names are spelled correctly. It can be helpful to have it read back to you using either Google Translate or the Read Aloud function within Microsoft Word (under Review)"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Be Clear - Make it clear what you are looking for, i.e. a meeting to discuss your CV further, an interview or work shadowing. If it is a speculative letter, explain you will follow it up with a phone call in the near future"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Be Concise - Try not to write more than one side of A4 as many recruiters do not have time to read essays from every applicant"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label="Contact - Always try to write to a specific, named person using their correct title. If job advertisement doesn't have a named person, research the organisation to find who is in charge of recruitment"
            />
            <FormControlLabel
              control={(<Checkbox color="primary" />)}
              label='End the Letter Correctly - If you address the letter to a name person (i.e. "Dear Ms Smith"), sign off with "Yours sincerely". Use "Yours faithfully" if the letter is addressed to "Dear Sir/Madam".'
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default CoverLetters;
