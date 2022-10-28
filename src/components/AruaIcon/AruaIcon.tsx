import { createStyles } from "@mantine/core";
import React from "react";

export type AruaIconProps = {
  id: number;
  color?: "yellow" | "blue";
};

const useStyles = createStyles({
  iconBackground: {
    padding: "8px",
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  blueItem: {
    backgroundColor: "#33b9ff",
  },
  yellowItem: {
    backgroundColor: "#dbff33",
  },
});

const AruaIcon: React.FunctionComponent<AruaIconProps> = (
  props: AruaIconProps
): JSX.Element => {
  const { color, id } = props;
  const { classes, cx } = useStyles();
  const backgroundClasses = cx(classes.iconBackground, {
    [classes.yellowItem]: color !== "blue",
    [classes.blueItem]: color === "blue",
  });
  return (
    <div className={backgroundClasses}>
      <img
        src={`//www.aruarose.com/public/images/armory/icons/icon_${id}.png`}
      />
    </div>
  );
};

export default AruaIcon;
