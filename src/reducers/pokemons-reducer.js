import { GET_POKEMONS, GET_POKEMON, SEARCH_POKEMONS, SET_TYPE } from '../actions/actions-pokemons';
import pokemonsData from '../data/pokemons.json';

const initialState= {
	pokemons: pokemonsData,
	selectedPokemon: {},
	visiblePokemons: []
};

const pokemonsReducer = function (state = initialState, action) {
	switch (action.type) {
		case GET_POKEMONS:
			return Object.assign({}, state, {pokemons: state.pokemons});
		
		case GET_POKEMON:
  			const selectedPokemon = state.pokemons.find(pokemon => pokemon.id===parseInt(action.id));
  			return Object.assign({}, state, {selectedPokemon});

  		 case SEARCH_POKEMONS:
            const foundPokemons = state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visiblePokemons: foundPokemons});
		
		case SET_TYPE:
            const typePokemons = state.pokemons.filter(pokemon => pokemon.typepokemon === action.name);
            return Object.assign({}, state, {visiblePokemons: typePokemons});


		default:
	      	return state
	}
	
};

export default pokemonsReducer