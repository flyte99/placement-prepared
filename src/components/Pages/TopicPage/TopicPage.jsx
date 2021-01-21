import React, {Component} from 'react'

import Card from "react-bootstrap/Card";
import {CardBody, CardTitle, Row} from "reactstrap";
import {Link} from "react-router-dom";
import "./TopicPage.css"
import TextBlock from "../../PageSections/TextBlock";
import CodeBlock from "../../PageSections/CodeBlock";
import ImageBlock from "../../PageSections/ImageBlock";
import VideoBlock from "../../PageSections/VideoBlock";
import QuizBlock from "../../PageSections/QuizBlock";

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

        let data = require(`../../../tmp/${this.state.title}.json`);

        this.setState({
            subpages: data.subpages,
            content: data.content
        })
    }

    header = (subpages) => {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <Row style={{display: 'flex', justifyContent: 'center'}}>
                    {subpages.map((page) => (
                        <Card style={{width: 250}}>
                            <CardBody>
                                <Link to={page.path}>
                                    <CardTitle style={{textAlign: 'center'}}>
                                        {page.title}
                                    </CardTitle>
                                </Link>
                                {page.summary}
                            </CardBody>
                        </Card>
                    ))}
                </Row>
            </div>
        )
    }

    body = (section) => {
        switch (section.type) {
            case 'text':
                return <TextBlock content={section}/>
            case 'code':
                return <CodeBlock content={section}/>
            case 'image':
                return <ImageBlock content={section}/>
            case 'video':
                return <VideoBlock material={section.material}/>;
            case 'quiz':
                return <QuizBlock questions={section.material}/>
            default:
                return <div>{section.material}</div>
        }
    }

    render() {
        return (
            <div className='main'>
                {this.state.subpages ? this.header(this.state.subpages) : <h2>{this.state.title}</h2>}
                {this.state.content.map((section) => (this.body(section)))}
            </div>
        )
    }
}

export default TopicPage