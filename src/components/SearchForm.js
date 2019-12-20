import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, CardColumns, CardHeader, CardFooter, CardImg } from "reactstrap";
import styled from "styled-components";

const Search = styled.div`
  display: flex;
  margin: 0 auto;
`;

export default function SearchForm() {
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      const data = response.data.results;
      console.log(response.data.results);
      const result = data.filter(name =>
        name.name.toLowerCase().includes(query.toLowerCase())
      );
      setCharacter(result);
    });
  }, [query]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
      <Search>
        <form className="search">
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="Find a character"
            autoComplete="off"
          />
        </form>
      </Search>
      <CardColumns>
        {character.map((item, index) => {
          return (
            <div>
              <Card
                body
                className="text-center"
                outline
                color="warning"
                key={index}
              >
                <CardHeader className="card-header">{item.name}</CardHeader>
                <CardImg
                  src={item.image}
                  top
                  width="100%"
                  alt={item.name}
                ></CardImg>
                <CardFooter className="card-footer">
                  {item.species} <span> | </span> {item.status}
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </CardColumns>
    </section>
  );
}
