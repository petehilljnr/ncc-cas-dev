import { useState, useRef, useEffect, useContext } from "react";
import useCrashData from "../CrashDataContext"
import 'react-accessible-accordion/dist/fancy-example.css';
import * as dc from "dc";

const ResetButton = props => {    
  return (
    <span
      className="float-right"
      style={{
        padding: "0.1rem",
        cursor: "pointer",
        color: "white",
        fontSize: "0.65rem",
      }}
      onClick={() => {
        console.log(props)
        props.chart.filterAll();
        dc.redrawAll();
      }}
    >
      reset
    </span>
  );
};

export const ChartTemplate = (props) => {
  const { ndx, hasNdx, updateFilteredData} = useCrashData()
  const [chart, updateChart] = useState({});
  const div = useRef(null);
  const cf = props.chartFunction;
 
  useEffect(() => {   
    if(hasNdx) {
      const newChart = cf(div.current, ndx);
      newChart.on("filtered",function() { const t = ndx.allFiltered(); updateFilteredData(t)})
      newChart.width(550)
      newChart.render();
      
      updateChart(newChart);
    }
  }, [ndx, cf]);

  return (
    <>
    { hasNdx && (<>
     
    <div ref={div} style={{ width: "100%"}}>
    <label
     style={{
       fontSize: "1rem",
       color: "white",
     }}
   >
     {props.title}
   </label>
     
      <ResetButton chart={chart}/>
    </div>
    </>
  )}
  </>
  );
};
