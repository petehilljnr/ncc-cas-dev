import React from "react";
import * as dc from "dc";
import { ChartTemplate } from "../ChartTemplate";

const chartFunction = (divRef, ndx) => {
  const chart = dc.rowChart(divRef);
  const dimension = ndx.dimension((d) => d.road_type);
  const group = dimension.group().reduceCount();

  chart
    .dimension(dimension)
    .group(group)
    .height(120)
    .elasticX(true)
    .turnOnControls(true)
    .colors("#7AC350")
    .xAxis()
    .ticks(4);

  return chart;
};

export const RoadTypeChart = (props) => {
  return <ChartTemplate chartFunction={chartFunction} title="By Road Type" />;
};
