import React, {Component} from 'react'
import {CardTitle, ListGroup, ListGroupItem, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'CVs and Cover Letters',
                    path: '/cvs_and_cover_letters',
                    icon: <i className='fas fa-mail-bulk'/>,
                    subpages: [
                        {title: 'Writing a CV', path: '/cvs_and_cover_letters/cv'},
                        {title: 'Cover Letters', path: '/cvs_and_cover_letters/cover-letter'},
                        {title: 'LinkedIn', path: '/cvs_and_cover_letters/LinkedIn'},
                    ],
                },
                {
                    title: 'Psychometric Tests',
                    path: '/psychometric_tests',
                    icon: <i className='fas fa-chalkboard-teacher'/>,
                    subpages: [
                        {title: 'Situational Judgement', path: '/psychometric_tests/situational_judgement'},
                        {title: 'Personality Assessments', path: '/psychometric_tests/personality'}
                    ],
                },
                {
                    title: 'Assessment Centres',
                    path: '/assessment_centres',
                    icon: <i className='fas fa-briefcase'/>,
                    subpages: [
                        {title: 'Group Exercises', path: '/assessment_centres/group_exercises'},
                        {title: 'Technical Assessments', path: '/assessment_centres/technical_assessments'},
                        {title: 'Presentations', path: '/assessment_centres/presentations'},
                    ],
                },
                {
                    title: 'Interviews',
                    path: '/interviews',
                    icon: <i className="fas fa-handshake"/>,
                    subpages: [
                        {title: 'Telephone Interviews', path: '/interviews/telephone'},
                        {title: 'Face-to-Face Interviews', path: '/interviews/face-to-face'},
                        {title: 'Panel Interviews', path: '/interviews/panel'},
                        {title: 'Video Interviews', path: '/interviews/video'},
                    ],
                },
                {
                    title: 'Industry Skills',
                    path: '/industry_skills',
                    icon: <i className="fas fa-industry"/>,
                    subpages: [
                        {title: 'Agile Development Methods', path: '/industry_skills/agile_development'},
                        {title: 'git', path: '/industry_skills/git'},
                        {title: 'MySQL', path: '/industry_skills/mysql'},
                        {title: 'Unit Testing', path: '/industry_skills/unit_testing'},
                    ],
                },
                {
                    title: 'Resources',
                    path: '/resources',
                    icon: <i className="fas fa-universal-access"/>,
                    subpages: [
                        {title: 'University Resources', path: 'https://www.reading.ac.uk/essentials/Careers'},
                        {title: 'External Resources', path: '/external_resources'},
                        {title: 'Podcasts', path: '/podcasts'}
                    ],
                }
            ]
        }
    }

    componentDidMount() {
        // TODO: get info for pages from MYSQL
    }

    getPageCard = (card) => {
        const {title, path, icon, subpages} = card
        const external_links = ['University Resources']

        return (
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}{icon}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                        {subpages.map((page) => (
                            external_links.includes(page.title) ?
                                <a target='_blank' href={page.path}>
                                    <ListGroupItem>{page.title}</ListGroupItem>
                                </a> :
                                <Link to={page.path}>
                                    <ListGroupItem>{page.title}</ListGroupItem>
                                </Link>
                        ))}
                    </ListGroup>
                    <Card.Footer>
                        <Link to={path}>
                            <i className='fas fa-external-link-alt'/>
                        </Link>
                    </Card.Footer>
                </Card>
            </div>
        )
    }

    render() {
        return (
            <div className='main'>
                <Row>
                    {this.state.cards.map((card) => (
                        this.getPageCard(card)
                    ))}
                </Row>
            </div>
        )
    }
}

export default HomePage