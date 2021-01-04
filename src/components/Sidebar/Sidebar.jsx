import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: true
        };
    }

    render() {
        const pages = [
            {
                title: 'Home',
                path: '/',
                icon: <i className='fas fa-home'></i>,
            },
            {
                title: 'CVs and Cover Letters',
                path: '/cvs_and_cover_letters',
                icon: <i className='fas fa-mail-bulk'></i>,
            },
            {
                title: 'Testing',
                path: '/testing',
                icon: <i className='fas fa-envelope-open-text'></i>,
            },
            {
                title: 'Assessment Centres',
                path: '/assessment_centres',
                icon: <i className='fas fa-briefcase'></i>,
            },
            {
                title: 'Interviews',
                path: '/interviews',
                icon: <i className='fas fa-comments'></i>,
            },
            {
                title: 'Agile Development Methods',
                path: '/agile_development',
                icon: <i className="fas fa-recycle"></i>,
            },
            {
                title: 'Resources',
                path: '/resources',
                icon: <i className="fas fa-universal-access"></i>,
            }
        ]
        return (
            <div className='wrapper'>
                <div className='side-menu' width={this.state.sidebar ? 250 : 80}>
                    <ul onClick={() => this.setState({sidebar: !this.state.sidebar})}>
                        <li className='sidebar-toggle'>
                            <Link to='#' className='menu-icon'>
                                <i className={this.state.sidebar ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </Link>
                        </li>
                        {pages.map((item, index) => (
                            <li key={index} className='side-text'>
                                <Link to={item.path}>
                                    {item.icon}
                                    {this.state.sidebar ? <span>{item.title}</span> : <span/>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar