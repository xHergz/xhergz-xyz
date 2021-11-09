import { differenceInSeconds, parseISO } from "date-fns";
import { isNil, mean, meanBy } from "lodash";

const CONTRACTIONS_KEY = "contractions";

export type Contraction = {
    start: Date;
    end: Date;
    pain: number;
};

type RawContraction = {
    start: string;
    end: string;
    pain: string;
};

export type ContractionSummary = {
    count: number;
    averageDuration: number;
    averageFrequency: number;
    averagePain: number;
}

export const saveContractions = (contractions: Contraction[]): void => {
    window.localStorage.setItem(CONTRACTIONS_KEY, JSON.stringify(contractions));
};

export const loadContractions = (): Contraction[] => {
    const contractions = window.localStorage.getItem(CONTRACTIONS_KEY);
    const raw: RawContraction[] = isNil(contractions)
        ? []
        : JSON.parse(contractions);
    return raw.map((contraction) => {
        return {
            start: parseISO(contraction.start),
            end: parseISO(contraction.end),
            pain: parseInt(contraction.pain),
        };
    });
};

export const deleteAllContractions = (): void => {
    window.localStorage.removeItem(CONTRACTIONS_KEY);
}

export const getContractionSummary = (contractions: Contraction[]): ContractionSummary => {
    const frequencies: number[] = [];
    let nextIndex = 1;
    for (const contraction of contractions) {
        const next = contractions[nextIndex];
        if (isNil(next)) {
            break;
        }
        frequencies.push(differenceInSeconds(next.start, contraction.end));
        nextIndex++;
    }
    return {
        count: contractions.length,
        averageDuration: meanBy(contractions, (c) => differenceInSeconds(c.end, c.start)),
        averageFrequency: mean(frequencies),
        averagePain: meanBy(contractions, (c) => c.pain)
    };
};
