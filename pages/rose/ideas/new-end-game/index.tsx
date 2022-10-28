import React from "react";

import PageWrapper from "../../../../src/components/PageWrapper/PageWrapper";
import Summary from "../../../../src/components/NewEndGame/summary";

export type NewEndGameProps = {};

const NewEndGame: React.FunctionComponent<NewEndGameProps> = (
  props: NewEndGameProps
): JSX.Element => {
  return (
    <PageWrapper>
      <h1>Classic's New End Game</h1>
      <Summary />
      <h2>New PvE Map</h2>
      <h2>New PvP Map</h2>
      <h2>Monsters</h2>
    </PageWrapper>
  );
};

export default NewEndGame;
