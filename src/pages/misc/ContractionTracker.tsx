import React, { useState } from "react";
import { format, intervalToDuration } from "date-fns";

import {
    Contraction,
    loadContractions,
    saveContractions,
} from "../../utils/contraction.utils";
import { isNil } from "lodash";

const MAX_PAIN_LEVEL = 10;

function ContractionTracker(): JSX.Element {
    const [contractions, setContractions] = useState<Contraction[]>(
        loadContractions()
    );
    const [start, setStart] = useState<Date | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [countInterval, setCountInterval] = useState<NodeJS.Timeout | null>(
        null
    );

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

    const formatDuration = (): string => {
        const contractionDuration = intervalToDuration({
            start: 0,
            end: duration * 1000,
        });
        const minutes = isNil(contractionDuration.minutes)
            ? "00"
            : contractionDuration.minutes.toString().padStart(2, "0");
        const seconds = isNil(contractionDuration.seconds)
            ? "00"
            : contractionDuration.seconds.toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
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
            <div>
                <div>
                    <span>Start: {format(start, "hh:mm:ss")}</span>
                    <span>{formatDuration()}</span>
                </div>
                <div>{painButtons()}</div>
                <button onClick={resetContraction}>Cancel</button>
            </div>
        );
    };

    return (
        <div>
            <div>
                {isNil(start) ? (
                    <button onClick={startContraction}>New</button>
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
                    {contractions.slice(-10).map((contraction) => {
                        console.log("formatting", contraction);
                        return (
                            <tr>
                                <td>{format(contraction.start, "hh:mm")}</td>
                                <td>{format(contraction.end, "hh:mm")}</td>
                                <td>{contraction.pain}</td>
                                <td></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
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
    return <button onClick={clickButton}>{props.level}</button>;
};

export default ContractionTracker;
