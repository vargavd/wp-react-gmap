// react imports
import * as React from "react";

// google maps wrapper
import { Wrapper as GMapWrapper, Status } from "@googlemaps/react-wrapper";

import { GOOGLE_MAP_API_KEY } from "../sensitive";

const App = () => {
  // states
  const [map, setMap] = React.useState<google.maps.Map>();

  // ref
  const mapRef = React.useRef<HTMLDivElement>(null);

  // effects
  React.useEffect(() => {
    if (mapRef.current && !map) {
      setMap(new google.maps.Map(mapRef.current, {}));
    }
  }, [mapRef, map]);


  // helper funcs
  const renderGMapWrapperStatus = (status: Status) => {
    return (
      <h2>{status}</h2> 
    );
  };

  return (
    <GMapWrapper apiKey={GOOGLE_MAP_API_KEY} render={renderGMapWrapperStatus}>
      <div ref={mapRef} />
    </GMapWrapper>
  );
};

export default App;
