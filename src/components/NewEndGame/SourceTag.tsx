import { createStyles } from "@mantine/core";
import React from "react";
import { Hammer, Trophy } from "tabler-icons-react";
import { CraftLevel, DropLevel } from "../../constants/new-end-game-data";

type SourceTagColor = "green" | "yellow" | "orange" | "red";

export type SoureTagProps = {
  color: SourceTagColor;
  text: string;
  type: "drop" | "craft";
};

const useStyles = createStyles({
  pill: {
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    color: "white",
  },
  green: {
    backgroundColor: "green",
  },
  yellow: {
    backgroundColor: "yellow",
  },
  orange: {
    backgroundColor: "orange",
  },
  red: {
    backgroundColor: "red",
  },
});

const SourceTag: React.FunctionComponent<SoureTagProps> = (
  props: SoureTagProps
): JSX.Element => {
  const { color, text, type } = props;
  const { classes, cx } = useStyles();
  const containerClasses = cx(classes.pill, {
    [classes.green]: color === "green",
    [classes.yellow]: color === "yellow",
    [classes.orange]: color === "orange",
    [classes.red]: color === "red",
  });
  const icon = type === "craft" ? <Hammer /> : <Trophy />;
  return (
    <div className={containerClasses}>
      {icon} <span>{text}</span>
    </div>
  );
};

type CraftTagProps = {
  level: CraftLevel;
};

export const CraftTag: React.FunctionComponent<CraftTagProps> = (
  props: CraftTagProps
): JSX.Element => {
  const getColor = (): SourceTagColor => {
    switch (props.level) {
      case "Common":
        return "green";
      case "Uncommon":
        return "yellow";
      case "Rare":
        return "orange";
      case "UberRare":
        return "red";
    }
  };
  return (
    <SourceTag color={getColor()} text={props.level as string} type="craft" />
  );
};

type DropTagProps = {
  level: DropLevel;
};

export const DropTag: React.FunctionComponent<DropTagProps> = (
  props: DropTagProps
): JSX.Element => {
  const getColor = (): SourceTagColor => {
    switch (props.level) {
      case "Uncommon":
        return "green";
      case "Rare":
        return "yellow";
      case "UberRare":
        return "orange";
      case "Legendary":
        return "red";
    }
  };

  return (
    <SourceTag color={getColor()} text={props.level as string} type="drop" />
  );
};

export default SourceTag;
