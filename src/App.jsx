import { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const teste = [
    {
      name: "Brazil",
      population: 20000000,
      region: "America",
      capital: "brasilia",
    },
    {
      name: "Peru",
      population: 20000000,
      region: "America",
      capital: "brasilia",
    },
  ];

  const renderCountries = () => {
    return teste.map((e) => (
      <div>
        <h4>{e.name}</h4>

        <div>Population: {e.population}</div>
        <div>Region: {e.region}</div>
        <div>Capital: {e.capital}</div>
      </div>
    ));
  };

  return (
    <div className="App">
      <div className="Header">
        <h3 className="Title">Wheres in the world ?</h3>
        <div className="Theme">Dark Mode</div>
      </div>
      <div className="Container">
        <Search search={search} setSearch={setSearch} />
        <div className="Bar" id="Filter">
          <select>
            <option>Filter By Region</option>
            <option>Africa</option>
            <option>América</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="Container">{renderCountries()}</div>
    </div>
  );
}

export default App;
