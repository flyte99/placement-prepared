import React, {Component} from 'react';

import ReactPlayer from 'react-player';

import './PageSections.css'

class VideoBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <ReactPlayer url={this.props.material}/>
            </div>
        )
    }
}

export default VideoBlock