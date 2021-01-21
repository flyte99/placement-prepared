import React, {Component} from 'react';
import './PageSections.css'

class QuizBlock extends Component {
    render() {
        return (
            <div>
                {this.props.material}
            </div>
        )
    }
}

export default QuizBlock