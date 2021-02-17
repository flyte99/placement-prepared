import React, {Component} from 'react';
import './PageSections.css'

class QuizBlock extends Component {
    render() {
        const {heading, material} = this.props.content;

        return (
            <div>
                <br/>
                <h4>{heading}</h4>
                {material}
            </div>
        )
    }
}

export default QuizBlock