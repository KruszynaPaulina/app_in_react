import React from 'react';
import { Link } from 'react-router';
import Pokemon from './pokemon.component';

const PokemonList = (props) => (
    <div className="main__pokemonList">
        {props.pokemons.map(pokemon => {
            return (
                <div className="pokemonList__singlePokemon" key={pokemon.id}>
                    <Link className="singlePokemon__link" to={'pokemon/' + pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </Link>
                </div>
            )
        })}
    </div>
);

export default PokemonList;