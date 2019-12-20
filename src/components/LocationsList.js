import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from "./LocationCard";
import { CardColumns } from "reactstrap";

export default function LocationsList() {
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        console.log(response.data.results);
        setLocations(response.data.results);
      })
      .catch(error => {
        console.error("Server error", error);
      });
  }, []);

  return (
    <section className="location-list">
      <CardColumns>
        {locations.map((item, index) => {
          return (
            <LocationCard
              key={index}
              name={item.name}
              type={item.type}
              dimension={item.dimension}
            />
          );
        })}
      </CardColumns>
    </section>
  );
}
