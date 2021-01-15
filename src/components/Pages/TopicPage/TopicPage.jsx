import React, {Component} from 'react'

import Card from "react-bootstrap/Card";
import {CardBody, CardTitle, Row} from "reactstrap";
import {Link} from "react-router-dom";

class TopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            subpages: [],
            content: []
        };
    }

    componentDidMount() {
        // TODO: get page info from MYSQL
    }

    header = () => {
        const subpages = [
            {title: "Writing a CV", path: "/cvs_and_cover_letters/cv"},
            {title: "Cover Letters", path: "/cvs_and_cover_letters/cover-letter"},
        ]

        return (
            <div>
                <h2>{this.state.title}</h2>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                    {subpages.map((page) => (
                        <Link to={page.path}>
                            <Card style={{width: 250}}>
                                <CardBody>
                                    <CardTitle style={{textAlign: 'center'}}>
                                        {page.title}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        </Link>
                    ))}
                </Row>
            </div>
        )
    }

    body = () => {

    }

    render() {
        return (
            <div className={'main'}>
                {this.header()}
                {this.body()}
            </div>
        )
    }
}

export default TopicPage