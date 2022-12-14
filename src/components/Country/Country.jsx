import React from "react";

const Country = (props) => {
  const handleActive = () => {
    props.setActive(props.Country?.name.common);
  };

  return (
    <div className="Country" onClick={handleActive}>
      <img alt={props.Country?.name.common} src={props.Country?.flags.png} />
      <h4>{props.Country?.name.common}</h4>
      <div>Population: {props.Country?.population.toLocaleString()}</div>
      <div>Region: {props.Country?.region}</div>
      <div>Capital: {props.Country?.capital}</div>
    </div>
  );
};

export default Country;
