import React, {Component} from 'react';
import './PageSections.css'
import {Carousel} from "react-bootstrap";

class TextBlock extends Component {
    handleList = (list) => {
        return (
            <ul className='bullet-points'>
                {list.map((item => (<li>{item}</li>)))}
            </ul>
        )
    }

    handleSections = (list) => {
        return (
            <div>
                {list.map((item => (
                    <div className='tab'>
                        <h5>{item.subheading}</h5>
                        <p>{item.text}</p>
                    </div>
                    )))}
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
            case 'sections':
                block = this.handleSections(material);
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