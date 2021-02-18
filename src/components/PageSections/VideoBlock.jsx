import React, {Component} from 'react';

import ReactPlayer from 'react-player';

import './PageSections.css'

class VideoBlock extends Component {
    render() {
        const {heading, section_description, material} = this.props.content

        return (
            <div>
                {heading ? <br/> : null}
                <h4>{heading}</h4>
                {section_description}
                <div className='embedded-video'><ReactPlayer url={material}/></div>
            </div>
        )
    }
}

export default VideoBlock