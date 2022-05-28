import React, { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { LisentData } from "../../constants/refine-data.constants";

export type LisentGraphProps = { lisent: LisentData };

const LisentGraph: React.FunctionComponent<LisentGraphProps> = (
  props: LisentGraphProps
): JSX.Element => {
  const data = useMemo(() => {
    return props.lisent.DURABILITY.map((values, index) => {
      return {
        grade: `Grade ${index + 1}`,
        values: values,
      };
    });
  }, [props.lisent]);
  return (
    <div style={{ height: "250px" }}>
      <h6>{props.lisent.NAME}</h6>
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
          <XAxis dataKey="grade" />
          <YAxis
            domain={[-15, 20]}
            interval="preserveStartEnd"
            scale="linear"
          />
          <Tooltip />
          <Bar dataKey="values" fill={props.lisent.COLOUR} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LisentGraph;
