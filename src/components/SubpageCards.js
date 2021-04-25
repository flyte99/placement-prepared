import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import 'src/css/Cards.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import pages from './home/pages';

const SubpageCards = ({ topic }) => {
  const navigate = useNavigate();
  let subpages;

  for (let idx = 0; idx < pages.length; idx++) {
    if (pages[idx].title === topic) {
      subpages = pages[idx].subpages;
    }
  }

  return (
    <Grid container className="center-grid-container">
      {subpages.map((page) => (
        <Card key={uuid()} className="subpage-card">
          <CardContent>
            <Button
              sx={{ justifyContent: 'center', width: '100%' }}
              onClick={() => navigate(`/${page.path}`, { replace: true })}
            >
              {page.title}
            </Button>
            <Typography>{page.summary}</Typography>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

SubpageCards.propTypes = {
  topic: PropTypes.string.isRequired
};

export default SubpageCards;
