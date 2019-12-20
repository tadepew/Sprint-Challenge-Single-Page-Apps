import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import { CardColumns } from "reactstrap";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server error", error);
      });
  }, []);

  return (
    <section className="character-list">
      <CardColumns>
        {characters.map((item, index) => {
          return (
            <CharacterCard
              key={index}
              name={item.name}
              img={item.image}
              species={item.species}
              status={item.status}
            />
          );
        })}
      </CardColumns>
    </section>
  );
}
