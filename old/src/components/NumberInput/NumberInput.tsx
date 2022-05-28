import React from 'react';

import { isFinite, isNil } from 'lodash';

import { BaseProps } from '../../utils/componentUtils';

type NumberInputProps = BaseProps & {
    value: number;
    onChange: (newValue: number) => void;
    label?: string
}

const NumberInput = (props: NumberInputProps): JSX.Element => {
    const valueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const input: number = event.target.value === '' ? null : parseInt(event.target.value);
        if (isFinite(input) || input === null) {
            props.onChange(input);
        }
    }

    if (isNil(props.label)) {
        return (
            <input
                id={props.id}
                className={props.className}
                style={props.style}
                type='text'
                onChange={valueChanged}
                value={isNil(props.value) ? '' : props.value}
            />
        );
    }

    return (
        <div
            id={props.id}
            className={`${props.className} numberInputContainer`}
            style={props.style}
        >
            <label>{props.label}</label>
            <input
                type='text'
                onChange={valueChanged}
                value={isNil(props.value) ? '' : props.value}
            />
        </div>
    );
}

export default NumberInput;
