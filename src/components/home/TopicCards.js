import { Box, Card, CardContent, Grid, List, Typography } from '@material-ui/core';
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
      <Grid key={uuid()} item lg={4} sm={6} xl={4} xs={12}>
        <Card className="topic-card" onClick={() => navigate(`${card.path}`, { replace: true })}>
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
