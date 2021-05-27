import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

import { apecEconomies } from './ApecEconomies' 

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  console.log(geoUrl)

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const markers = [
  { markerOffset: -15, name: "", coordinates: [105.318756, 61.52401] }, //Russia
  { markerOffset: [-15], name: "", coordinates: [133.775136, -25.274398] },//Australia
  { markerOffset: 25, name: "", coordinates: [143.95555, -6.314993] },//Papua New Guinea
  { markerOffset: 25, name: "", coordinates: [113.921327, -0.789275] },//Indonesia
  { markerOffset: 25, name: "", coordinates: [100.992541, 15.870032] },//Thailand
  { markerOffset: 25, name: "", coordinates: [104.195397, 	35.86166] },//China
  { markerOffset: -15, name: "", coordinates: [103.819836, 1.352083] },//Singapore
  { markerOffset: -15, name: "", coordinates: [174.885971, -40.900557] },//New Zealand
  { markerOffset: 25, name: "", coordinates: [108.277199, 14.058324] },//Vietnam
  { markerOffset: 25, name: "", coordinates: [114.727669, 	4.535277] },//Brunei
  { markerOffset: -15, name: "", coordinates: [	-106.346771, 56.130366] },//Canada
  { markerOffset: -15, name: "", coordinates: [-71.542969, -35.675147] },//Chile
  { markerOffset: -15, name: "", coordinates: [120.960515, 	23.69781] },//Taiwan
  { markerOffset: 25, name: "", coordinates: [	114.109497, 22.396428] },//Hong Kong
  { markerOffset: 25, name: "", coordinates: [	138.252924, 	36.204824] },//Japan
  { markerOffset: 25, name: "", coordinates: [ 101.975766, 	4.210484] },//Malaysia
  { markerOffset: 25, name: "", coordinates: [	-102.552784, 	23.634501] },//Mexico
  { markerOffset: -15, name: "", coordinates: [	-75.015152, 	-9.189967] },//Peru
  { markerOffset: -15, name: "", coordinates: [127.766922, 	35.907757] },//South Korea
  { markerOffset: 25, name: "", coordinates: [121.774017, 	12.879721] },//Philipines
  { markerOffset: -15, name: "", coordinates: [	-95.712891, 	37.09024] },//United States
  
]

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    
                    console.log(geo.properties)
                    
                    for(let i = 0; i < apecEconomies.length; i++){
                      if(apecEconomies[i].name === NAME){
                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                        let thisColor = true
                      }
                    }
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#D6D6DA",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
