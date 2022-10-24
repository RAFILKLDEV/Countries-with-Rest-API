import { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";
import Country from "./components/Country/Country";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

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
    {
      name: "Peru",
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
    {
      name: "Peru",
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
    {
      name: "Peru",
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

  return (
    <div className="App">
      <div className="Header">
        <h3 className="Title">Wheres in the world ?</h3>
        <div className="Theme">Dark Mode</div>
      </div>
      <div className="Container">
        <Search search={search} setSearch={setSearch} />
        <div className="Bar" id="Filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>Filter By Region</option>
            <option>Africa</option>
            <option>América</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="Container">
        {teste.map((e) => (
          <Country Country={e} />
        ))}
      </div>
    </div>
  );
}

export default App;
