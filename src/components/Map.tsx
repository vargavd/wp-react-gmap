// react imports
import * as React from "react";

/**
 * props:
 * @returns 
 */
const Map = () => {
  // REFS
  const mapRef = React.useRef<HTMLDivElement>(null);


  // STATES
  const [map, setMap] = React.useState<google.maps.Map>();


  // EFFECT: mapRef mounted -> create map
  React.useEffect(() => {
    if (mapRef.current) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 3
      }));
    }
  }, [mapRef]);

  // EFFECT: map initialized -> subscribe click
  React.useEffect(() => {
    if (map) {
      google.maps.event.addDomListener(map, 'click', (e: google.maps.MapMouseEvent) => {
        new google.maps.Marker({
          map,
          position: e.latLng
        });
      });
    }
  }, [map]);


  return <div ref={mapRef} style={{ height: "100%" }} />;
};

export default Map;