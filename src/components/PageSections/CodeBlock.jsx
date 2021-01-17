import React, {Component} from 'react';
import './PageSections.css'

class CodeBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.material}
            </div>
        )
    }
}

export default CodeBlock