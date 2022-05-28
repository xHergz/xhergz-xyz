import React from "react";
import clsx from "clsx";
import { isFinite, isNil } from "lodash";

import { BaseProps } from "../../utils/componentUtils";

import styles from "./NumberInput.module.scss";

type NumberInputProps = BaseProps & {
  value: number | null;
  onChange: (newValue: number | null) => void;
  label?: string;
};

const NumberInput = (props: NumberInputProps): JSX.Element => {
  const classes = clsx({
    [styles.numberInputContainer]: true,
    [props.className || ""]: true,
  });

  const valueChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input: number | null =
      event.target.value === "" ? null : parseInt(event.target.value);
    if (isFinite(input) || input === null) {
      props.onChange(input);
    }
  };

  if (isNil(props.label)) {
    return (
      <input
        id={props.id}
        className={props.className}
        style={props.style}
        type="text"
        onChange={valueChanged}
        value={isNil(props.value) ? "" : props.value}
      />
    );
  }

  return (
    <div id={props.id} className={classes} style={props.style}>
      <label>{props.label}</label>
      <input
        type="text"
        onChange={valueChanged}
        value={isNil(props.value) ? "" : props.value}
      />
    </div>
  );
};

export default NumberInput;
