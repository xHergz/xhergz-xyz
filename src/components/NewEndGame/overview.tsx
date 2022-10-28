import { createStyles } from "@mantine/core";
import React from "react";
import {
  CraftLevel,
  DropLevel,
  OVERVIEW,
  OverviewData,
  OverviewGroup,
} from "../../constants/new-end-game-data";
import AruaIcon from "../AruaIcon";
import { DropTag } from "./SourceTag";

export type OverviewSectionProps = {
  data: OverviewData;
};

const useStyles = createStyles({
  overviewTable: {
    width: "100%",
  },
  header: {
    backgroundColor: "grey",
    fontWeight: 900,
  },
  title: {
    backgroundColor: "lightgrey",
    fontWeight: "bolder",
  },
  iconRow: {
    display: "flex",
  },
});

const OverviewSection: React.FunctionComponent<OverviewSectionProps> = (
  props: OverviewSectionProps
): JSX.Element => {
  const { data } = props;
  const { classes } = useStyles();
  return (
    <>
      <tr className={classes.title}>
        <td colSpan={3}>{data.title}</td>
      </tr>
      {data.groups.map((group) => {
        return (
          <tr>
            <td>
              <span>{group.description}</span>
              {group.items.map((row) => {
                return (
                  <div className={classes.iconRow}>
                    {row.map((item) => {
                      return <AruaIcon id={item.id} />;
                    })}
                  </div>
                );
              })}
            </td>
            <td>
              <ul>
                {group.notes.map((note) => (
                  <li>{note}</li>
                ))}
              </ul>
            </td>
            <td>
              {group.dropLevels.map((level) => (
                <DropTag level={level} />
              ))}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export type OverviewProps = {};

const Overview: React.FunctionComponent<OverviewProps> = (
  props: OverviewProps
): JSX.Element => {
  const { classes } = useStyles();
  return (
    <table className={classes.overviewTable}>
      <colgroup>
        <col width="25%" />
        <col width="50%" />
        <col width="25%" />
      </colgroup>
      <thead>
        <tr className={classes.header}>
          <td>Items</td>
          <td>Notes</td>
          <td>Obtained From</td>
        </tr>
      </thead>
      <tbody>
        {OVERVIEW.map((section) => (
          <OverviewSection data={section} />
        ))}
      </tbody>
    </table>
  );
};

export default Overview;
