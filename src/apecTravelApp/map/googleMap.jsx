import React from "react";
import "./styles.css";
import {apecEconomies } from '../ApecEconomies'
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};


const points = [
    { id: 1, title: "Russia", lng: 105.318756,lat: 61.52401 }, 
    { id: 2, title: "Australia", lng: 133.775136, lat:-25.274398 },
    { id: 3, title: "Papua New Guinea", lng: 143.95555,lat: -6.314993 },
    { id: 4, title: "Indonesia", lng: 113.921327,lat: -0.789275 },
    { id: 5, title: "Thailand", lng: 100.992541, lat:15.870032 },
    { id: 6, title: "China", lng: 104.195397, 	lat:35.86166 },
    { id: 7, title: "Singapore", lng: 103.819836,lat: 1.352083 },
    { id: 8, title: "New Zealand", lng: 174.885971,lat: -40.900557 },
    { id: 9, title: "Vietnam", lng: 108.277199, lat:14.058324 },
    { id: 10, title: "Brunei", lng: 114.727669, lat:4.535277 },
    { id: 11, title: "Canada", lng: -106.346771,lat: 56.130366 },
    { id: 12, title: "Chile", lng: -71.542969, lat:-35.675147 },
    { id: 13, title: "Taiwan", lng: 120.960515, lat:23.69781 },
    { id: 14, title: "Hong Kong", lng: 	114.109497, lat:22.396428 },
    { id: 15, title: "Japan", lng: 	138.252924, lat:36.204824 },
    { id: 16, title: "Malaysia", lng:  101.975766, lat:4.210484 },
    { id: 17, title: "Mexico", lng: -102.552784, lat:23.634501 },
    { id: 18, title: "Peru", lng: -75.015152, 	lat:-9.189967 },
    { id: 19, title: "South Korea", lng: 127.766922, lat:35.907757 },
    { id: 20, title: "Philipines", lng: 121.774017, lat:12.879721 },
    { id: 21, title: "United States", lng: 	-95.712891, lat:37.09024},
    
  ]



export default function myMap() {
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
        //   key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: -6.314993, lng: 143.95555 }}
        defaultZoom={0}
        distanceToMouse={distanceToMouse}
      >
        {apecEconomies.map(({ lat, lng, id, name, }) => {

          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={name+"\n "+ "Economy data"} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
