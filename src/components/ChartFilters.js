import React from "react";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { charts } from "./charts/chartList";

const ChartContainer = styled.div`
  position: absolute;
  left: 0;
  top: 71px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.5);
  width: 600px;
  color: white;
  z-index: 100;
  padding: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ChartFilters = function () {
  return (
    <ChartContainer>
      <Accordion allowMultipleExpanded allowZeroExpanded>
        <h5>Chart Filters</h5>
        {charts.map((chartgroup) => (<>
          <hr style={{ backgroundColor: "darkgray" }}/>
          <AccordionItem key={chartgroup.group}>
            <AccordionItemHeading style={{ marginTop: "0px"}}>
              <AccordionItemButton style={{ padding: "3px 3px 5px 15px", backgroundColor: "transparent", color: "white"}}>{chartgroup.group}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel style={{ width: "100%", padding: "5px", border: "1px solid darkgray", borderRadius: "4px", background: "rgba(255,255,255,0.1)"}}>
              {chartgroup.components.map((ChartComponent,i) => (
                <ChartComponent key={`${chartgroup.group}-${i}`}/>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        </>
        ))}
      </Accordion>
    </ChartContainer>
  );
};

export default ChartFilters;
