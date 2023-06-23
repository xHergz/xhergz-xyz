import React, { useMemo, useState } from "react";

import { isEmpty, isNil, reverse } from "lodash";

import {
  ROSE_STATS,
  Stat,
  ROSE_APPRAISALS,
  AppraisalInfo,
} from "../../src/constants/rose-stats.constants";
import { useList } from "../../src/utils/hookUtils";
import { maxCraftStat, maxDropStat } from "../../src/utils/roseUtils";

import AppraisalDisplay from "../../src/components/AppraisalDisplay/AppraisalDisplay";
import Checkbox from "../../src/components/Checkbox/Checkbox";
import NumberInput from "../../src/components/NumberInput/NumberInput";
import SegmentedControl, {
  SegmentedControlOption,
} from "../../src/components/SegmentedControl/SegmentedControl";
import StatFilter from "../../src/components/StatFilter/StatFilter";

import styles from "../../styles/ItemStats.module.scss";
import clsx from "clsx";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";

type StatMode = "craft" | "drop";

const OPTIONS: SegmentedControlOption<StatMode>[] = [
  {
    label: "Craft",
    value: "craft",
  },
  {
    label: "Drop",
    value: "drop",
  },
];

const ItemStats = (): JSX.Element => {
  const [currentMode, setCurrentMode] = useState<StatMode>("craft");
  const [currentInput, setCurrentInput] = useState<number | null>(null);
  const [goodStatsOnly, setGoodStatsOnly] = useState<boolean>(false);
  const [obtainableOnly, setObtainableOnly] = useState<boolean>(false);
  const [showIndex, setShowIndex] = useState<boolean>(false);
  const [reversed, setReversed] = useState<boolean>(false);
  const [statFilters, addStatFilter, removeStatFilter] = useList<Stat>([]);

  const fieldSetClasses = clsx({
    [styles.filterFields]: true,
    [styles.divider]: true,
  });

  const calculateCurrentMax = (): number => {
    if (isNil(currentInput)) {
      return 0;
    }

    return currentMode === "craft"
      ? maxCraftStat(currentInput)
      : maxDropStat(currentInput);
  };

  const filterAppraisals = (
    goodStatsOnly: boolean,
    statFilters: Stat[],
    reversed: boolean
  ): AppraisalInfo[] => {
    const filtered = ROSE_APPRAISALS.filter(
      (app) =>
        ((goodStatsOnly && app.isGood) || !goodStatsOnly) &&
        ((!isEmpty(statFilters) &&
          (statFilters.includes(app.primary) ||
            statFilters.includes(app.secondary || ""))) ||
          isEmpty(statFilters))
    );
    return reversed ? reverse(filtered) : filtered;
  };

  const currentMax = calculateCurrentMax();
  const filteredAppraisals = useMemo(
    () => filterAppraisals(goodStatsOnly, statFilters, reversed),
    [goodStatsOnly, statFilters, reversed]
  );
  return (
    <RosePageWrapper>
      <div className={styles.itemStatsContainer}>
        <SegmentedControl<StatMode>
          className={styles.divider}
          options={OPTIONS}
          onChange={setCurrentMode}
          value={currentMode}
        />
        <NumberInput
          className={styles.divider}
          label={currentMode === "craft" ? "Item Quality: " : "Monster Level: "}
          value={currentInput}
          onChange={setCurrentInput}
        />
        <fieldset className={fieldSetClasses}>
          <legend>Display Settings</legend>
          <Checkbox
            className={styles.filterOption}
            label="Good Stats Only"
            checked={goodStatsOnly}
            onChange={setGoodStatsOnly}
          />
          <Checkbox
            className={styles.filterOption}
            label="Show Index"
            checked={showIndex}
            onChange={setShowIndex}
          />
          <Checkbox
            className={styles.filterOption}
            label="Obtainable Only"
            checked={obtainableOnly}
            onChange={setObtainableOnly}
          />
          <Checkbox
            className={styles.filterOption}
            label="Reverse Order"
            checked={reversed}
            onChange={setReversed}
          />
        </fieldset>
        <fieldset className={fieldSetClasses}>
          <legend>Stat Filters</legend>
          {ROSE_STATS.map((stat) => {
            return (
              <StatFilter
                key={stat}
                className={styles.filterOption}
                stat={stat}
                checked={statFilters.includes(stat)}
                addToFilter={addStatFilter}
                removeFromFilter={removeStatFilter}
              />
            );
          })}
        </fieldset>
        <div className={styles.divider}>
          {filteredAppraisals.map((appraisal) => {
            const available = appraisal.index <= currentMax;
            if (obtainableOnly && !available) {
              return null;
            }

            return (
              <AppraisalDisplay
                key={appraisal.index}
                appraisal={appraisal}
                available={available}
                index={showIndex ? appraisal.index : undefined}
              />
            );
          })}
        </div>
      </div>
    </RosePageWrapper>
  );
};

export default ItemStats;
