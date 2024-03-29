import React, { useMemo, useState } from "react";
import {
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  intervalToDuration,
  subHours,
} from "date-fns";

import {
  Contraction,
  deleteAllContractions,
  getContractionSummary,
  isHospitalTime,
  loadContractions,
  saveContractions,
} from "../../src/utils/contraction.utils";
import { isNil, reverse } from "lodash";

import PageWrapper from "../../src/components/PageWrapper/PageWrapper";
import { minSecDuration, secondsToMinSec } from "../../src/utils/date.utils";
import clsx from "clsx";

import styles from "../../styles/ContractionTracker.module.scss";

const MAX_PAIN_LEVEL = 5;
const VIEW_INTEVAL = 10;

function ContractionTracker(): JSX.Element {
  const [contractions, setContractions] = useState<Contraction[]>(
    loadContractions()
  );
  const [start, setStart] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number | null>(null);
  const [countInterval, setCountInterval] = useState<NodeJS.Timeout | null>(
    null
  );
  const [contractionsShown, setContractionsShown] =
    useState<number>(VIEW_INTEVAL);

  const startContraction = (): void => {
    setStart(new Date());
    setDuration(0);
    const interval = setInterval(() => {
      setDuration((duration) => (isNil(duration) ? 1 : duration + 1));
    }, 1000);
    setCountInterval(interval);
  };

  const endContraction = (painLevel: number): void => {
    const newContraction: Contraction = {
      start: start as Date,
      end: new Date(),
      pain: painLevel,
    };
    const newList = [...contractions, newContraction];
    setContractions(newList);
    saveContractions(newList);
    resetContraction();
  };

  const resetContraction = () => {
    setStart(null);
    setDuration(null);
    if (!isNil(countInterval)) {
      clearInterval(countInterval);
    }
    setCountInterval(null);
  };

  const clearAllContractions = (): void => {
    if (window.confirm("Are you sure you want to delete all contractions?")) {
      deleteAllContractions();
      setContractions(loadContractions());
    }
  };

  const showMoreContractions = (): void => {
    setContractionsShown(contractionsShown + VIEW_INTEVAL);
  };

  const formatCurrentDuration = (): string => {
    const currentDuration = intervalToDuration({
      start: 0,
      end: isNil(duration) ? 1000 : duration * 1000,
    });
    return minSecDuration(currentDuration);
  };

  const formatContractionDuration = (contraction: Contraction): string => {
    const contractionDuration = intervalToDuration({
      start: contraction.start,
      end: contraction.end,
    });
    return minSecDuration(contractionDuration);
  };

  const painButtons = (): JSX.Element => {
    const buttons: JSX.Element[] = [];
    for (let i = 1; i <= MAX_PAIN_LEVEL; i++) {
      buttons.push(<PainButton level={i} onClick={endContraction} />);
    }
    return <>{buttons}</>;
  };

  const activeContractionControls = (): JSX.Element => {
    return (
      <>
        <div className="currentInfo">
          <span>
            <strong>Start:</strong>{" "}
            {isNil(start) ? "N/A" : format(start, "hh:mm:ss bb")}
          </span>
          <span>
            <strong>Duration:</strong>
            {formatCurrentDuration()}
          </span>
        </div>
        <div className="painControls">{painButtons()}</div>
        <button className="negativeActionButton" onClick={resetContraction}>
          Cancel
        </button>
      </>
    );
  };

  const lastHourContractions = useMemo(() => {
    const now = new Date();
    return contractions.filter((contraction) => {
      return (
        differenceInMinutes(contraction.start, now) <= 75 ||
        differenceInMinutes(contraction.end, now) <= 75
      );
    });
  }, [contractions]);
  const contractionSummary =
    lastHourContractions.length > 0
      ? getContractionSummary(lastHourContractions)
      : undefined;
  const hospitalTime = isNil(contractionSummary)
    ? false
    : isHospitalTime(contractionSummary);
  const hospitalTimeLabel = hospitalTime ? "YES" : "NO";

  const hospitalStatusClasses = clsx({
    [styles.hospitalStatus]: true,
    [styles.notHospitalTime]: !hospitalTime,
    [styles.hospitalTime]: hospitalTime,
  });

  const visibleContractions = reverse(
    contractions.slice(contractionsShown * -1)
  );

  return (
    <PageWrapper>
      <div className={styles.container}>
        <div className={hospitalStatusClasses}>
          Hospital Time: <strong>{hospitalTimeLabel}</strong>
        </div>
        {isNil(contractionSummary) ? null : (
          <div className={styles.summary}>
            <span>
              <strong>Last Hour:</strong>
            </span>
            <span>Contractions: {contractionSummary.count}</span>
            {lastHourContractions.length > 0 ? (
              <>
                <span>
                  Avg Duration:{" "}
                  {secondsToMinSec(contractionSummary.averageDuration)}
                </span>
                <span>
                  Avg Frequency:{" "}
                  {secondsToMinSec(contractionSummary.averageFrequency)}
                </span>
                <span>Avg Pain: {contractionSummary.averagePain}</span>
              </>
            ) : null}
          </div>
        )}
        <div className={styles.contractionControls}>
          {isNil(start) ? (
            <button
              className={styles.positiveActionButton}
              onClick={startContraction}
            >
              Start
            </button>
          ) : (
            activeContractionControls()
          )}
        </div>
        <table className={styles.table}>
          <colgroup>
            <col style={{ width: "25%" }} />
            <col style={{ width: "25%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <thead className={styles.tableHeader}>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Pain</th>
              <th>Dur.</th>
              <th>Freq.</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {visibleContractions.map((contraction, index) => {
              return (
                <tr key={contraction.start.toISOString()}>
                  <td className={styles.dataCell}>
                    {format(contraction.start, "hh:mm bb")}
                  </td>
                  <td className={styles.dataCell}>
                    {format(contraction.end, "hh:mm bb")}
                  </td>
                  <td className={styles.dataCell}>{contraction.pain}</td>
                  <td className={styles.dataCell}>
                    {formatContractionDuration(contraction)}
                  </td>
                  <td className={styles.dataCell}>
                    {index === contractions.length - 1
                      ? "N/A"
                      : secondsToMinSec(
                          differenceInSeconds(
                            contraction.start,
                            contractions[contractions.length - 2 - index].start
                          )
                        )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={styles.tableActions}>
          <button
            className={styles.actionButton}
            onClick={showMoreContractions}
            disabled={contractionsShown >= contractions.length}
          >
            Load More
          </button>
          <button
            className={styles.negativeActionButton}
            onClick={clearAllContractions}
          >
            Clear All
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}

export type PainButtonProps = {
  level: number;
  onClick: (level: number) => void;
};

const PainButton: React.FunctionComponent<PainButtonProps> = (
  props: PainButtonProps
): JSX.Element => {
  const clickButton = (): void => {
    props.onClick(props.level);
  };
  return (
    <button className={styles.painButton} onClick={clickButton}>
      {props.level}
    </button>
  );
};

export default ContractionTracker;
