import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

import Sidebar from '../Sidebar/Sidebar'
import Home from '../Pages/HomePage/HomePage'
import TopicPage from "../Pages/TopicPage/TopicPage";

export const API_PATH = 'https://zn011920.webs.act.reading.ac.uk/api';

class App extends Component {
    render() {
        const topicPages = [
            {title: 'CVs and Cover Letters', path: '/cvs_and_cover_letters'},
            {title: 'Recruitment Testing', path: '/testing'},
            {title: 'Assessment Centres', path: '/assessment_centres'},
            {title: 'Interviews', path: '/interviews'},
            {title: 'Industry Skills', path: '/industry_skills'},
            {title: 'Writing a CV', path: '/cvs_and_cover_letters/cv'},
            {title: 'Cover Letters', path: '/cvs_and_cover_letters/cover-letter'},
            {title: 'LinkedIn', path: '/cvs_and_cover_letters/LinkedIn'},
            {title: 'Psychometric Testing', path: '/testing/psychometric'},
            {title: 'Scenario-Based Testing', path: '/testing/scenario-based'},
            {title: 'Group Exercises', path: '/assessment_centres/group_exercises'},
            {title: 'Technical Assessments', path: '/assessment_centres/technical_assessments'},
            {title: 'Presentations', path: '/assessment_centres/presentations'},
            {title: 'Agile Development Methods', path: '/industry_skills/agile_development'},
            {title: 'git', path: '/industry_skills/git'}
        ]

        return (
            <Router>
                <div style={{paddingTop: 15 ,height: 80, marginLeft: 80,backgroundColor: '#060b26'}}>
                    <h1 style={{textAlign: 'center', color: '#FFFFFF'}}>
                        Preparing for Placement
                    </h1>
                </div>
                <Sidebar/>
                <Switch>
                    <Route path='/' exact component={() => <Home/>}/>
                    {topicPages.map((topicPage) => (
                        <Route path={`${topicPage.path}`} exact component={() => <TopicPage title={topicPage.title}/>}/>
                    ))}
                </Switch>
            </Router>
        )
    }
}

export default App;