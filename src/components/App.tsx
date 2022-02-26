// react imports
import * as React from "react";

// google maps wrapper
import { Wrapper as GMapWrapper, Status } from "@googlemaps/react-wrapper";

// custom components
import Header from "./header/Header";
import Map from "./Map";


// state management
import { Provider } from "react-redux";
import { store } from "../store/store";


const App: React.FC = () => {
  // helper funcs
  const renderGMapWrapperStatus = (status: Status) => {
    if (status === Status.LOADING) {
      return <p>Loading...</p>;
    }
    
    return <p>Error, check the console log</p>;
  };

  return (
    <Provider store={store}>
      <Header />
      <GMapWrapper apiKey={"GOOGLE_MAPS_API_KEY"} render={renderGMapWrapperStatus}>
        <Map />
      </GMapWrapper>
    </Provider>
  );
};

export default App;
