import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

import './HomePage.css'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'CVs and Cover Letters', path: '/cvs_and_cover_letters',
                    subpages: [
                        {title: 'Writing a CV', path: '/cvs_and_cover_letters/cv'},
                        {title: 'Cover Letters', path: '/cvs_and_cover_letters/cover-letter'},
                        {title: 'LinkedIn', path: '/cvs_and_cover_letters/LinkedIn'},
                    ],
                },
                {
                    title: 'Psychometric Tests', path: '/psychometric_tests',
                    subpages: [
                        {title: 'Situational Judgement', path: '/psychometric_tests/situational_judgement'},
                        {title: 'Personality Assessments', path: '/psychometric_tests/personality'}
                    ],
                },
                {
                    title: 'Assessment Centres', path: '/assessment_centres',
                    subpages: [
                        {title: 'Group Exercises', path: '/assessment_centres/group_exercises'},
                        {title: 'Technical Assessments', path: '/assessment_centres/technical_assessments'},
                        {title: 'Presentations', path: '/assessment_centres/presentations'},
                    ],
                },
                {
                    title: 'Interviews', path: '/interviews',
                    subpages: [
                        {title: 'Telephone Interviews', path: '/interviews/telephone'},
                        {title: 'Face-to-Face Interviews', path: '/interviews/face-to-face'},
                        {title: 'Panel Interviews', path: '/interviews/panel'},
                        {title: 'Video Interviews', path: '/interviews/video'},
                    ],
                },
                {
                    title: 'Industry Skills', path: '/industry_skills',
                    subpages: [
                        {title: 'Agile Development Methods', path: '/industry_skills/agile_development'},
                        {title: 'git', path: '/industry_skills/git'},
                        {title: 'MySQL', path: '/industry_skills/mysql'},
                        {title: 'Unit Testing', path: '/industry_skills/unit_testing'},
                    ],
                },
                {
                    title: 'Resources', path: '/resources',
                    subpages: [
                        {title: 'University Resources', path: '/university_resources'},
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
        const {title, path, subpages} = card

        return (
            <div>
                <Card style={{width: 280}}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                        {subpages.map((page) => (
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
            <div className={'main'}>
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