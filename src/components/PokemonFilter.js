import React from 'react';

const PokemonFilter = ({ letters, setFilterLetter }) => {
  return (
    <div className="mb-3">
      <label htmlFor="filter" className="form-label">
        Filter by First Letter:
      </label>
      <select id="filter" className="form-select" onChange={(e) => setFilterLetter(e.target.value)}>
        <option value="">All</option>
        {letters.map((letter) => {
          return (
            <option key={letter} value={letter}>
              {letter.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default PokemonFilter;
