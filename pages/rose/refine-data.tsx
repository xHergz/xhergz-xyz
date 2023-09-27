import React from "react";

import GradeGraph from "../../src/components/GradeGraph/GradeGraph";
import LisentGraph from "../../src/components/LisentGraph/LisentGraph";
import {
  LISENT_AG,
  LISENT_AL,
  LISENT_AU,
  LISENT_CR,
  LISENT_CU,
  LISENT_FE,
  LISENT_HG,
  LISENT_NA,
  LISENT_PB,
  LISENT_RA,
} from "../../src/constants/refine-data.constants";
import RosePageWrapper from "../../src/components/PageWrapper/RosePageWrapper";

export type RefineDataProps = {};

const RefineData: React.FunctionComponent<RefineDataProps> = (
  props: RefineDataProps
): JSX.Element => {
  return (
    <RosePageWrapper>
      <h3>Durability by Lisent</h3>
      <LisentGraph lisent={LISENT_FE} />
      <LisentGraph lisent={LISENT_CU} />
      <LisentGraph lisent={LISENT_PB} />
      <LisentGraph lisent={LISENT_AL} />
      <LisentGraph lisent={LISENT_AG} />
      <LisentGraph lisent={LISENT_HG} />
      <LisentGraph lisent={LISENT_NA} />
      <LisentGraph lisent={LISENT_CR} />
      <LisentGraph lisent={LISENT_AU} />
      <LisentGraph lisent={LISENT_RA} />
      <h3>Durability by Grade</h3>
      <GradeGraph grade={1} />
      <GradeGraph grade={2} />
      <GradeGraph grade={3} />
      <GradeGraph grade={4} />
      <GradeGraph grade={5} />
      <GradeGraph grade={6} />
      <GradeGraph grade={7} />
      <GradeGraph grade={8} />
      <GradeGraph grade={9} />
    </RosePageWrapper>
  );
};

export default RefineData;
