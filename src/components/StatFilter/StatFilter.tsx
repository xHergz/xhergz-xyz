import React from 'react';

import { Stat } from '../../data/RoseStats';
import { BaseProps } from '../../utils/componentUtils';
import { ListManipulator } from '../../utils/hookUtils';
import Checkbox from '../Checkbox/Checkbox';

type StatFilterProps = BaseProps & {
    stat: Stat;
    checked: boolean;
    addToFilter: ListManipulator<Stat>;
    removeFromFilter: ListManipulator<Stat>;
};

const StatFilter = (props: StatFilterProps) => {
    const updateFilter = (newValue: boolean): void => {
        const action = newValue ? props.addToFilter : props.removeFromFilter;
        action(props.stat);
    };

    return (
        <Checkbox
            id={props.id}
            className={props.className}
            style={props.style}
            checked={props.checked}
            onChange={updateFilter}
            label={props.stat}
        />
    );
};

export default StatFilter;