import { GET_POKEMONS } from '../actions/actions-pokemons';
import { FETCH_POKEMONS_SUCCESS } from '../actions/actions-pokemons';
import pokemonsData from '../data/pokemons.json';

const initialState= {
	pokemons: pokemonsData
};

const pokemonsReducer = function (state = initialState, action) {
	switch (action.type) {
		case FETCH_POKEMONS_SUCCESS:
	      return [...action.pokemons]
	      
		case GET_POKEMONS:
			return Object.assign({}, state, {pokemons: state.pokemons})
		
		default:
	      return state
	}
	
};

export default pokemonsReducer