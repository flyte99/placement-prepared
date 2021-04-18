import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import PropTypes from 'prop-types';

const ResourceCard = ({ podcasts, resource, ...rest }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} {...rest}>
    <CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: 3 }}>
        <Avatar alt="Podcast" src={resource.media} variant="square" />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h4">{resource.title}</Typography>
      <Typography align="center" color="textPrimary" variant="body1">{resource.description}</Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    {
      podcasts ? (
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ justifyContent: 'space-evenly' }}>
            <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
              <a target="_blank" rel="noreferrer" href={resource.apple_podcasts}>
                <Avatar
                  alt="Launch on Apple Podcasts"
                  style={{ width: 24, height: 24 }}
                  src="/static/images/resources/podcasts/apple-podcast.png"
                  variant="square"
                />
              </a>
            </Grid>
            <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
              <a target="_blank" rel="noreferrer" href={resource.google_podcasts}>
                <Avatar
                  alt="Launch on Google Podcasts"
                  style={{ width: 24, height: 24 }}
                  src="/static/images/resources/podcasts/google-podcast.png"
                  variant="square"
                />
              </a>
            </Grid>
            <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
              <a target="_blank" rel="noreferrer" href={resource.spotify}>
                <Avatar
                  alt="Launch on Spotify"
                  style={{ width: 24, height: 24 }}
                  src="/static/images/resources/podcasts/spotify.png"
                  variant="square"
                />
              </a>
            </Grid>
            <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
              <a target="_blank" rel="noreferrer" href={resource.path}><Launch /> </a>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'right' }}>
          <a target="_blank" rel="noreferrer" href={resource.path}><Launch color="action" /> </a>
        </Box>
      )
    }
  </Card>
);

ResourceCard.propTypes = {
  podcasts: PropTypes.bool,
  resource: PropTypes.object.isRequired
};

export default ResourceCard;
