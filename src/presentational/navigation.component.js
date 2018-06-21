import React from 'react';
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../style.css'

const Navigation = props => (
    <div className="app__content">
        <header>
            <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item--pokeball"><Link to="/"><div className="pokeball--outside"><div className="pokeball--inside"></div></div></Link></li>
                            <li className="nav__item--link item__link--first"><Link className="nav__link" to="/">Pokemon List</Link></li>
                            <li className="nav__item--link item__link--second"><Link className="nav__link" to="/type">Type of Pokemons</Link></li>
                        </ul>
            </nav>
        </header>
        <main className="main">
            {props.children}
        </main>
    </div>
);

export default Navigation;