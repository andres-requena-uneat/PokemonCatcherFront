import React from 'react'
import '../assets/styles/card.scss';
import Pokemon from '../interfaces/Pokemon';
import capFirstLetter from '../utils/utils';
import {default as Normal} from '../assets/backgrounds/Normal.jpg'

interface CardProps {
    pokemon: Pokemon
}

const types = (pokemon: Pokemon) => {
    if(pokemon.type2){
        return capFirstLetter(pokemon.type1) + "/" + capFirstLetter(pokemon.type2)
    }
    return capFirstLetter(pokemon.type1)
}

const Card = ({pokemon} : CardProps) => {
    const getType = () => {
        if (pokemon.dex === 0) return "ball"
        else return "pokemon"
    }

    return(
        <div className="card">
            <div className={`card-image ${capFirstLetter(pokemon.type1)}`}>
                <img className={`${getType()}`} src={pokemon.image} alt=''/> 
            </div>
            <div className='card-info'>
                <p>{`#${pokemon.dex}: ${capFirstLetter(pokemon.name)}`}</p>
                <p>{`Habilidad: ${capFirstLetter(pokemon.ability)}`}</p>
                <p>{`Tipo: ${types(pokemon)}`}</p>
            </div>
        </div>
    )
}

export default Card;