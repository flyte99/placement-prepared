import { Box, Card, CardContent, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import SubpageCards from 'src/components/SubpageCards';
import 'src/css/Components.css';
import 'src/css/Images.css';

const targetJobsLogo = require('/static/images/resources/target-jobs.png').default;
const rateMyPlacementLogo = require('/static/images/resources/ratemyplacement.jpg').default;
const gradcrackerLogo = require('/static/images/resources/gradcracker.jpg').default;
const indeedLogo = require('/static/images/resources/indeed.jpg').default;
const prospectsLogo = require('/static/images/resources/prospects.png').default;
const glassdoorLogo = require('/static/images/resources/glassdoor.png').default;
const workInStartupsLogo = require('/static/images/resources/work-in-startups.jpg').default;

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

  const imgs = [
    { caption: 'TARGET Jobs', path: 'https://targetjobs.co.uk/career-sectors/it-and-technology/', image: targetJobsLogo },
    { caption: 'Rate My Placement', path: 'https://www.ratemyplacement.co.uk/', image: rateMyPlacementLogo },
    {
      caption: 'Gradcracker',
      path: 'https://www.gradcracker.com/search/computing-technology/jobs/',
      image: gradcrackerLogo
    },
    { caption: 'Indeed', path: 'https://www.indeed.co.uk/', image: indeedLogo },
    { caption: 'Prospects', path: 'https://www.prospects.ac.uk/', image: prospectsLogo },
    { caption: 'Glassdoor', path: 'https://www.glassdoor.co.uk/', image: glassdoorLogo },
    { caption: 'Work in Startups', path: 'https://workinstartups.com/', image: workInStartupsLogo }
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
              {imgs.map((item) => (
                <div>
                  <a target="_blank" rel="noreferrer" href={item.path}>
                    <Image style={{ width: 130, height: 130 }} src={item.image} />
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
