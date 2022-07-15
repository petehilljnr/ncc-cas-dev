import React from "react";
import * as dc from "dc";
import { ChartTemplate } from "../ChartTemplate";

const chartFunction = (divRef, ndx) => {
  const chart = dc.rowChart(divRef);
  const dimension = ndx.dimension((d) => d.road_wet);
  const group = dimension.group().reduceCount();

  chart
    .dimension(dimension)
    .group(group)
    .height(250)
    .elasticX(true)
    .colors("#7AC350")
    .xAxis()
    .ticks(4);

  return chart;
};

export const RoadConditionChart = (props) => {
  return <ChartTemplate chartFunction={chartFunction} title="By Road Condition" />;
};
