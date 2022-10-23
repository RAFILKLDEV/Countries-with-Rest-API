import React, { useState } from "react";

const Search = (props) => {
  return (
    <div className="Bar">
      <input
        id="Search"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default Search;
