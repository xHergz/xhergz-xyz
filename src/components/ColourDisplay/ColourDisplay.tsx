import React from "react";

type RgbColourDisplayProps = {
  label: string;
  rgb: string;
};

const RgbColourDisplay = (props: RgbColourDisplayProps): JSX.Element => {
  const rgbCode = `rgb(${props.rgb.slice(0, 3)}, ${props.rgb.slice(
    3,
    6
  )}, ${props.rgb.slice(6, 9)})`;
  return (
    <div>
      <span>{props.label}:</span>
      <div
        style={{
          backgroundColor: rgbCode,
          width: "40px",
          height: "20px",
          marginLeft: "8px",
        }}
      />
    </div>
  );
};

export default RgbColourDisplay;
