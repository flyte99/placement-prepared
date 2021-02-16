import React, {Component} from 'react';
import './PageSections.css'
import Figure from "react-bootstrap/Figure";

class ImageBlock extends Component {
    render() {
        const {width, height, caption, path, material, heading, section_description} = this.props.content

        const prefix = <div>
            {heading ? <br/> : null}
            <h4>{heading}</h4>
            {section_description}
        </div>

        if (typeof (material) == "string") {
            const image = require(`../../img/${material}`).default

            return (
                <a target='_blank' rel='noreferrer' href={path}>
                    <Figure className='large-img'>
                        <Figure.Image height={height} width={width} src={image} alt={`${width}x${height}`}/>
                        <Figure.Caption>{caption}</Figure.Caption>
                    </Figure>
                </a>
            )
        } else {
            return (
                <div>
                    {prefix}
                    <div className='img-block'>
                        {material.map(item => {
                            const image = require(`../../img/${item.image}`).default

                            return (
                                <a target='_blank' rel='noreferrer' href={item.path}>
                                    <Figure>
                                        <Figure.Image height={height} width={width} src={image}
                                                      alt={`${width}x${height}`}/>
                                        <Figure.Caption>{item.caption}</Figure.Caption>
                                    </Figure>
                                </a>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}

export default ImageBlock