import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rose from "./pages/rose/Rose";
import Misc from "./pages/misc/Misc";

import "./styles/App.scss";

export const PATHS = {
    HOME: "/",
    ROSE: "/rose",
    MISC: "/misc",
};

function App() {
    return (
        <Router>
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
                <Route path="*">Not Found</Route>
            </Switch>
        </Router>
    );
}

export default App;
