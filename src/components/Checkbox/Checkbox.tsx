import React from 'react';

import { isNil } from 'lodash';

import { BaseProps } from '../../utils/componentUtils';

type CheckboxProps = BaseProps & {
    checked: boolean;
    onChange: (newValue: boolean) => void;
    label?: string
}

const Checkbox = (props: CheckboxProps): JSX.Element => {
    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
        props.onChange(event.target.checked);
    }

    if (isNil(props.label)) {
        return (
            <input
                id={props.id}
                className={props.className}
                style={props.style}
                type='checkbox'
                onChange={valueChanged}
                checked={props.checked ? true : undefined}
            />
        );
    }

    return (
        <div
            id={props.id}
            className={props.className}
            style={props.style}
        >
            <input
                type='checkbox'
                onChange={valueChanged}
                checked={props.checked ? true : undefined}
            />
            <label>{props.label}</label>
        </div>
    );
}

export default Checkbox;
