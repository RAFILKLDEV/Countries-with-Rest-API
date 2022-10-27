import axios from "axios";
import React, { useEffect, useState } from "react";

const ActiveCountry = (props) => {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");

  useEffect(() => {
    setLoading(true);
    const api = "https://restcountries.com/v3.1/name/";

    function getCountry() {
      axios.get(api + props.active).then(async function (response) {
        await setCountry(response.data);
        console.log(response.data);
      });
    }
    getCountry();
    setLoading(false);
  }, []);

  const kek = {
    azul: { kek: "kek" },
  };

  const objectMap2 = (obj, type) =>
    Object.entries(obj).map(([k, v]) => {
      const languages = Object.values(obj[k].languages).join(", ");
      return languages;
    });

  return (
    <div className="Container" id="Column">
      <button className="ButtonCountry" id="Button" onClick={() => props.setActive("")}>
        Voltar
      </button>
      <div className="Country" id="Active">
        <img alt={country[0]?.name.common} src={country[0]?.flags.png} />
        <div>
          <h2>{country[0]?.name.common}</h2>
          <div>Official: {country[0]?.name?.official}</div>
        </div>
        <div>
          <div>Region: {country[0]?.region}</div>
          <div>Subregion: {country[0]?.subregion}</div>
        </div>
        <div>
          <div>Capital: {country[0]?.capital}</div>
          <div>Population: {country[0]?.population.toLocaleString()}</div>
          <div>Area: {country[0]?.area.toLocaleString()}</div>
          <div>
            Languages: {loading ? "Carregando..." : objectMap2(country)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCountry;
