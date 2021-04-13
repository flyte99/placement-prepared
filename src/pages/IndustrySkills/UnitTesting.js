import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import { Helmet } from 'react-helmet';
import ReactPlayer from 'react-player';
import 'src/css/Cards.css';
import 'src/css/Images.css';

const jUnitLogo = require('/static/images/resources/junit.jpg').default;
const nUnitLogo = require('/static/images/resources/nunit.png').default;
const jMockit = require('/static/images/resources/jmockit.JPG').default;
const emmaLogo = require('/static/images/resources/emma.png').default;
const phpUnitLogo = require('/static/images/resources/phpunit.svg').default;

const UnitTesting = () => {
  const pageTitle = 'Unit Testing';
  const testPattern = [
    { front: 'Arrange', back: 'Initialise objects and set the value of the data passed to the method under test' },
    { front: 'Act', back: 'Invokes the method under test with arranged parameters' },
    { front: 'Assert', back: 'Verifies that the action of the method under test behaves as expected' }
  ];
  const testingTools = [
    { caption: 'Unit testing for Java code', path: 'https://junit.org/junit5/', image: jUnitLogo },
    { caption: 'Unit testing for code in all .net languages', path: 'https://nunit.org/', image: nUnitLogo },
    { caption: 'Open source unit testing tool', path: 'https://jmockit.github.io/', image: jMockit },
    { caption: 'Unit testing for Java code', path: 'http://emma.sourceforge.net/', image: emmaLogo },
    { caption: 'Unit testing for PHP code ', path: 'https://phpunit.de/', image: phpUnitLogo }
  ];
  const bestPractices = [
    'Test cases should be independent - in case of any enhancements or change in requirements, unit test cases should not be affected',
    'Follow clear and consistent naming conventions - e.g. "test[feature being tested][behaviour expected]"',
    'Fix bugs found during testing before proceeding to the next phase of the Systems Development Life Cycle (SDLC)',
    'Test as you code'
  ];

  return (
    <>
      <Helmet><title>{pageTitle} | Placement Prepared</title></Helmet>
      <Box sx={{ m: 3 }}><Typography color="textPrimary" variant="h2">{pageTitle}</Typography></Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Basics</Typography>
            <Typography>Unit testing break down the functionality of a program into discrete testable behaviours that
              can be tested as individual units. It also allows for safe refactoring and better code maintenance because
              unit tests will detect when additions or alterations break other parts of the code preventing the problem
              occurring in the production environment.
            </Typography>
            <Box className="embedded-video">
              <ReactPlayer url="https://youtu.be/3kzHmaeozDI" />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Writing Tests</Typography>
            <Typography>Unit testing relies on creating mock objects, which fill in for the missing parts of the program
              to test sections of code that are not yet part of a complete application. There may be functions that need
              variables or objects that have not been created yet so mock objects are created solely for the purpose of
              unit testing. The AAA (Arrange, Act, Assert) pattern is a common way of writing unit tests for a method
              under test:
            </Typography><br />
            <Grid container className="center-grid-container" spacing={2} wrap="wrap">
              {testPattern.map(((card) => (
                <Flippy>
                  <FrontSide>
                    <Card>
                      <CardContent><Typography className="testing-pattern">{card.front}</Typography></CardContent>
                    </Card>
                  </FrontSide>
                  <BackSide>
                    <Card>
                      <CardContent><Typography className="testing-pattern">{card.back}</Typography></CardContent>
                    </Card>
                  </BackSide>
                </Flippy>
              )))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Automated Unit Testing Tools</Typography>
            <div className="img-block">
              {testingTools.map((item) => (
                <Box>
                  <div className="link-img">
                    <a target="_blank" rel="noreferrer" href={item.path}>
                      <Image style={{ width: 130, height: 130 }} src={item.image} />
                    </a>
                  </div>
                  <Typography className="tool-img-caption">{item.caption}</Typography>
                </Box>
              ))}
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ m: 5 }}>
        <Card>
          <CardContent>
            <Typography color="textPrimary" variant="h3">Best Practices</Typography> <br />
            <ul className="bullet-points">
              {bestPractices.map((point) => (<li><Typography>{point}</Typography></li>))}
            </ul>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default UnitTesting;
