import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import ContractionTracker from "./ContractionTracker";

const PATHS = {
    CONTRACTION_TRACKER: "/misc/contraction-tracker",
};

function Rose(): JSX.Element {
    return (
        <div>
            <Switch>
                <Route path={PATHS.CONTRACTION_TRACKER}>
                    <ContractionTracker />
                </Route>
                <Route path="/misc">
                    <div>
                        <ul>
                            <li>
                                <Link to={PATHS.CONTRACTION_TRACKER}>
                                    Contraction Tracker
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Rose;
