import React, {Component} from 'react';
import './PageSections.css'

class CodeBlock extends Component {
    render() {
        return (
            <div>
                {this.props.material}
            </div>
        )
    }
}

export default CodeBlock