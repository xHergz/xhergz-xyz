import { createStyles } from "@mantine/core";
import React from "react";
import AruaIcon from "../AruaIcon";
import { DEFINITIONS } from "../../constants/new-end-game-data";
import Overview from "./overview";

export type SummaryProps = {};

const useStyles = createStyles({
  definitions: {
    border: "1px solid black",
  },
});

const Summary: React.FunctionComponent<SummaryProps> = (
  props: SummaryProps
): JSX.Element => {
  const styles = useStyles();
  return (
    <section>
      <h2>Summary</h2>
      <h3>Goals</h3>
      <p>
        The purpose of this idea is to provide a framework for a new iteration
        of content for Classic without getting into most of the details of
        specifics (i.e. stats, which items are used, etc).
      </p>
      <p>The idea will try to have:</p>
      <ul>
        <li>
          Nostalgia with a twist
          <ul>
            <li>
              Use familiar assets/mechanics with a different implementation
            </li>
          </ul>
        </li>
        <li>
          A large focus on PvE farming
          <ul>
            <li>
              Mainly traditional boss style (fast spawns, not super tanky mobs,
              secondaries)
            </li>
          </ul>
        </li>
        <li>
          A large focus on crafting{" "}
          <ul>
            <li>Mass crafting</li>
            <li>Harder crafting</li>
          </ul>
        </li>
        <li>
          Some new PvP farming{" "}
          <ul>
            <li>New zone to grind mobs for refines</li>{" "}
            <li>Bosses to get top tier loot</li>
          </ul>
        </li>
        <li>
          Some cool features from Arua
          <ul>
            <li>
              Timed central boss (Aleksandros style, frequent so it's not
              annoying, ~30mins or so)
            </li>
            <li>
              Manually driven boss group event (Super Alek style, need mats to
              spawn)
            </li>
          </ul>
        </li>
        <li>
          Provide an experience that extends Classic's end game for hardcore
          players
        </li>
      </ul>
      <h3>Definitions</h3>
      <table className={styles.classes.definitions}>
        <colgroup>
          <col width="30%" />
          <col width="70%" />
        </colgroup>
        <thead>
          <tr>
            <th>Term</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {DEFINITIONS.map((def) => {
            return (
              <tr>
                <td>{def.term}</td>
                <td>
                  <p>{def.definition}</p>
                  {def.example ? <p>Example: {def.example}</p> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Overview</h3>
      <Overview />
    </section>
  );
};

export default Summary;
