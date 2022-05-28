import React, { useMemo, useState } from 'react';

import { isEmpty, isNil, reverse } from 'lodash';

import AppraisalDisplay from '../../components/AppraisalDisplay/AppraisalDisplay';
import Checkbox from '../../components/Checkbox/Checkbox';
import NumberInput from '../../components/NumberInput/NumberInput';
import SegmentedControl, { SegmentedControlOption } from '../../components/SegmentedControl/SegmentedControl';
import StatFilter from '../../components/StatFilter/StatFilter';
import { ROSE_STATS, Stat, ROSE_APPRAISALS, Appraisal, AppraisalInfo } from '../../data/RoseStats';
import { useList } from '../../utils/hookUtils';
import { maxCraftStat, maxDropStat } from '../../utils/roseUtils';

import '../../styles/ItemStats.scss';

type StatMode = 'craft' | 'drop';

const OPTIONS: SegmentedControlOption<StatMode>[] = [
    {
        label: 'Craft',
        value: 'craft'
    },
    {
        label: 'Drop',
        value: 'drop'
    }
];

const ItemStats = (): JSX.Element => {
    const [currentMode, setCurrentMode] = useState<StatMode>('craft');
    const [currentInput, setCurrentInput] = useState<number>(null);
    const [goodStatsOnly, setGoodStatsOnly] = useState<boolean>(false);
    const [obtainableOnly, setObtainableOnly] = useState<boolean>(false);
    const [showIndex, setShowIndex] = useState<boolean>(false);
    const [reversed, setReversed] = useState<boolean>(false);
    const [statFilters, addStatFilter, removeStatFilter] = useList<Stat>([]);

    const calculateCurrentMax = (): number => {
        if (isNil(currentInput)) {
            return 0;
        }

        return currentMode === 'craft' ? maxCraftStat(currentInput) : maxDropStat(currentInput);
    }

    const filterAppraisals = (goodStatsOnly: boolean, statFilters: Stat[], reversed: boolean): AppraisalInfo[] => {
        const filtered = ROSE_APPRAISALS.filter(app => ((goodStatsOnly && app.isGood) || !goodStatsOnly)
            && ((!isEmpty(statFilters) && (statFilters.includes(app.primary) || statFilters.includes(app.secondary))) || isEmpty(statFilters)));
        return reversed ? reverse(filtered) : filtered;
    }

    const currentMax = calculateCurrentMax();
    const filteredAppraisals = useMemo(() => filterAppraisals(goodStatsOnly, statFilters, reversed), [goodStatsOnly, statFilters, reversed]);
    return (
        <div className="itemStatsContainer">
            <SegmentedControl<StatMode>
                className='divider'
                options={OPTIONS}
                onChange={setCurrentMode}
                value={currentMode}
            />
            <NumberInput
                className='divider'
                label={currentMode === 'craft' ? 'Item Quality: ' : 'Monster Level: '}
                value={currentInput}
                onChange={setCurrentInput}
            />
            <fieldset className='filterFields divider'>
                <legend>Display Settings</legend>
                <Checkbox
                    className='filterOption'
                    label='Good Stats Only'
                    checked={goodStatsOnly}
                    onChange={setGoodStatsOnly}
                />
                <Checkbox
                    className='filterOption'
                    label='Show Index'
                    checked={showIndex}
                    onChange={setShowIndex}
                />
                <Checkbox
                    className='filterOption'
                    label='Obtainable Only'
                    checked={obtainableOnly}
                    onChange={setObtainableOnly}
                />
                <Checkbox
                    className='filterOption'
                    label='Reverse Order'
                    checked={reversed}
                    onChange={setReversed}
                />
            </fieldset>
            <fieldset className='filterFields divider'>
                <legend>Stat Filters</legend>
                {
                    ROSE_STATS.map(stat => {
                        return (
                            <StatFilter
                                className='filterOption'
                                stat={stat}
                                checked={statFilters.includes(stat)}
                                addToFilter={addStatFilter}
                                removeFromFilter={removeStatFilter}
                            />
                        );
                    })
                }
            </fieldset>
            <div className='divider'>
                {
                    filteredAppraisals.map((appraisal) => {
                        const available = appraisal.index <= currentMax;
                        if (obtainableOnly && !available) {
                            return null;
                        }

                        return (
                            <AppraisalDisplay
                                appraisal={appraisal}
                                available={available}
                                index={showIndex ? appraisal.index : undefined}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ItemStats;