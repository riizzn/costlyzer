"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search"
        className='searchbar-input'
      />
      <button
        type="submit"
        className="searchbar-btn "
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
