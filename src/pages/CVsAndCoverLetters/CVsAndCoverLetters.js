import { Avatar, Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import SubpageCards from 'src/components/SubpageCards';
import 'src/css/Components.css';
import 'src/css/Images.css';
import PageFooter from '../../components/PageFooter';

const CVsAndCoverLetters = () => {
  const pageTitle = 'CVs and Cover Letters';
  const resources = [
    {
      caption: 'TARGET Jobs',
      path: 'https://targetjobs.co.uk/career-sectors/it-and-technology/',
      image: '/static/images/resources/job-opportunities/target-jobs.png'
    },
    {
      caption: 'Rate My Placement',
      path: 'https://www.ratemyplacement.co.uk/',
      image: '/static/images/resources/job-opportunities/ratemyplacement.jpg'
    },
    {
      caption: 'Gradcracker',
      path: 'https://www.gradcracker.com/search/computing-technology/jobs/',
      image: '/static/images/resources/job-opportunities/gradcracker.jpg'
    },
    {
      caption: 'Indeed',
      path: 'https://www.indeed.co.uk/',
      image: '/static/images/resources/job-opportunities/indeed.jpg'
    },
    {
      caption: 'Prospects',
      path: 'https://www.prospects.ac.uk/',
      image: '/static/images/resources/job-opportunities/prospects.png'
    },
    {
      caption: 'Glassdoor',
      path: 'https://www.glassdoor.co.uk/',
      image: '/static/images/resources/job-opportunities/glassdoor.png'
    },
    {
      caption: 'Work in Startups',
      path: 'https://workinstartups.com/',
      image: '/static/images/resources/job-opportunities/work-in-startups.jpg'
    }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography>The first stage of any job application is to send your CV to an employer or recruiter. This is
              often accompanied by a CV, however, some organisations have online application portals, which simply ask
              for your details and a CV. LinkedIn is a great tool for finding opportunities and also for recruiters to
              headhunt applicants.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards topic={pageTitle} />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h2">Finding Job Opportunities</Typography><br />
            <Typography>Organisations will post roles they are hiring for on their websites and on recruitment websites
              such as the following:
            </Typography>
            <Grid container className="img-block">
              {resources.map((item) => (
                <div key={item.caption}>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <Avatar alt={item.caption} style={{ width: 130, height: 130 }} src={item.image} variant="square" />
                  </a>
                  <Box sx={{ m: 1 }}>
                    <Typography>{item.caption}</Typography>
                  </Box>
                </div>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/NTIBXS7pbBs" />
      </Box>
      <Box sx={{ m: 5 }}>
        <PageFooter pageComplete="cvs_and_cover_letters" />
      </Box>
    </>
  );
};

export default CVsAndCoverLetters;
