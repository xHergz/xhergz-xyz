import React from 'react';
import classNames from 'classnames';
import lodash, { padStart } from 'lodash';

import { Appraisal } from '../../data/RoseStats';

import './AppraisalDisplay.scss';

type StatDisplayProps = {
    appraisal: Appraisal,
    available?: boolean,
    index?: number
}

function StatDisplay(props: StatDisplayProps): JSX.Element {
    const classes: string = classNames({
        available: !lodash.isNil(props.available) && props.available,
        notAvailable: !lodash.isNil(props.available) && !props.available,
    });

    return (
        <div className={classes}>
            {
                props.index
                    ? `${padStart(props.index.toString(), 3, '0')}: `
                    : null
            }
            {`${props.appraisal.primary} ${props.appraisal.primaryValue}`}
            {
                props.appraisal.secondary
                    ? ` / ${props.appraisal.secondary} ${props.appraisal.secondaryValue}`
                    : null
            }
        </div>
    );
}

export default StatDisplay;