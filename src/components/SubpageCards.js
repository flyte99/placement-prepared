import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import 'src/css/Cards.css';
import { v4 as uuid } from 'uuid';

const SubpageCards = ({ subpages }) => (
  <Grid container className="center-grid-container">
    {subpages.map((page) => (
      <Card key={uuid()} className="subpage-card">
        <CardContent>
          <Button sx={{ justifyContent: 'center', width: '100%' }} href={page.path}>
            {page.title}
          </Button>
          <Typography>{page.summary}</Typography>
        </CardContent>
      </Card>
    ))}
  </Grid>
);

SubpageCards.propTypes = {
  subpages: PropTypes.array
};

export default SubpageCards;
