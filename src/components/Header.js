import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  text-decoration: none;
  margin: 0 auto;
  margin-bottom: 3%;
  margin-top: 2%;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Div>
        <div>
          <Link to="/">Welcome</Link>
        </div>
        <div>
          <Link to="/characters">Characters</Link>
        </div>
        <div>
          <Link to="/locations">Locations</Link>
        </div>
        <div>
          <Link to="/search">Search</Link>
        </div>
      </Div>
    </header>
  );
}
