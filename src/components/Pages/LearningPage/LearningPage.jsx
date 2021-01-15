import React, {Component} from 'react'

class LearningPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        };
    }

    componentDidMount() {
        // TODO: get page info from MYSQL
    }

    render() {
        return (
            <div className={'main'}>
            </div>
        )
    }
}

export default LearningPage