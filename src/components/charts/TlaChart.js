import React from "react";
import * as dc from "dc";
import { ChartTemplate } from "../ChartTemplate";

const chartFunction = (divRef, ndx) => {
  const chart = dc.rowChart(divRef);
  const dimension = ndx.dimension((d) => d.tla);
  const group = dimension.group().reduceCount();

  chart
    .dimension(dimension)
    .group(group)
    .height(250)
    .elasticX(true)
    .turnOnControls(true)
    .colors("#7AC350")
    .xAxis()
    .ticks(4);

  return chart;
};

export const TlaChart = (props) => {
  return <ChartTemplate chartFunction={chartFunction} title="By TLA" />;
};
