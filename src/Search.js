import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className=" w-80  border-2 p-2 rounded"
          type="text"
          id="searchItem"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Items"
        />
      </form>
    </div>
  );
};

export default Search;
