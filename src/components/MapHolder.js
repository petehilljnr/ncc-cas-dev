import { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { Map } from "react-map-gl";
import { ScatterplotLayer, HexagonLayer, HeatmapLayer } from "deck.gl";
import {
  lightingEffect,
  material,
  colorRange,
  MAP_STYLE,
} from "./mapComponents/mapSettings";

import useCrashData from "../CrashDataContext";
import { filter } from "d3";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoicGV0ZWhpbGxqbnIiLCJhIjoiY2swcjZtd3IxMDJjOTNjb3c1Z25wczQ3NyJ9.2Ut4kmGeVuvc7UUb-qezNw";

const MapHolder = (props) => {
  const { scatterLayer, hexLayer, heatLayer, filteredData, initialViewState } =
    useCrashData();

  const layers = [
    new ScatterplotLayer({ ...scatterLayer, data: filteredData }),
    new HexagonLayer({ ...hexLayer, data: filteredData }),
    new HeatmapLayer({ ...heatLayer, data: filteredData }),
  ];

  return (
    <>
      <DeckGL
        layers={layers}
        effects={[lightingEffect]}
        initialViewState={initialViewState}
        controller={true}
      >
        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} mapStyle={MAP_STYLE} />
      </DeckGL>
    </>
  );
};

export default MapHolder;
