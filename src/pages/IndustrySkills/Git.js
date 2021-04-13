import { Avatar, Box, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import 'src/css/Images.css';
import 'src/css/Components.css';

const Git = () => {
  const pageTitle = 'Git';
  const workflowCards = [
    {
      title: 'Subversion-Style Workflow',
      description: 'A centralized workflow is very common, and consists of developers pushing changes to the same server (shared repository). Git will not allow you to push if someone has pushed since the last time you fetched',
      image: '/static/images/material/centralized-git-workflow.png',
      height: 226
    },
    {
      title: 'Integration Manager Workflow',
      description: 'Developers clone from the "blessed" repository and push to their own independent repositories. They then ask the integrator to pull in their changes. This is the type of development model often seen with open source or GitHub repositories',
      image: '/static/images/material/integration-git-workflow.png',
      height: 181
    },
    {
      title: 'Dictator and Lieutenants Workflow',
      description: 'Some people ("lieutenants") are in charge of a specific subsystem of the project and they merge in all changes related to that subsystem. Another integrator (the "dictator") can pull changes from only their lieutenants and then push to the "blessed" repository that everyone then clones from again',
      image: '/static/images/material/development-git-workflow.png',
      height: 243
    }
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography> <br />
            <Typography>Git is one of the most popular SCM (Source Code Management) tools, that keeps a history of
              changes to files so you can undo changes or work on a local branch and then merge the results into the
              main repository. Many IDEs (Integrated Development Environments) are integrated with Git providing a UI
              (User Interface) but understanding how to use Git from the command line prepares you for all situations.
              Git has an intermediate area where commits can be formatted and reviewed before completing the commit,
              which is called the &quot;staging area&ldquo; or &quot;index&ldquo;.
            </Typography>
            <Box sx={{ m: 2 }}>
              <div className="img-centre">
                <Avatar
                  alt="Git Staging Area"
                  style={{ width: 400, height: 230 }}
                  src="/static/images/material/git-staging-area.png"
                  variant="square"
                />
              </div>
              <Typography className="img-caption">Git Staging Area</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Applications in Industry</Typography> <br />
            <Typography>Git supports several different workflows due to its branching system:
            </Typography>
            <Grid item md={12} sm={6} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} xs={12}>
              {workflowCards.map((card) => (
                <Grid item md={4} sm={6} sx={{ display: 'flex', flexDirection: 'column' }} xs={12}>
                  <Card>
                    <CardHeader title={card.title} />
                    <Divider />
                    <CardContent>
                      <Flippy style={{ height: 300 }}>
                        <FrontSide className="git-workflows"><Typography>{card.description}</Typography></FrontSide>
                        <BackSide className="git-workflows">
                          <Avatar
                            alt={card.title}
                            style={{ width: 450, height: card.height }}
                            src={card.image}
                            variant="square"
                          />
                        </BackSide>
                      </Flippy>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <div className="img-centre">
          <a target="_blank" rel="noreferrer" href="https://git-scm.com/downloads">
            <Avatar
              alt="Git Logo"
              style={{ width: 130, height: 130 }}
              src="/static/images/resources/git.png"
              variant="square"
            />
          </a>
        </div>
        <Typography className="img-caption">Download Git to get started</Typography>
      </Box>
    </>
  );
};

export default Git;
