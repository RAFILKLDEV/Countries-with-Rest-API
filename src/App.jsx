import { useEffect, useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";
import Country from "./components/Country/Country";
import axios from "axios";
import ActiveCountry from "./components/ActiveCountry/ActiveCountry";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("");

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

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
    <div className="App" id={darkMode ? "Dark-mode" : ""}>
      <div className="Header">
        <h3 className="Title">Wheres in the world ?</h3>
        <button id="Button" onClick={toggleDark}>
          <h4 className="Theme">
            <i
              className={darkMode ? "fa fa-sun-o" : "fa fa-moon-o"}
              aria-hidden="true"
            ></i>
            {darkMode ? " Light Mode" : " Dark Mode"}
          </h4>
        </button>
      </div>
      <div className="Container" id="bars">
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
      <div className="Container" id="mobile">
        {active ? (
          <ActiveCountry active={active} setActive={setActive} />
        ) : (
          <div className="Countries">
            {countries.map((e, i) => {
              if (filter) {
                if (e.region.toLowerCase().includes(filter.toLowerCase())) {
                  if (
                    e.name.common.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return (
                      <Country key={i} Country={e} setActive={setActive} />
                    );
                  }
                }
              } else {
                if (
                  e.name.common.toLowerCase().includes(search.toLowerCase())
                ) {
                  return <Country key={i} Country={e} setActive={setActive} />;
                }
              }
              return "";
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
