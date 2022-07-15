import { scatterLayer, layerControllers, hexLayer, heatLayer } from "./components/mapComponents/mapLayers";

export const initialState = {
  data: [],
  filteredData: [],
  ndx: {},
  hasNdx: false,
  scatterLayer: scatterLayer,
  hexLayer: hexLayer,
  heatLayer: heatLayer,
  layerControllers: layerControllers,
  initialViewState: {
    longitude: 176.8,
    latitude: -39.6,
    zoom: 11,
    pitch: 60,
    bearing: 0
  }
};

const crashDataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {

    case "load_data":
      //console.log("loaded_data");

      return {
        ...state,
        data: payload.data,
        ndx: payload.ndx,
        hasNdx: true
      };
    
      case "update_filter":
      //console.log("update_filter");

      return {
        ...state,
        filteredData: payload.filteredData
      };

      case "update_scatter_prop":
      //console.log("update_scatter_prop: ",payload.field, " => ", payload.value);
      const currentScatter = state.scatterLayer;
      const newScatter = { ...currentScatter, [payload.field]: payload.value}

      return {
        ...state,
        scatterLayer: newScatter
      };

      case "update_layer_prop":
      //console.log("update_layer_prop", payload.layer, payload.field, payload.value);
      const currentLayer = state[payload.layer]
      const newLayer = { ...currentLayer, [payload.field]: payload.value };

      return {
        ...state,
        [payload.layer] : newLayer
      };
  }
};

export default crashDataReducer;