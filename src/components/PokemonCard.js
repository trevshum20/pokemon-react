import React from 'react';

const PokemonCard = ({ name, id }) => {
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="pokemon-card d-flex flex-column align-items-center p-3 shadow-sm rounded">
            <img src={imageUrl} alt={name} className="img-fluid" />
            <h5 className="mt-2 text-capitalize">{name}</h5>
        </div>
    );
};

export default PokemonCard;
