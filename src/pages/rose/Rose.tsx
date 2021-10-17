import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ItemQuality from "./ItemQuality";

import ItemStats from "./ItemStats";
import MonsterColour from "./MonsterColour";

const PATHS = {
    ITEM_QUALITY: "/rose/item-quality",
    ITEM_STATS: "/rose/item-stats",
    MONSTER_COLOUR: "/rose/monster-colour",
    PARTY_EXP: "/rose/party-exp",
};

function Rose(): JSX.Element {
    return (
        <div>
            <Switch>
                <Route path={PATHS.ITEM_QUALITY}>
                    <ItemQuality />
                </Route>
                <Route path={PATHS.ITEM_STATS}>
                    <ItemStats />
                </Route>
                <Route path={PATHS.MONSTER_COLOUR}>
                    <MonsterColour />
                </Route>
                <Route path="/rose">
                    <div>
                        <ul>
                            <li>
                                <Link to={PATHS.ITEM_QUALITY}>
                                    Item Quality
                                </Link>
                            </li>
                            <li>
                                <Link to={PATHS.ITEM_STATS}>Item Stats</Link>
                            </li>
                            <li>
                                <Link to={PATHS.MONSTER_COLOUR}>
                                    Monster Colour
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
