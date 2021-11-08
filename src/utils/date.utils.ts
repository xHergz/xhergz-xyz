import { isNil } from "lodash";

export const minSecDuration = (duration: Duration): string => {
    const minutes = isNil(duration.minutes)
        ? "00"
        : duration.minutes.toString().padStart(2, "0");
    const seconds = isNil(duration.seconds)
        ? "00"
        : duration.seconds.toString().padStart(2, "0");
    return `${minutes}m ${seconds}s`;
};
