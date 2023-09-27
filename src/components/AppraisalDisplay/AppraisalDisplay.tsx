import React from "react";
import clsx from "clsx";
import lodash, { padStart } from "lodash";

import { Appraisal } from "../../constants/rose-stats.constants";

import styles from "./AppraisalDisplay.module.scss";

type StatDisplayProps = {
  appraisal: Appraisal;
  available?: boolean;
  index?: number;
};

function StatDisplay(props: StatDisplayProps): JSX.Element {
  const classes: string = clsx({
    [styles.available]: !lodash.isNil(props.available) && props.available,
    [styles.notAvailable]: !lodash.isNil(props.available) && !props.available,
  });

  return (
    <div className={classes}>
      {props.index ? `${padStart(props.index.toString(), 3, "0")}: ` : null}
      {`${props.appraisal.primary} ${props.appraisal.primaryValue}`}
      {props.appraisal.secondary
        ? ` / ${props.appraisal.secondary} ${props.appraisal.secondaryValue}`
        : null}
    </div>
  );
}

export default StatDisplay;
