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
import Misc from './pages/misc/Misc';

import './styles/App.scss';

const PATHS = {
    HOME: '/',
    ROSE: '/rose',
    MISC: '/misc'
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
                            <li>
                                <Link to={PATHS.MISC}>Misc</Link>
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
                        <Route path={PATHS.MISC}>
                            <Misc />
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
                    Version 0.1.3
                </footer>
            </div>
        </Router>
    );
}

export default App;