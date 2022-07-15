import React from "react";
import * as dc from "dc";
import { ChartTemplate } from "../ChartTemplate";

const chartFunction = (divRef, ndx) => {
  
  const chart = dc.rowChart(divRef);
  const dimension = ndx.dimension((d) => d.crash_month);
  const group = dimension.group().reduceCount();

  chart
    .dimension(dimension)
    .group(group)
    .height(300)
    .elasticX(true)
    .colors("#7AC350")
    .xAxis()
    .ticks(4);

  return chart;
};

export const MonthChart = (props) => {
  return <ChartTemplate chartFunction={chartFunction} title="By Month" />;
};
