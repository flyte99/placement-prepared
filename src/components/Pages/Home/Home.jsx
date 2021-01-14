import React, {Component} from 'react'
import {ListGroup, ListGroupItem, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card'

import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    title: 'CVs and Cover Letters', path: '/cvs_and_cover_letters',
                    sections: [
                        {title: '', path: '/',},
                        {title: '', path: '/',}
                    ],
                },
                {
                    title: 'Testing', path: '/testing',
                    sections: [
                        {title: '', path: '/',},
                        {title: '', path: '/',}
                    ],
                },
                {
                    title: 'Assessment Centres', path: '/assessment_centres',
                    sections: [
                        {title: '', path: '/',},
                        {title: '', path: '/',}
                    ],
                },
                {
                    title: 'Interviews', path: '/interviews',
                    sections: [
                        {title: '', path: '/',},
                        {title: '', path: '/',}
                    ],
                },
                {
                    title: 'Agile Development Methods', path: '/agile_development',
                    sections: [
                        {title: '', path: '/',},
                        {title: '', path: '/',}
                    ],
                },
                {
                    title: 'Resources', path: '/resources',
                    sections: [
                        {title: 'University Resources', path: '/university_resources',},
                        {title: 'External Resources', path: '/external_resources',},
                        {title: 'Podcasts', path: '/podcasts',}
                    ],
                }
            ]
        }
    }

    getPageCard = (card) => {
        const {title, path, sections} = card

        return (
            <div>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <ListGroup>
                        {sections.map((page) => (
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

export default Home