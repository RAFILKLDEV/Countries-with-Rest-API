import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <h3 className="Title">Wheres in the world ?</h3>
        <div className="Theme">Dark Mode</div>
      </div>
      <div className="Container">
        <div className="Bar">
          <input id="Search" placeholder="Search for a country..."></input>
        </div>
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
      <div className="Container"></div>
    </div>
  );
}

export default App;
