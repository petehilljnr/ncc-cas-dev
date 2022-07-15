import React from "react";
import Slider from "react-input-slider";
import useCrashData from "../CrashDataContext";

const SliderHorizontal = (props) => {
  const { updateLayerProp } = useCrashData();
  const { title, minx, maxx, xstep, property, layer} = props;
  const state = useCrashData()[layer];

  const handleChange = function (e) {
    updateLayerProp({ layer: layer, field: property, value: e });
  };

  return (
    <>
      <div style={{ paddingTop: "5px", fontWeight: "normal" }}>
        {title} :{" "}
        <span style={{ fontSize: "0.75rem", color: "blue" }}>
          {Math.round(state[property] * 100) / 100}
        </span>
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <Slider
          axis="x"
          x={state[property]}
          xmax={maxx}
          xmin={minx}
          xstep={xstep}          
          onChange={({ x }) => handleChange(x)}
        />
      </div>
    </>
  );
};

export default SliderHorizontal;
