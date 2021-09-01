import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    render(){
        const pokemons = this.props.array
        
      return pokemons.map((elemento) => <Pokemon pokemon={elemento} key={elemento.id}/> )
        
    }
}

export default Pokedex;
