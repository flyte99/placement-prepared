import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css'

import Sidebar from '../Sidebar/Sidebar'
import Home from '../Pages/Home/Home'
import CV from '../Pages/CV/CV'
import Testing from '../Pages/Testing/Testing'
import AssessmentCentres from '../Pages/AssessmentCentres/AssessmentCentres'
import Interviews from '../Pages/Interviews/Interviews'


class App extends Component {
    render() {
        return (
            <Router>
                <Sidebar/>
                <Switch>
                    <Route path='/' exact component={() => <Home isSidebarOpen/>}/>
                    <Route path='/cvs_and_cover_letters' component={() => <CV/>}/>
                    <Route path='/testing' component={() => <Testing/>}/>
                    <Route path='/assessment_centres' component={() => <AssessmentCentres/>}/>
                    <Route path='/interviews' component={() => <Interviews/>}/>
                </Switch>
            </Router>
        )
    }
}

export default App;