import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import PokemonFilter from './PokemonFilter';
import PokemonSearch from './PokemonSearch';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filterLetter, setFilterLetter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error(`Error fetching Pokemon:`, error);
      }
    };

    fetchPokemon();
  }, []);

  const availableLetters = [...new Set(pokemon.map((poke) => poke.name.charAt(0)))].sort();

  const filteredPokemon = pokemon
    .filter((poke) => (filterLetter ? poke.name.startsWith(filterLetter.toLowerCase()) : true))
    .filter((poke) => (searchTerm ? poke.name.includes(searchTerm) : true));

  return (
    <div className="container-fluid mt-4">
      {/* Search & Filter should move to top on small screens */}
      <div className="row flex-column flex-md-row align-items-center full-width-row">
        <div className="col-12 col-md-3 d-flex flex-column align-items-stretch align-self-start">
          <br></br>
          <br></br>
          <PokemonSearch setSearchTerm={setSearchTerm} />
          <PokemonFilter letters={availableLetters} setFilterLetter={setFilterLetter} />
        </div>

        <div className="col-12 col-md-9">
          <h2 className="text-center mt-3">Pokémon List</h2>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
            {filteredPokemon.map((poke, index) => {
              const pokemonId = poke.url.split('/')[6];
              return (
                <div className="col d-flex justify-content-center">
                  <PokemonCard name={poke.name} key={index} id={pokemonId} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonList;
