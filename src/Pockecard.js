import React, { Component } from 'react';
import "./Pockecard.css";

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';


let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);



export default class Pockecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pockecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt="charmander" />
                <div className="Pokecard-data">Type: {this.props.type}</div>
                <div className="Pokecard-data">EXP: {this.props.exp}</div>
            </div>
        )
    }
}
