import React, {Component} from 'react';
import Flippy, {BackSide, FrontSide} from 'react-flippy';

import './ScrumBoard.css'

class ScrumBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    name: 'New', stage: 1,
                    description: 'This state is for new tickets that have been brought into the scrum (they are mostly unassigned)'
                },
                {
                    name: 'Blocked', stage: 2,
                    description: 'Tasks can be blocked by other tickets so this state can be used as a placeholder while the blocking ticket is completed'
                },
                {
                    name: 'In Progress', stage: 3,
                    description: 'While tickets are being actively worked on, they should be placed In Progress'
                },
                {
                    name: 'Testing', stage: 4,
                    description: 'Testing is vital to ensure new features integrate well into the product and bugs are fixed correctly'
                },
                {
                    name: 'In Review', stage: 5,
                    description: 'Additions to code are reviewed by the team to avoid clashes and allow input for improvements. Pull requests (PRs) are opened within repositories and tracked using this state'
                },
                {
                    name: 'Closed', stage: 6,
                    description: 'Once the work has been completed, the ticket is moved into the Closed state to indicate it is ready for release'
                },
            ],
            scrumCards: [
                {
                    name: 'Ticket 1', timeframe: '4 hrs', ticket_stage: 1,
                    description: 'There are lots of software offering product development tracking (e.g. JIRA, Slack, Trello), which will have differing functionality',
                },
                {
                    name: 'Ticket 2', timeframe: '2 hrs', ticket_stage: 1,
                    description: 'Within JIRA tickets are given different types (e.g. Bug, Story, Task) the kind of work that needs doing. There are also many other fields to provide as much detail to the developer as possible'
                },
                {
                    name: 'Ticket 3', timeframe: '4 days', ticket_stage: 3,
                    description: 'Tickets will be assigned to an individual and its their responsibility to update it as they progress'
                },
                {
                    name: 'Ticket 4', timeframe: '7 hrs', ticket_stage: 3,
                    description: 'Within software development these scrum boards are often linked to the service hosting the source code repository (e.g. Bitbucket, GitHub)'
                },
                {
                    name: 'Ticket 5', timeframe: '30 mins', ticket_stage: 3,
                    description: 'Kanban boards differ as there should never be more than 5 items in the In Progress column, whereas Scrum boards limit work by sprints',
                },
                {
                    name: 'Ticket 6', timeframe: '1 wk', ticket_stage: 4,
                    description: 'Tickets with longer timeframes associated with them will often be split into subtasks to distribute the work'

                },
                {
                    name: 'Ticket 7', timeframe: '10 mins', ticket_stage: 5,
                    description: 'Columns within Scrum boards will vary between development teams but this example should provide transferable knowledge',
                },
            ],
            draggedOverCol: 0,
        };
        this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
        this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    }

    // Called when a Scrum card is dragged over a column (called by column)
    handleOnDragEnter(e, stageValue) {
        this.setState({draggedOverCol: stageValue});
    }

    // Called when a Scrum card dropped over a column (called by card)
    handleOnDragEnd(e, project) {
        const updatedScrumCards = this.state.scrumCards.slice(0);

        updatedScrumCards.find((projectObject) => {
            return projectObject.name === project.name
        }).ticket_stage = this.state.draggedOverCol;

        this.setState({scrumCards: updatedScrumCards});
    }

    generateScrumCards(scrumCards) {
        return scrumCards.slice(0).map((project) => {
            return (
                <div
                    key={project.name}
                    className='scrum-card'
                    draggable={true}
                    onDragEnd={(e) => {
                        this.handleOnDragEnd(e, project);
                    }}
                >
                    <h5>{project.name}</h5>
                    <div>{project.description}<br/></div>
                    <div className='time-frame'>{project.timeframe}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <br/><h4>Example Scrum Board</h4>
                <p>Try navigating the scrum board example below by moving the tickets between columns. Clicking on a
                    column header to learn what the ticket state means.</p>
                <div className='scrum-board'>
                    {this.state.columns.map((column) => {
                        const scrumCards = this.state.scrumCards.filter((project) => {
                            return parseInt(project.ticket_stage, 10) === column.stage;
                        })

                        return (
                            <Flippy>
                                <FrontSide>
                                    <div key={column.stage} className='scrum-column'
                                         onDragEnter={(e) => {
                                             this.handleOnDragEnter(e, column.stage);
                                         }}
                                    >
                                        <h5>{column.stage}. {column.name} ({scrumCards.length})</h5>
                                        {this.generateScrumCards(scrumCards)}
                                        <br/>
                                    </div>
                                </FrontSide>
                                <BackSide>
                                    <div key={column.stage} className='scrum-column'>
                                        <h5>{column.stage}. {column.name} ({scrumCards.length})</h5>
                                        {column.description}
                                        <br/>
                                    </div>
                                </BackSide>
                            </Flippy>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ScrumBoard