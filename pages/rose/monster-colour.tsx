import React, { useState } from "react";
import clsx from "clsx";

import { isNil, upperFirst } from "lodash";

import NumberInput from "../../src/components/NumberInput/NumberInput";

import styles from "../../styles/MonsterColour.module.scss";
import PageWrapper from "../../src/components/PageWrapper/PageWrapper";

type MonsterNameColour =
  | "purple"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "lightBlue"
  | "grey";

type MonsterLevelRange = {
  min: number | null;
  max: number | null;
  colour: MonsterNameColour;
};

const MONSTER_TIERS: MonsterLevelRange[] = [
  {
    min: null,
    max: -23,
    colour: "purple",
  },
  {
    min: -22,
    max: -16,
    colour: "pink",
  },
  {
    min: -15,
    max: -10,
    colour: "red",
  },
  {
    min: -9,
    max: -4,
    colour: "orange",
  },
  {
    min: -3,
    max: 3,
    colour: "yellow",
  },
  {
    min: 4,
    max: 8,
    colour: "green",
  },
  {
    min: 9,
    max: 14,
    colour: "blue",
  },
  {
    min: 15,
    max: 21,
    colour: "lightBlue",
  },
  {
    min: 22,
    max: null,
    colour: "grey",
  },
];

const MIN_LEVEL: number = 1;
const MAX_LEVEL: number = 228;

const MonsterColour = (): JSX.Element => {
  const [monsterLevel, setMonsterLevel] = useState<number | null>(null);
  const [playerLevel, setPlayerLevel] = useState<number | null>(null);

  const colourListClasses = clsx({
    [styles.divider]: true,
    [styles.colourList]: true,
  });

  const calculateLevelRanges = (): MonsterLevelRange[] => {
    return MONSTER_TIERS.map((tier) => {
      return {
        min:
          isNil(tier.min) || isNil(monsterLevel)
            ? null
            : monsterLevel + tier.min,
        max:
          isNil(tier.max) || isNil(monsterLevel)
            ? null
            : monsterLevel + tier.max,
        colour: tier.colour,
      };
    });
  };

  const getCurrentTier = (): MonsterLevelRange => {
    const levelDiff =
      isNil(playerLevel) || isNil(monsterLevel)
        ? 0
        : playerLevel - monsterLevel;
    const currentTier = MONSTER_TIERS.find((tier) => {
      return (
        (isNil(tier.min) || levelDiff >= tier.min) &&
        (isNil(tier.max) || levelDiff <= tier.max)
      );
    });
    return isNil(currentTier)
      ? MONSTER_TIERS[MONSTER_TIERS.length - 1]
      : currentTier;
  };

  const rangeString = (range: MonsterLevelRange): string => {
    const actualMin =
      isNil(range.min) || range.min <= 0 ? MIN_LEVEL : range.min;
    const actualMax =
      isNil(range.max) || range.max <= 0 ? MIN_LEVEL : range.max;
    if (
      (isNil(range.min) || range.min <= 0) &&
      (isNil(range.max) || range.max <= 0)
    ) {
      return "N/A";
    } else if (isNil(range.max)) {
      return `${upperFirst(range.colour)} @ Level ${actualMin}+`;
    } else if (actualMin === actualMax) {
      return `${upperFirst(range.colour)} @ Level ${actualMax}`;
    } else {
      return `${upperFirst(range.colour)} @ Level ${actualMin} - ${actualMax}`;
    }
  };

  const levelRanges = calculateLevelRanges();
  const currentTier = getCurrentTier();
  const currentTierClass = `${currentTier.colour}Name`;
  const currentTierClasses = clsx({
    [styles.nameColour]: true,
    [styles[currentTierClass]]: true,
  });
  return (
    <PageWrapper>
      <div className={styles.monsterColourContainer}>
        <NumberInput
          className={styles.divider}
          label={"Monster Level: "}
          value={monsterLevel}
          onChange={setMonsterLevel}
        />
        <NumberInput
          className={styles.divider}
          label={"Player Level: "}
          value={playerLevel}
          onChange={setPlayerLevel}
        />
        <h4>Monster Colour Chart</h4>
        <div className={colourListClasses}>
          {!isNil(monsterLevel) ? (
            levelRanges.map((range) => {
              const colourClass = `${range.colour}Name`;
              const colourClasses = clsx({
                [styles.nameColour]: true,
                [styles[colourClass]]: true,
              });
              return (
                <div key={range.colour} className={colourClasses}>
                  {rangeString(range)}
                </div>
              );
            })
          ) : (
            <span className={styles.helperText}>
              {"<Enter monster level to see the colour chart>"}
            </span>
          )}
        </div>
        <h4>Colour @ Current Level</h4>
        <div className={colourListClasses}>
          {!isNil(playerLevel) && !isNil(monsterLevel) ? (
            <div className={currentTierClasses}>
              {`${upperFirst(currentTier.colour)} @ Level ${playerLevel}`}
            </div>
          ) : (
            <span className={styles.helperText}>
              {"<Enter player AND monster level to see the current colour>"}
            </span>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default MonsterColour;
