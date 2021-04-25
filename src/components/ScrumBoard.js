import { Box, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Flippy, { BackSide, FrontSide } from 'react-flippy';
import 'src/css/ScrumBoard.css';

const ScrumBoard = () => {
  const [draggedOverCol, setDraggedOverCol] = useState(0);
  const [scrumCards, setScrumCards] = useState([
    {
      name: 'Ticket 1',
      timeframe: '4 hrs',
      ticket_stage: 1,
      description: 'There are lots of software offering product development tracking (e.g. JIRA, Slack, Trello), which will have differing functionality',
    },
    {
      name: 'Ticket 2',
      timeframe: '2 hrs',
      ticket_stage: 1,
      description: 'Within JIRA tickets are given different types (e.g. Bug, Story, Task) the kind of work that needs doing. There are also many other fields to provide as much detail to the developer as possible'
    },
    {
      name: 'Ticket 3',
      timeframe: '4 days',
      ticket_stage: 2,
      description: 'Tickets will be assigned to an individual and its their responsibility to update it as they progress'
    },
    {
      name: 'Ticket 4',
      timeframe: '7 hrs',
      ticket_stage: 3,
      description: 'Within software development these scrum boards are often linked to the service hosting the source code repository (e.g. Bitbucket, GitHub)'
    },
    {
      name: 'Ticket 5',
      timeframe: '30 mins',
      ticket_stage: 3,
      description: 'Kanban boards differ as there should never be more than 5 items in the In Progress column, whereas Scrum boards limit work by sprints',
    },
    {
      name: 'Ticket 6',
      timeframe: '1 wk',
      ticket_stage: 4,
      description: 'Tickets with longer timeframes associated with them will often be split into subtasks to distribute the work'

    },
    {
      name: 'Ticket 7',
      timeframe: '10 mins',
      ticket_stage: 5,
      description: 'Columns within Scrum boards will vary between development teams but this example should provide transferable knowledge',
    }
  ]);
  const columns = [
    {
      name: 'New',
      stage: 1,
      description: 'This state is for new tickets that have been brought into the scrum (they are mostly unassigned)'
    },
    {
      name: 'Blocked',
      stage: 2,
      description: 'Tasks can be blocked by other tickets so this state can be used as a placeholder while the blocking ticket is completed'
    },
    {
      name: 'In Progress',
      stage: 3,
      description: 'While tickets are being actively worked on, they should be placed In Progress'
    },
    {
      name: 'Testing',
      stage: 4,
      description: 'Testing is vital to ensure new features integrate well into the product and bugs are fixed correctly'
    },
    {
      name: 'In Review',
      stage: 5,
      description: 'Additions to code are reviewed by the team to avoid clashes and allow input for improvements. Pull requests (PRs) are opened within repositories and tracked using this state'
    },
    {
      name: 'Closed',
      stage: 6,
      description: 'Once the work has been completed, the ticket is moved into the Closed state to indicate it is ready for release'
    },
  ];

  // Called when a Scrum card is dragged over a column (called by column)
  function handleOnDragEnter(e, stageValue) {
    setDraggedOverCol(stageValue);
  }

  // Called when a Scrum card dropped over a column (called by card)
  function handleOnDragEnd(e, project) {
    const updatedScrumCards = scrumCards.slice(0);
    updatedScrumCards.find((projectObject) => projectObject.name === project.name).ticket_stage = draggedOverCol;
    setScrumCards(updatedScrumCards);
  }

  function generateScrumCards(cards) {
    return cards.slice(0).map((ticket) => (
      <div
        key={ticket.name}
        className="scrum-card"
        draggable
        onDragEnd={(e) => {
          handleOnDragEnd(e, ticket);
        }}
      >
        <Typography className="centre-scrum-text">{ticket.name}</Typography>
        <Typography>{ticket.description}<br /></Typography>
        <Typography className="time-frame">{ticket.timeframe}</Typography>
      </div>
    ));
  }

  return (
    <Grid container className="scrum-board" wrap="wrap">
      {columns.map((column) => {
        const columnScrumCards = scrumCards.filter((project) => parseInt(project.ticket_stage, 10) === column.stage);
        return (
          <Box sx={{ m: 1 }}>
            <Flippy key={column.stage}>
              <FrontSide className="flippy-scrum-board">
                <div
                  className="scrum-column"
                  onDragEnter={(e) => {
                    handleOnDragEnter(e, column.stage);
                  }}
                >
                  <Typography className="centre-scrum-text">{column.stage}. {column.name} ({columnScrumCards.length})
                  </Typography>
                  {generateScrumCards(columnScrumCards)}
                </div>
              </FrontSide>
              <BackSide className="flippy-scrum-board">
                <div key={column.stage} className="scrum-column">
                  <Typography className="centre-scrum-text">{column.stage}. {column.name} ({columnScrumCards.length})
                  </Typography>
                  <Typography className="centre-column-text">{column.description}</Typography>
                </div>
              </BackSide>
            </Flippy>
          </Box>
        );
      })}
    </Grid>
  );
};

export default ScrumBoard;
