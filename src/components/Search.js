import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };

  return (
    <div className="search">
      <input onChange={inputHandler} onKeyDown={keyDownHandler} type="text" />
      <button className="searchButton" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default Search;
