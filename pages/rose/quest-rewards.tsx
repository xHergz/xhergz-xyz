import { isNil } from "lodash";
import React, { useState } from "react";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";

export type QuestRewardsProps = {};

const WORLD_REWARD = 100;

const QuestRewards: React.FunctionComponent<QuestRewardsProps> = (
  props: QuestRewardsProps
): JSX.Element => {
  const [charm, setCharm] = useState<number | null>(null);
  const [level, setLevel] = useState<number | null>(null);
  const baseReward = 1;
  const fame = 0;

  const calculateCaseFive = (): number => {
    if (charm === null || level === null) {
      return 0;
    }
    return Math.floor(
      ((baseReward + 20) * (charm + 10) * WORLD_REWARD * (fame + 20)) /
        (level + 70) /
        30000 +
        baseReward
    );
  };

  return (
    <RosePageWrapper>
      <h3>Case 5</h3>
      <NumberInput label="Charm:" value={charm} onChange={setCharm} />
      <NumberInput label="Level:" value={level} onChange={setLevel} />
      {!isNil(level) && !isNil(charm) ? (
        <div>Reward Amount = {calculateCaseFive()}</div>
      ) : null}
    </RosePageWrapper>
  );
};

export default QuestRewards;
