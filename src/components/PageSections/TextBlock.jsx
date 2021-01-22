import React, {Component} from 'react';
import './PageSections.css'
import Figure from "react-bootstrap/Figure";

class TextBlock extends Component {
    handleList = (list) => {
        return (
            <ul style={{marginLeft: 20}}>
                {list.map((item => (<li>{item}</li>)))}
            </ul>
        )
    }

    handleLinks = (links) => {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '30px 34px 0px'}}>
                {
                    links.map((link) => {
                        const image = require(`../../img/${link.image}`).default

                        return (
                            <a target='_blank' href={link.path}>
                                <Figure>
                                    <Figure.Image height={130} width={130} src={image} alt={`${link.resource}`}/>
                                    <Figure.Caption>{link.resource}</Figure.Caption>
                                </Figure>
                            </a>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        const {display, heading, section_description, material} = this.props.content;

        let block;

        switch (display) {
            case 'list':
                block = this.handleList(material);
                break;
            case 'links':
                block = this.handleLinks(material);
                break;
            default:
                block = material;
        }

        return (
            <div>
                <br/>
                <h4>{heading}</h4>
                {section_description}
                {block}
            </div>
        )
    }
}

export default TextBlock