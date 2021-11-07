import { parseISO } from "date-fns";
import { isNil } from "lodash";

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
