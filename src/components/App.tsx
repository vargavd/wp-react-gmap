// react imports
import * as React from "react";

// google maps wrapper
import { Wrapper as GMapWrapper, Status } from "@googlemaps/react-wrapper";

// custom components
import Map from "./Map";

import { GOOGLE_MAP_API_KEY } from "../sensitive";

const App = () => {
  // helper funcs
  const renderGMapWrapperStatus = (status: Status) => {
    if (status === Status.LOADING) {
      return <p>Loading...</p>;
    }
    
    return <p>Error, check the console log</p>;
  };

  return (
    <GMapWrapper apiKey={GOOGLE_MAP_API_KEY} render={renderGMapWrapperStatus}>
      <Map />
    </GMapWrapper>
  );
};

export default App;
