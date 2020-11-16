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
                icon: <i className="fas fa-home"></i>,
            },
            {
                title: 'CVs and Cover Letters',
                path: '/cvs_and_cover_letters',
                icon: <i className="fas fa-mail-bulk"></i>,
            },
            {
                title: 'Testing',
                path: '/testing',
                icon: <i className="fas fa-envelope-open-text"></i>,
                items: [
                    {
                        title: 'Testing',
                        path: '/testing',
                        icon: <i className="fas fa-envelope-open-text"></i>
                    },
                    {
                        title: 'Testing',
                        path: '/testing',
                        icon: <i className="fas fa-envelope-open-text"></i>
                    },
                ]
            },
            {
                title: 'Assessment Centres',
                path: '/assessment_centres',
                icon: <i className="fas fa-briefcase"></i>,
            },
            {
                title: 'Interviews',
                path: '/interviews',
                icon: <i className="fas fa-comments"></i>,
            }
        ]
        return (
            <div>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <i className="fas fa-bars" onClick={() => this.setState({sidebar: !this.state.sidebar})}></i>
                    </Link>
                </div>
                <div className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={() => this.setState({sidebar: !this.state.sidebar})}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <i className="fas fa-times"></i>
                            </Link>
                        </li>
                        {pages.map((item, index) => {
                            return (
                                <li key={index} className={'nav-text'}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar