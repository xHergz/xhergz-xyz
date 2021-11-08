import React, { useMemo, useState } from "react";
import {
    differenceInHours,
    format,
    intervalToDuration,
    subHours,
} from "date-fns";

import {
    Contraction,
    deleteAllContractions,
    loadContractions,
    saveContractions,
} from "../../utils/contraction.utils";
import { isNil, reverse } from "lodash";

import "../../styles/ContractionTracker.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { minSecDuration } from "../../utils/date.utils";
import classNames from "classnames";

const MAX_PAIN_LEVEL = 5;

function ContractionTracker(): JSX.Element {
    const [contractions, setContractions] = useState<Contraction[]>(
        loadContractions()
    );
    const [start, setStart] = useState<Date | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [countInterval, setCountInterval] = useState<NodeJS.Timeout | null>(
        null
    );
    const hospitalStatusClasses = classNames({
        hospitalStatus: true,
        notHospitalTime: true,
        hospitalTime: false,
    });

    const startContraction = (): void => {
        setStart(new Date());
        setDuration(0);
        const interval = setInterval(() => {
            setDuration((duration) => duration + 1);
        }, 1000);
        setCountInterval(interval);
    };

    const endContraction = (painLevel: number): void => {
        const newContraction: Contraction = {
            start: start,
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
        clearInterval(countInterval);
        setCountInterval(null);
    };

    const clearAllContractions = (): void => {
        if (
            window.confirm("Are you sure you want to delete all contractions?")
        ) {
            deleteAllContractions();
            setContractions(loadContractions());
        }
    };

    const formatCurrentDuration = (): string => {
        const currentDuration = intervalToDuration({
            start: 0,
            end: duration * 1000,
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
                        <strong>Start:</strong> {format(start, "hh:mm:ss")}
                    </span>
                    <span>
                        <strong>Duration:</strong>
                        {formatCurrentDuration()}
                    </span>
                </div>
                <div className="painControls">{painButtons()}</div>
                <button
                    className="negativeActionButton"
                    onClick={resetContraction}
                >
                    Cancel
                </button>
            </>
        );
    };

    const lastHourContractions = useMemo(() => {
        const oneHourAgo = subHours(new Date(), 1);
        return contractions.filter((contraction) => {
            return differenceInHours(contraction.start, oneHourAgo) === 0;
        });
    }, [contractions]);

    console.log(lastHourContractions);

    return (
        <PageWrapper hideLogos>
            <div className="container">
                <div className={hospitalStatusClasses}>
                    Hospital Time: <strong>NO</strong>
                </div>
                <div className="summary">
                    <span>
                        <strong>Last Hour:</strong>
                    </span>
                    <span>Contractions:</span>
                    <span>Avg Duration:</span>
                    <span>Avg Frequency:</span>
                    <span>Avg Pain:</span>
                </div>
                <div className="contractionControls">
                    {isNil(start) ? (
                        <button
                            className="positiveActionButton"
                            onClick={startContraction}
                        >
                            Start
                        </button>
                    ) : (
                        activeContractionControls()
                    )}
                </div>
                <table>
                    <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Start</th>
                            <th>End</th>
                            <th>Pain</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reverse(contractions.slice(-10)).map((contraction) => {
                            return (
                                <tr>
                                    <td className="dataCell">
                                        {format(contraction.start, "hh:mm")}
                                    </td>
                                    <td className="dataCell">
                                        {format(contraction.end, "hh:mm")}
                                    </td>
                                    <td className="dataCell">
                                        {contraction.pain}
                                    </td>
                                    <td className="dataCell">
                                        {formatContractionDuration(contraction)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="tableActions">
                    <button className="actionButton" onClick={() => {}}>
                        Load More
                    </button>
                    <button
                        className="negativeActionButton"
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
        <button className="painButton" onClick={clickButton}>
            {props.level}
        </button>
    );
};

export default ContractionTracker;
