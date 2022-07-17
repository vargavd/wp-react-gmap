// react imports
import * as React from "react";

// state imports
import { useSelector } from "react-redux";

// assets
import markerIcon from "../imgs/map-marker-point.png";

// data
import { locationInfos } from "../data";

// const
let markers: google.maps.Marker[] = [];

/**
 * props:
 * @returns 
 */
const Map: React.FC = () => {
  // REFS
  const mapRef = React.useRef<HTMLDivElement>(null);


  // STATES
  const [map, setMap] = React.useState<google.maps.Map>();
  const selectedTaxonomyATerms = useSelector((state:any) => state.taxonomyAFilters);
  const selectedTaxonomyBTerms = useSelector((state:any) => state.taxonomyBFilters);
  const selectedTaxonomyCTerms = useSelector((state:any) => state.taxonomyCFilters);
  const selectedTaxonomyDTerms = useSelector((state:any) => state.taxonomyDFilters);

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

  // EFFECT: map initialized -> add all markers
  React.useEffect(() => {
    // ADDING MARKER TO CLICK
    // if (map) {
    //   google .maps.event.addDomListener(map, 'click', (e: google.maps.MapMouseEvent) => {
    //     new google.maps.Marker({
    //       map,
    //       position: e.latLng,
    //       icon: markerIcon,
    //     });
    //   });
    // }

    if (!map) {
      return;
    }

    markers.forEach(marker => marker.setMap(null));

    markers = [];

    locationInfos.forEach((location) => {
      if (selectedTaxonomyATerms.length > 0) {
        for (let i = 0; i < selectedTaxonomyATerms.length; i++) {
          if (!location.taxonomyATerms.includes(selectedTaxonomyATerms[i])) {
            return;
          }
        }
      }

      if (selectedTaxonomyBTerms.length > 0) {
        for (let i = 0; i < selectedTaxonomyBTerms.length; i++) {
          if (!location.taxonomyBTerms.includes(selectedTaxonomyBTerms[i])) {
            return;
          }
        }
      }

      if (selectedTaxonomyCTerms.length > 0) {
        for (let i = 0; i < selectedTaxonomyCTerms.length; i++) {
          if (!location.taxonomyCTerms.includes(selectedTaxonomyCTerms[i])) {
            return;
          }
        }
      }

      if (selectedTaxonomyDTerms.length > 0) {
        for (let i = 0; i < selectedTaxonomyDTerms.length; i++) {
          if (!location.taxonomyDTerms.includes(selectedTaxonomyDTerms[i])) {
            return;
          }
        }
      }

      markers.push(new google.maps.Marker({
        map,
        position: { lat: location.lat, lng: location.lng },
        icon: markerIcon,
      }));
    });
  }, [map, selectedTaxonomyATerms, selectedTaxonomyBTerms, selectedTaxonomyCTerms, selectedTaxonomyDTerms]);


  return <div ref={mapRef} style={{ height: "100%" }} />;
};

export default Map;