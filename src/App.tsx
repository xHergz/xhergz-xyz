import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo from './assets/logo.png';
import Home from './pages/Home';
import Rose from './pages/rose/Rose';

import './styles/App.scss';

const PATHS = {
    HOME: '/',
    ROSE: '/rose',
};

function App() {
    return (
        <Router>
            <div className='pageContainer'>
                <header className='page-header'>
                    <nav className='navBar'>
                        <img className='logoImage rotateClockwise' src={logo} />
                        <ul className='siteNav'>
                            <li>
                                <Link to={PATHS.HOME}>Home</Link>
                            </li>
                            <li>
                                <Link to={PATHS.ROSE}>Rose</Link>
                            </li>
                        </ul>
                        <img className='logoImage rotateCounterClockwise' src={logo} />
                    </nav>
                </header>
                <main className='page-content'>
                    <Switch>
                        <Route path={PATHS.ROSE}>
                            <Rose />
                        </Route>
                        <Route path={PATHS.HOME}>
                            <Home />
                        </Route>
                        <Route path='*'>
                            Not Found
                        </Route>
                    </Switch>
                </main>
                <footer className='page-footer'>
                    Footer
                </footer>
            </div>
        </Router>
    );
}

export default App;