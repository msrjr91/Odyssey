import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { getToken } from "./services/methods";

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
  const [cities, setCities] = useState<Cities[]>([]);
  useEffect(() => {
    async function fetchData() {
      const token = await getToken();
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get<Cities[]>(`${apiURL}/reference-data/locations/cities`)
        .then((response) => {
          const cities: Cities[] = response.data;
          setCities(cities);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <CityList cities={cities} />
    </div>
)}

export default App;
