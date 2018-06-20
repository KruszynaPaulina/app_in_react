import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Pokemons from "./containers/pokemon-container.component";
import TypeContainer from "./containers/type-container.component";
import NotFound from './presentational/not-found.component';
import PokemonDetailsContainer from './containers/pokemon-detail-container.component';

export default (
    <Route path='/' component={Navigation}>
    	<IndexRoute component={Pokemons}/>
    	<Route path='pokemon/:id' component={PokemonDetailsContainer}/>
    	<Route path='type' component={TypeContainer}/>
        <Route path='*' component={NotFound}/>
    </Route>
);