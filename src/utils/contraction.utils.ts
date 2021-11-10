import { addSeconds, differenceInSeconds, parseISO, subMinutes, subSeconds } from "date-fns";
import { isNil, maxBy, mean, meanBy, minBy } from "lodash";

const CONTRACTIONS_KEY = "contractions";
const HOSPITAL_LIMITS = {
    DURATION: 60 * 1, // 1 Minute Long
    FREQUENCY: 60 * 5, // 5 Minutes Apart
    RANGE: 60 * 60 // For 1 Hour
};

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
    range: number;
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
        frequencies.push(differenceInSeconds(next.start, contraction.start));
        nextIndex++;
    }

    const earliest = minBy(contractions, c => c.start.valueOf());
    const latest = maxBy(contractions, c => c.end.valueOf());
    console.log(earliest, latest);
    return {
        count: contractions.length,
        averageDuration: meanBy(contractions, (c) => differenceInSeconds(c.end, c.start)),
        averageFrequency: mean(frequencies),
        averagePain: meanBy(contractions, (c) => c.pain),
        range: differenceInSeconds(latest.end, earliest.start)
    };
};

export const isHospitalTime = (summary: ContractionSummary): boolean => {
    console.log(summary, HOSPITAL_LIMITS);
    return summary.averageDuration >= HOSPITAL_LIMITS.DURATION
        && summary.averageFrequency <= HOSPITAL_LIMITS.FREQUENCY
        && summary.range >= HOSPITAL_LIMITS.RANGE;
};

// Test Data
const now = new Date();
const PERFECT_CONTRACTIONS: Contraction[] = [
    {
        start: subMinutes(now, 75),
        end: subMinutes(now, 74),
        pain: 5
    },
    {
        start: subMinutes(now, 70),
        end: subMinutes(now, 69),
        pain: 5
    },
    {
        start: subMinutes(now, 65),
        end: subMinutes(now, 64),
        pain: 5
    },
    {
        start: subMinutes(now, 60),
        end: subMinutes(now, 59),
        pain: 5
    },
    {
        start: subMinutes(now, 55),
        end: subMinutes(now, 54),
        pain: 5
    },
    {
        start: subMinutes(now, 50),
        end: subMinutes(now, 49),
        pain: 5
    },
    {
        start: subMinutes(now, 45),
        end: subMinutes(now, 44),
        pain: 5
    },
    {
        start: subMinutes(now, 40),
        end: subMinutes(now, 39),
        pain: 5
    },
    {
        start: subMinutes(now, 35),
        end: subMinutes(now, 34),
        pain: 5
    },
    {
        start: subMinutes(now, 30),
        end: subMinutes(now, 29),
        pain: 5
    },
    {
        start: subMinutes(now, 25),
        end: subMinutes(now, 24),
        pain: 5
    },
    {
        start: subMinutes(now, 20),
        end: subMinutes(now, 19),
        pain: 5
    },
    {
        start: subMinutes(now, 15),
        end: subMinutes(now, 14),
        pain: 5
    },
    {
        start: subMinutes(now, 10),
        end: subMinutes(now, 9),
        pain: 5
    },
    {
        start: subMinutes(now, 5),
        end: subMinutes(now, 4),
        pain: 5
    }
];

const NOT_ENOUGH_CONTRACTIONS: Contraction[] = PERFECT_CONTRACTIONS.slice(-5);

const NOT_FREQUENT_ENOUGH_CONTRACTIONS: Contraction[] = [
    {
        start: subMinutes(now, 75),
        end: subMinutes(now, 74),
        pain: 5
    },
    {
        start: subMinutes(now, 68),
        end: subMinutes(now, 67),
        pain: 5
    },
    {
        start: subMinutes(now, 61),
        end: subMinutes(now, 60),
        pain: 5
    },
    {
        start: subMinutes(now, 54),
        end: subMinutes(now, 53),
        pain: 5
    },
    {
        start: subMinutes(now, 47),
        end: subMinutes(now, 46),
        pain: 5
    },
    {
        start: subMinutes(now, 40),
        end: subMinutes(now, 39),
        pain: 5
    },
    {
        start: subMinutes(now, 33),
        end: subMinutes(now, 32),
        pain: 5
    },
    {
        start: subMinutes(now, 26),
        end: subMinutes(now, 25),
        pain: 5
    },
    {
        start: subMinutes(now, 19),
        end: subMinutes(now, 18),
        pain: 5
    },
    {
        start: subMinutes(now, 12),
        end: subMinutes(now, 11),
        pain: 5
    },
    {
        start: subMinutes(now, 5),
        end: subMinutes(now, 4),
        pain: 5
    },
];

const TOO_LONG_ENOUGH_CONTRACTIONS: Contraction[] = PERFECT_CONTRACTIONS.map(c => {
    return {
        ...c,
        end: addSeconds(c.end, 15)
    }
});

const NOT_LONG_ENOUGH_CONTRACTIONS: Contraction[] = PERFECT_CONTRACTIONS.map(c => {
    return {
        ...c,
        end: subSeconds(c.end, 15)
    }
});