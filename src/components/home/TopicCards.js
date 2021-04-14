import { Box, Card, CardContent, Grid, List, Typography } from '@material-ui/core';
import pages from 'src/components/home/pages';
import NavItem from 'src/components/NavItem';
import 'src/css/Cards.css';
import { v4 as uuid } from 'uuid';

const TopicCards = () => {
  const cards = [];

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].subpages) {
      cards.push(pages[i]);
    }
  }

  return (
    cards.map((card) => (
      <Grid key={uuid()} item lg={3} sm={6} xl={3} xs={12}>
        <Card className="topic-card" sx={{ height: '100%' }}>
          <CardContent>
            <Grid item>
              <Typography color="textPrimary" variant="h3">
                {card.title}
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
    ))
  );
};

export default TopicCards;
