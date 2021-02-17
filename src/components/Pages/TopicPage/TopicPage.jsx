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
import ScrumBoard from "../../ScrumBoard/ScrumBoard";

class TopicPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            page_summary: "",
            subpages: [],
            content: []
        };
    }

    componentDidMount() {
        // TODO: get page info from MYSQL

        let data = require(`../../../tmp/${this.state.title}.json`);

        this.setState({
            page_summary: data.page_summary,
            subpages: data.subpages,
            content: data.content
        })
    }

    getSubpages = (subpages) => {
        return (
            <div>
                <Row>
                    {subpages.map((page) => (
                        <Card className='subpage-card'>
                            <CardBody>
                                <Link to={page.path}>
                                    <CardTitle>
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
            case 'scrum-board':
                return <ScrumBoard/>
            default:
                return <div>{section.material}</div>
        }
    }

    render() {
        return (
            <div className='main'>
                <h2>{this.state.title}</h2>
                {this.state.page_summary}
                {this.getSubpages(this.state.subpages)}
                {this.state.content.map((section) => (this.body(section)))}
            </div>
        )
    }
}

export default TopicPage