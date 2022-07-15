import "mapbox-gl/dist/mapbox-gl.css";
import "./dc.css";

import Layout from "./layout/Layout";
import ChartFilters from "./components/ChartFilters";
import MapHolder from "./components/MapHolder";
import Controller from "./components/Controller";
import { CrashDataProvider } from "./CrashDataContext";

const App = () => {

  return (
    <Layout>
      <CrashDataProvider>         
      <ChartFilters />
      <Controller />
      <MapHolder />
      </CrashDataProvider> 
      
    </Layout>
  );
};

export default App;
