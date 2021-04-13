import { Avatar, Box, Card, CardContent, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import SubpageCards from 'src/components/SubpageCards';
import 'src/css/Components.css';
import 'src/css/Images.css';

const CVsAndCoverLetters = () => {
  const pageTitle = 'CVs and Cover Letters';
  const subpages = [
    {
      title: 'Writing a CV',
      path: 'cvs_and_cover_letters/cv',
      summary: "Employers ask for a Curriculum Vitae (CV) as a summary of an applicant's background, qualifications and extracurricular interests."
    },
    {
      title: 'Cover Letters',
      path: 'cvs_and_cover_letters/cover-letters',
      summary: 'Cover letters accompany a CV to emphasise why an applicant is applying to a particular role and how they are suitable.'
    },
    {
      title: 'LinkedIn',
      path: 'cvs_and_cover_letters/LinkedIn',
      summary: 'LinkedIn is an employment-orientated social media that many companies are now using to recruit employees.'
    }
  ];

  const resources = [
    {
      caption: 'TARGET Jobs',
      path: 'https://targetjobs.co.uk/career-sectors/it-and-technology/',
      image: '/static/images/resources/target-jobs.png'
    },
    {
      caption: 'Rate My Placement',
      path: 'https://www.ratemyplacement.co.uk/',
      image: '/static/images/resources/ratemyplacement.jpg'
    },
    {
      caption: 'Gradcracker',
      path: 'https://www.gradcracker.com/search/computing-technology/jobs/',
      image: '/static/images/resources/gradcracker.jpg'
    },
    { caption: 'Indeed', path: 'https://www.indeed.co.uk/', image: '/static/images/resources/indeed.jpg' },
    { caption: 'Prospects', path: 'https://www.prospects.ac.uk/', image: '/static/images/resources/prospects.png' },
    { caption: 'Glassdoor', path: 'https://www.glassdoor.co.uk/', image: '/static/images/resources/glassdoor.png' },
    {
      caption: 'Work in Startups',
      path: 'https://workinstartups.com/',
      image: '/static/images/resources/work-in-startups.jpg'
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
              for your details and a CV. LinkedIn is a great tool for finding opportunities but also for recruiters to
              headhunt applicants.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <SubpageCards subpages={subpages} />
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h2">Finding Job Opportunities</Typography><br />
            <Typography>Organisations will post roles they are hiring for on their websites and on recruitment websites
              such as the following:
            </Typography>
            <div className="img-block">
              {resources.map((item) => (
                <div>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <Avatar alt={item.caption} style={{ width: 130, height: 130 }} src={item.image} variant="square" />
                  </a>
                  <Box sx={{ m: 1 }}>
                    <Typography>{item.caption}</Typography>
                  </Box>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box className="embedded-video" sx={{ m: 5 }}>
        <ReactPlayer url="https://youtu.be/NTIBXS7pbBs" />
      </Box>
    </>
  );
};

export default CVsAndCoverLetters;
