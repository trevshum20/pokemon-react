import React from 'react';

const PokemonSearch = ({ setSearchTerm }) => {
  return (
    <div className="mb-3">
      <label htmlFor="search" className="form-label">
        Search Pokémon
      </label>
      <input
        type="text"
        id="search"
        className="form-control"
        placeholder="Type a name..."
        onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default PokemonSearch;
