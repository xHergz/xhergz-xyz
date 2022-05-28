import React from "react";

import { isNil } from "lodash";

import { BaseProps } from "../../utils/componentUtils";

export type SegmentedControlOption<T> = {
  label: string;
  value: T;
};

export type SegmentedControlOptionSelected<T> = (newValue: T) => void;

type SegmentedControlButtonProps<T> = {
  option: SegmentedControlOption<T>;
  onClick: SegmentedControlOptionSelected<T>;
  disabled: boolean;
};

function SegmentedControlButton<T>(
  props: SegmentedControlButtonProps<T>
): JSX.Element {
  const clicked = (): void => {
    props.onClick(props.option.value);
  };

  return (
    <button
      className="segmentedControlButton"
      onClick={clicked}
      disabled={props.disabled}
    >
      {props.option.label}
    </button>
  );
}

type SegmentedControlProps<T> = BaseProps & {
  options: SegmentedControlOption<T>[];
  value: T;
  onChange: SegmentedControlOptionSelected<T>;
  label?: string;
};

function SegmentedControl<T>(props: SegmentedControlProps<T>): JSX.Element {
  const options = props.options.map((option) => {
    return (
      <SegmentedControlButton<T>
        key={option.label}
        option={option}
        onClick={props.onChange}
        disabled={option.value === props.value}
      />
    );
  });

  if (isNil(props.label)) {
    return (
      <div
        id={props.id}
        className={`${props.className} segmentedControl`}
        style={props.style}
      >
        {options}
      </div>
    );
  }

  return (
    <div
      id={props.id}
      className={`${props.className} segmentedControlContainer`}
      style={props.style}
    >
      <label>{props.label}</label>
      <div className="segmentedControl">{options}</div>
    </div>
  );
}

export default SegmentedControl;
