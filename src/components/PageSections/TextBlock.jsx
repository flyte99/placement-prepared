import React, {Component} from 'react';
import './PageSections.css'

class TextBlock extends Component {
    handleList = (list) => {
        return (
            <ul style={{marginLeft: 20}}>
                {list.map((item => (<li>{item}</li>)))}
            </ul>
        )
    }

    render() {
        const {display, heading, material} = this.props.content;

        let block;

        switch (display) {
            case 'list':
                block = this.handleList(material);
                break;
            default:
                block = material;
        }

        return (
            <div>
                <h4>{heading}</h4>
                {block}
            </div>
        )
    }
}

export default TextBlock