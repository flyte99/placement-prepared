import React, {Component} from 'react';
import './PageSections.css'
import Figure from "react-bootstrap/Figure";
import {Carousel} from "react-bootstrap";

class TextBlock extends Component {
    handleList = (list) => {
        return (
            <ul className='bullet-points'>
                {list.map((item => (<li>{item}</li>)))}
            </ul>
        )
    }

    handleLinks = (links) => {
        return (
            <div className='links'>
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

    handleCarousel = (material) => {
        return (
            <Carousel>
                {material.map((item => (<Carousel.Item>{item}</Carousel.Item>)))}
            </Carousel>
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
            case 'carousel':
                block = this.handleCarousel(material);
                break;
            default:
                block = material;
        }

        return (
            <div>
                {heading ? <br/> : null}
                <h4>{heading}</h4>
                {section_description}
                {block}
            </div>
        )
    }
}

export default TextBlock