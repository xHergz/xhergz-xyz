import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { PATHS } from "../../constants/routes.constants";
import logo from "../../assets/logo.png";

import styles from "../../../styles/App.module.scss";

export type PageWrapperProps = React.PropsWithChildren<{ hideLogos?: boolean }>;

const PageWrapper: React.FunctionComponent<PageWrapperProps> = (
  props: PageWrapperProps
): JSX.Element => {
  const leftLogoClasses = clsx({
    [styles.logoImage]: true,
    [styles.rotateClockwise]: true,
  });
  const rightLogoClasses = clsx({
    [styles.logoImage]: true,
    [styles.rotateCounterClockwise]: true,
  });
  return (
    <div className={styles.pageContainer}>
      <header className={styles.pageHeader}>
        <nav className={styles.navBar}>
          {props.hideLogos ? null : (
            <Image
              className={leftLogoClasses}
              src={logo.src}
              height={64}
              width={64}
            />
          )}
          <ul className={styles.siteNav}>
            <li>
              <Link href={PATHS.HOME}>Home</Link>
            </li>
            <li>
              <Link href={PATHS.ROSE}>Rose</Link>
            </li>
            {/*<li>
                            <Link to={PATHS.MISC}>Misc</Link>
                        </li>*/}
          </ul>
          {props.hideLogos ? null : (
            <Image
              className={rightLogoClasses}
              src={logo.src}
              height={64}
              width={64}
            />
          )}
        </nav>
      </header>
      <main className={styles.pageContent}>{props.children}</main>
      <footer className={styles.pageFooter}>Version 0.1.3</footer>
    </div>
  );
};

export default PageWrapper;
