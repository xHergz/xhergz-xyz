import React, { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  LisentData,
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
} from "../../constants/refine-data.constants";

export type GradeGraphProps = { grade: number };

const LISENTS = [
  LISENT_FE,
  LISENT_CU,
  LISENT_PB,
  LISENT_AL,
  LISENT_AG,
  LISENT_HG,
  LISENT_NA,
  LISENT_CR,
  LISENT_AU,
  LISENT_RA,
];

const GradeGraph: React.FunctionComponent<GradeGraphProps> = (
  props: GradeGraphProps
): JSX.Element => {
  const { grade } = props;
  const data = useMemo(() => {
    return LISENTS.map((lisent) => {
      return {
        lisent: lisent.NAME,
        values: lisent.DURABILITY[grade - 1],
        color: lisent.COLOUR,
      };
    });
  }, [grade]);
  return (
    <div style={{ height: "250px" }}>
      <h6>Grade {props.grade}</h6>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="lisent" />
          <YAxis
            domain={[-15, 20]}
            interval="preserveStartEnd"
            scale="linear"
          />
          <Tooltip />
          <Bar dataKey="values">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={data[index].color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradeGraph;
