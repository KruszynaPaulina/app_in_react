import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Pokemons from "./containers/pokemon-container.component";
import NotFound from './presentational/not-found.component';

export default (
    <Route path='/' component={Navigation}>
    	<IndexRoute component={Pokemons}/>
        <Route path='*' component={NotFound}/>
    </Route>
);