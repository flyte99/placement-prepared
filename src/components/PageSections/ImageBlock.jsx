import React, {Component} from 'react';
import './PageSections.css'
import Figure from "react-bootstrap/Figure";

class ImageBlock extends Component {
    render() {
        const image = require(`../../img/${this.props.content.material}`).default
        const {width, height, caption, link} = this.props.content

        return (
            <a target='_blank' href={link}>
                <Figure className='large-img'>
                    <Figure.Image height={height} width={width} src={image} alt={`${width}x${height}`}/>
                    <Figure.Caption>{caption}</Figure.Caption>
                </Figure>
            </a>
        )
    }
}

export default ImageBlock