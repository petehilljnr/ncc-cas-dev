import React from "react";
import * as dc from "dc";
import { ChartTemplate } from "../ChartTemplate";
import { scaleBand } from "d3";

const chartFunction = (divRef, ndx) => {
  const chart = dc.barChart(divRef);
  const dimension = ndx.dimension(d => d.crash_time);
  const group = dimension.group().reduceCount();

  chart
    .dimension(dimension)
    .group(group)
    .margins({left: 35, right: 0, top: 10, bottom: 45})
    .height(280)
    .colors("#7AC350")
    .x(scaleBand())
    .xUnits(dc.units.ordinal)
    .brushOn(false)
    .elasticY(true)
    .gap(1)

  /*chart.on("pretransition", function(chart) {
    chart.select('.axis.x')
         .attr("text-anchor", "end")
         .selectAll("text")
         .attr("transform", "rotate(-90)")
         .attr("dy", "-0.7em")
         .attr("dx", "-1em")
         .attr("font-size","0.3rem");
  });
  */
  return chart;
};

export const HourChart = (props) => {
  return <ChartTemplate chartFunction={chartFunction} title="By Hour" />;
};
