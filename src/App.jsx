import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";
import Country from "./components/Country/Country";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const api = "https://restcountries.com/v3.1/all";

    function getCoutries() {
      axios.get(api).then(async function (response) {
        await setCountries(response.data);
      });
    }
    getCoutries();
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <h3 className="Title">Wheres in the world ?</h3>
        <button id="button">
          <h4 className="Theme">
            <i class="fa fa-moon-o" aria-hidden="true"></i> Dark Mode
          </h4>
        </button>
      </div>
      <div className="Container">
        <Search search={search} setSearch={setSearch} />
        <div className="Bar" id="Filter">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value={""}>Filter By Region</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className="Container">
        <div className="Countries">
          {countries.map((e, i) => {
            if (filter) {
              if (e.region.toLowerCase().includes(filter.toLowerCase())) {
                if (
                  e.name.common.toLowerCase().includes(search.toLowerCase())
                ) {
                  return <Country key={i} Country={e} />;
                }
              }
            } else {
              if (e.name.common.toLowerCase().includes(search.toLowerCase())) {
                return <Country key={i} Country={e} />;
              }
            }

            return "";
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
