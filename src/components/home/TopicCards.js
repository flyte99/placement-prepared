import { Box, Card, CardContent, Grid, IconButton, List, Typography } from '@material-ui/core';
import { Launch } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import pages from 'src/components/home/pages';
import NavItem from 'src/components/NavItem';
import 'src/css/Cards.css';
import { v4 as uuid } from 'uuid';

const TopicCards = () => {
  const navigate = useNavigate();
  const cards = [];

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].subpages) {
      cards.push(pages[i]);
    }
  }

  return (
    cards.map((card) => (
      <Box sx={{ m: 2 }}>
        <Grid key={uuid()} item lg={4} sm={6} xl={4} xs={12}>
          <Card className="topic-card">
            <CardContent>
              <Grid item>
                <Typography color="textPrimary" variant="h3">
                  {card.title}
                  <IconButton onClick={() => navigate(`${card.path}`, { replace: true })}>
                    <Launch />
                  </IconButton>
                </Typography>
              </Grid>
              <Box sx={{ p: 1 }}>
                <List>
                  {card.subpages.map((page) => (
                    <NavItem
                      href={page.path}
                      key={page.title}
                      title={page.title}
                    />
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Box>

    ))
  );
};

export default TopicCards;
