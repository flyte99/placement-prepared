import React, {Component} from 'react';
import './PageSections.css'

class TextBlock extends Component {
    constructor(props) {
        super(props);
    }

    handleList = (list) => {
        return (
            <ul>
                {list.map((item => (<li>{item}</li>)))}
            </ul>
        )
    }

    render() {
        const {display, heading, material} = this.props.content;

        switch (display) {
            case 'list':
                return (
                    <div>
                        <h4>{heading}</h4>
                        {this.handleList(material)}
                    </div>
                )
            default:
                return <div>{material}</div>
        }
    }
}

export default TextBlock