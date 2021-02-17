import React, {Component} from 'react';
import './PageSections.css';

class CodeBlock extends Component {
    getEmbeddedWebsite = (heading, material) => {
        return (
            <iframe className='embedded-webpage' title={heading} src={material} scrolling='no' frameBorder='1'/>
        )
    }

    render() {
        const {display, heading, section_description, material} = this.props.content;

        let block;

        switch (display) {
            case 'embed':
                block = this.getEmbeddedWebsite(heading, material);
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