import React, {Component} from 'react';
import './PageSections.css';

class CodeBlock extends Component {
    getEmbeddedWebsite = (material) => {
        return (
            <iframe src={material} style={{border: '0px #FFFFFF none', height: 700, width: '100%',}}
                    scrolling='no' frameBorder='1' marginHeight='0px'/>

        )
    }

    render() {
        const {display, heading, section_description, material} = this.props.content;

        let block;

        switch (display) {
            case 'embed':
                block = this.getEmbeddedWebsite(material);
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

export default CodeBlock