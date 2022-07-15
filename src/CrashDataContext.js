import { createContext, useReducer, useContext, useEffect } from "react";
import crashDataReducer, { initialState } from "./crashDataReducer";
import crossfilter from "crossfilter2";
import { csv, timeParse } from "d3";

const CrashDataContext = createContext(initialState);

const DATA_URL =
  "https://raw.githubusercontent.com/petehilljnr/test-data/main/ncc_cas.csv";

export const CrashDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(crashDataReducer, initialState);

  const updateFilteredData = (newData) => {
    dispatch({
      type: "update_filter",
      payload: { filteredData: newData },
    });
  };

  const updateLayerProp = (props) => {
    dispatch({
      type: "update_layer_prop",
      payload: props,
    });
  };

  useEffect(() => {
    csv(DATA_URL).then((data) => {
      const dateFormat = timeParse("%Y-%m-%d")
      const severity = { "F" : "Fatal", "S" : "Serious", "M" : "Minor", "N" : "Non-injury"}
      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

      data.forEach((d) => {
        d.lat = +d.lat;
        d.lng = +d.lng;
        d.severity = severity[d.severity] || "Unknown";

        d.crash_date = dateFormat(d.crash_date)
        d.crash_year = d.crash_date.getFullYear() || "Not Recorded";
        d.crash_month = months[d.crash_date.getMonth()] || "Not Recorded";
        d.crash_day = weekdays[d.crash_date.getDay()] || "Not Recorded";
        d.crash_time = d.crash_time === "" ? "??" : d.crash_time;
        d.road_type = d.road_type == "SH" ? "State Highway" : "Local Authority";
        d.tla = d.tla === "" ? "Unknown" : d.tla;

      });

      const ndx = crossfilter(data);
      dispatch({
        type: "load_data",
        payload: { ndx: ndx, data: data },
      });

      updateFilteredData(ndx.allFiltered());

    });
  }, []);

  const value = {
    ...state,
    updateFilteredData,
    updateLayerProp
  };

  return (
    <CrashDataContext.Provider value={value}>
      {children}
    </CrashDataContext.Provider>
  );
};

const useCrashData = () => {
  const context = useContext(CrashDataContext);

  if (context === undefined) {
    throw new Error("useCrashData must be used within CrashDataContext");
  }

  return context;
};

export default useCrashData;
