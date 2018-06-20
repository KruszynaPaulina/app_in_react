export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON = 'GET_POKEMON';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const SET_TYPE = "SET_TYPE";

export function getPokemons() {
	return {
		type: GET_POKEMONS
	}
}

export function getPokemon(id) {
	return {
		type: GET_POKEMON,
		id
	}
}

export function setType(typepokemon) {
	return {
		type: SET_TYPE,
		typepokemon
	}
}

export function searchPokemons(searchText) {
	return {
		type: SEARCH_POKEMONS,
		searchText
	}
}