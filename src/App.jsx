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
        console.log(response.data[47], "no await");
      });
    }
    getCoutries();
  }, []);

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
        <div className="Countries">
          {countries.map((e) => {
            if (e.name.common.toLowerCase().includes(search.toLowerCase())) {
              return <Country Country={e} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
