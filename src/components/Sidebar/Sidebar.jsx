import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebar: false,
            pages: [
                {
                    title: 'Home',
                    path: '/',
                    icon: <i className='fas fa-home'/>,
                },
                {
                    title: 'CVs and Cover Letters',
                    path: '/cvs_and_cover_letters',
                    icon: <i className='fas fa-mail-bulk'/>,
                },
                {
                    title: 'Psychometric Tests',
                    path: '/psychometric_tests',
                    icon: <i className='fas fa-chalkboard-teacher'/>,
                },
                {
                    title: 'Assessment Centres',
                    path: '/assessment_centres',
                    icon: <i className='fas fa-briefcase'/>,
                },
                {
                    title: 'Interviews',
                    path: '/interviews',
                    icon: <i className="fas fa-handshake"/>,
                },
                {
                    title: 'Industry Skills',
                    path: '/industry_skills',
                    icon: <i className="fas fa-industry"/>,
                }
            ]
        };
    }

    render() {
        // let pages;
        //
        // axios({
        //     method: 'GET',
        //     url: `${API_PATH}/get_sidebar_items.php`,
        //     headers: {'content-type': 'application/json'}
        // })
        //     .then(results=> {
        //         pages = results;
        //     })
        //     .catch(error => this.setState({error:error.message}))

        return (
            <div className='side-menu' style={{width: this.state.sidebar ? 280 : 80}}>
                <ul>
                    <li className='sidebar-toggle'>
                        <Link to='#' className='menu-icon'>
                            <i className={this.state.sidebar ? 'fas fa-times' : 'fas fa-bars'}
                               onClick={() => this.setState({sidebar: !this.state.sidebar})}/>
                        </Link>
                    </li>
                    {this.state.pages.map((item, index) => (
                        <li key={index} className='side-text'>
                            <Link to={item.path}>
                                {item.icon}
                                {this.state.sidebar ? <span>{item.title}</span> : <span/>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Sidebar