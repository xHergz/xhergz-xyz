import React from "react";
import { Link } from "react-router-dom";

import { PATHS } from "../../App";
import logo from "../../assets/logo.png";

import "../../styles/App.scss";

export type PageWrapperProps = React.PropsWithChildren<{ hideLogos?: boolean }>;

const PageWrapper: React.FunctionComponent<PageWrapperProps> = (
    props: PageWrapperProps
): JSX.Element => {
    return (
        <div className="pageContainer">
            <header className="page-header">
                <nav className="navBar">
                    {props.hideLogos ? null : (
                        <img className="logoImage rotateClockwise" src={logo} />
                    )}
                    <ul className="siteNav">
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
                    {props.hideLogos ? null : (
                        <img
                            className="logoImage rotateCounterClockwise"
                            src={logo}
                        />
                    )}
                </nav>
            </header>
            <main className="page-content">{props.children}</main>
            <footer className="page-footer">Version 0.1.3</footer>
        </div>
    );
};

export default PageWrapper;
