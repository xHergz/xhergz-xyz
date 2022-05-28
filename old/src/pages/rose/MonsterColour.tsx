import React, { useState } from 'react';

import { isNil, upperFirst } from 'lodash';

import NumberInput from '../../components/NumberInput/NumberInput';

import '../../styles/MonsterColour.scss';

type MonsterNameColour = 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'lightBlue' | 'grey';

type MonsterLevelRange = {
    min: number,
    max: number,
    colour: MonsterNameColour
}

const MONSTER_TIERS: MonsterLevelRange[] = [
    {
        min: null,
        max: -23,
        colour: 'purple'
    },
    {
        min: -22,
        max: -16,
        colour: 'pink'
    },
    {
        min: -15,
        max: -10,
        colour: 'red'
    },
    {
        min: -9,
        max: -4,
        colour: 'orange'
    },
    {
        min: -3,
        max: 3,
        colour: 'yellow'
    },
    {
        min: 4,
        max: 8,
        colour: 'green'
    },
    {
        min: 9,
        max: 14,
        colour: 'blue'
    },
    {
        min: 15,
        max: 21,
        colour: 'lightBlue'
    },
    {
        min: 22,
        max: null,
        colour: 'grey'
    },
];

const MIN_LEVEL: number = 1;
const MAX_LEVEL: number = 228;

const MonsterColour = (): JSX.Element => {
    const [monsterLevel, setMonsterLevel] = useState<number>(null);
    const [playerLevel, setPlayerLevel] = useState<number>(null);

    const calculateLevelRanges = (): MonsterLevelRange[] => {
        return MONSTER_TIERS.map(tier => {
            return {
                min: isNil(tier.min) ? null : monsterLevel + tier.min,
                max: isNil(tier.max) ? null : monsterLevel + tier.max,
                colour: tier.colour
            };
        });
    };

    const getCurrentTier = (): MonsterLevelRange => {
        const levelDiff = playerLevel - monsterLevel;
        const currentTier = MONSTER_TIERS.find(tier => {
            return (levelDiff >= tier.min || isNil(tier.min)) && (levelDiff <= tier.max || isNil(tier.max));
        });
        return isNil(currentTier) ? MONSTER_TIERS[MONSTER_TIERS.length - 1] : currentTier;
    };

    const rangeString = (range: MonsterLevelRange): string => {
        const actualMin = range.min <= 0 ? MIN_LEVEL : range.min;
        const actualMax = range.max <= 0 ? MIN_LEVEL : range.max;
        console.log(range);
        if ((isNil(range.min) || range.min <= 0) && range.max <= 0) {
            return 'N/A';
        } else if (isNil(range.max)) {
            return `${upperFirst(range.colour)} @ Level ${actualMin}+`;
        } else if (actualMin === actualMax) {
            return `${upperFirst(range.colour)} @ Level ${actualMax}`;
        } else {
            return `${upperFirst(range.colour)} @ Level ${actualMin} - ${actualMax}`;
        }
    };

    const levelRanges = calculateLevelRanges();
    const currentTier = getCurrentTier();
    return (
        <div className="monsterColourContainer">
            <NumberInput
                className='divider'
                label={'Monster Level: '}
                value={monsterLevel}
                onChange={setMonsterLevel}
            />
            <NumberInput
                className='divider'
                label={'Player Level: '}
                value={playerLevel}
                onChange={setPlayerLevel}
            />
            <h4>Monster Colour Chart</h4>
            <div className='divider colourList'>
                {
                    !isNil(monsterLevel)
                        ? (
                            levelRanges.map(range => {
                                return (
                                    <div className={`nameColour ${range.colour}Name`}>
                                        {rangeString(range)}
                                    </div>
                                );
                            })
                        )
                        : <span className='helpText'>{'<Enter monster level to see the colour chart>'}</span>
                }
            </div>
            <h4>Colour @ Current Level</h4>
            <div className='divider colourList'>
                {
                    !isNil(playerLevel) && !isNil(monsterLevel)
                        ? (
                            <div className={`nameColour ${currentTier.colour}Name`}>
                                {`${upperFirst(currentTier.colour)} @ Level ${playerLevel}`}
                            </div>
                        )
                        : <span className='helpText'>{'<Enter player AND monster level to see the current colour>'}</span>
                }
            </div>
        </div>
    );
}

export default MonsterColour;