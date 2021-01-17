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
                return <CodeBlock material={section.material}/>
            case 'image':
                return <ImageBlock material={section.material}/>
            case 'video':
                return <VideoBlock material={section.material}/>;
            case 'quiz':
                return <QuizBlock material={section.material}/>
            default:
                return <div>{section.material}</div>
        }
    }

    render() {
        return (
            <div className={'main'}>
                {subpages ? this.header(subpages) : <h2>{this.state.title}</h2>}
                {content.map((section) => (this.body(section)))}
            </div>
        )
    }
}

export default TopicPage