import React from "react";

const Country = (props) => {
  return (
    <div>
      <img src={props.Country.img} />
      <h4>{props.Country.name}</h4>

      <div>Population: {props.Country.population}</div>
      <div>Region: {props.Country.region}</div>
      <div>Capital: {props.Country.capital}</div>
    </div>
  );
};

export default Country;
