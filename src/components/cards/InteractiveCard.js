import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Flippy, { BackSide, FrontSide } from 'react-flippy';

const InteractiveCard = ({ cards, styling }) => (
  <Grid container className="center-grid-container" spacing={2} wrap="wrap">
    {cards.map(((card) => (
      <Box sx={{ m: 1 }}>
        <Flippy key={card.front}>
          <FrontSide className={styling}>
            <Typography>{card.front}</Typography>
          </FrontSide>
          <BackSide className={styling}>
            <Typography>{card.back}</Typography>
          </BackSide>
        </Flippy>
      </Box>
    )))}
  </Grid>
);

InteractiveCard.propTypes = {
  cards: PropTypes.array.isRequired,
  styling: PropTypes.string.isRequired
};

export default InteractiveCard;
