import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage/homepage';
import Resume from './components/resume/resume';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className='git-logo'>
                        <a href="https://github.com/TarasMakarchuk"> <img
                            src="https://avatars3.githubusercontent.com/u/43746781?s=460&v=4" alt="github profile"/></a>
                    </div>
                    <header className="App-header">
                        <div className='btn-block'>
                            <Link to='/homepage'>
                                <button>Homepage</button>
                            </Link>
                            <Link to='/resume'>
                                <button>Resume</button>
                            </Link>
                            <Link to='/skills'>
                                <button>Skills</button>
                            </Link>
                            <Link to='/contact'>
                                <button>Contact</button>
                            </Link>
                        </div>
                        <Route exact={true} path={"/"} component={Homepage}/>
                        <Route exact={true} path={"/homepage"} component={Homepage}/>
                        <Route exact={true} path={"/resume"} component={Resume}/>
                        <Route exact={true} path={"/skills"} component={Skills}/>
                        <Route exact={true} path={"/contact"} component={Contact}/>
                    </header>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
