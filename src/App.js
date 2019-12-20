import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import LocationList from "./components/LocationsList";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/characters">
        <CharacterList />
      </Route>
      <Route exact path="/locations">
        <LocationList />
      </Route>
      <Route exact path="/search">
        <SearchForm />
      </Route>
    </main>
  );
}
