import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

const apiURL = "https://test.api.amadeus.com/v1";

export type Cities = {
  type: string;
  subType: string;
  name: string;
  iataCode: string;
  address: {
    countryCode: string;
  };
  geoCode: {
    latitude: number;
    longitude: number;
  };
};

function CityList({ cities }: { cities: Cities[] }) {
  return (
    <ul>
      {cities.map((city) => (
        <li key={city.iataCode}>{city.name}</li>
      ))}
    </ul>
  );
}

function App() {
  

  return (
    <div className="App">
    </div>
)}

export default App;
