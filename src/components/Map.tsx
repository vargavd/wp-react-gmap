// react imports
import * as React from "react";

// assets
import markerIcon from "../imgs/map-marker-point.png";

/**
 * props:
 * @returns 
 */
const Map: React.FC = () => {
  // REFS
  const mapRef = React.useRef<HTMLDivElement>(null);


  // STATES
  const [map, setMap] = React.useState<google.maps.Map>();


  // EFFECT: mapRef mounted -> create map
  React.useEffect(() => {
    if (mapRef.current) {
      setMap(new window.google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 },
        zoom: 3,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "color": "#878787"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#bdbdbd"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "labels",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "administrative.country",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f9f5ed"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "landscape.natural",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f5f5f5"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#c9c9c9"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#aee0f4"
                  }
              ]
          }
        ],
      }));
    }
  }, [mapRef]);

  // EFFECT: map initialized -> subscribe click
  React.useEffect(() => {
    if (map) {
      google.maps.event.addDomListener(map, 'click', (e: google.maps.MapMouseEvent) => {
        new google.maps.Marker({
          map,
          position: e.latLng,
          icon: markerIcon,
        });
      });
    }
  }, [map]);


  return <div ref={mapRef} style={{ height: "100%" }} />;
};

export default Map;