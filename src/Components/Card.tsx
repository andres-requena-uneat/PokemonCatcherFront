import '../assets/styles/card.scss';
import Pokemon from '../interfaces/Pokemon';
import capFirstLetter from '../utils/utils';
import {default as Pencil} from '../assets/icons/pencil-solid.svg'
import {default as Save} from '../assets/icons/floppy-disk-solid.svg'
import { useState, useEffect } from 'react';
import { renamePokemon, getBox } from '../Repository/requests'

interface CardProps {
    pokemon: Pokemon
    currentPage?: number
    editable?: boolean
}

const types = (pokemon: Pokemon) => {
    if(pokemon.type2){
        return capFirstLetter(pokemon.type1) + "/" + capFirstLetter(pokemon.type2)
    }
    return capFirstLetter(pokemon.type1)
}

const Card = ({pokemon, currentPage, editable} : CardProps) => {

    const [edit, setEdit] = useState(false)
    const [name, setName] = useState(pokemon.name)

    const getType = () => {
        if (pokemon.dex === 0) return "ball"
        else return "pokemon"
    }

    const changeMode = () => {
        if(edit){
            renamePokemon(pokemon._id, name)
            pokemon.name = name
        }
        setEdit(!edit)
    }

    useEffect(() => {
      setName(pokemon.name)
    }, [pokemon.name])
    

    return(
        <div className="card">
            <div className={`card-image ${capFirstLetter(pokemon.type1)}`}>
                <img className={`${getType()}`} src={pokemon.image} alt=''/> 
            </div>
            <div className='card-info'>
                {
                    editable && edit ?
                    <>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <img className='icon' src={Save} alt="Edit" onClick={changeMode} />
                    </>
                    :
                    <p>{`#${pokemon.dex}: ${capFirstLetter(pokemon.name)}`}
                    {
                        editable && pokemon.dex !== 0 && <img className='icon' src={Pencil} alt="Edit" onClick={changeMode} /> 
                    }
                    </p>
                }
                <p>{`Habilidad: ${capFirstLetter(pokemon.ability)}`}</p>
                <p>{`Tipo: ${types(pokemon)}`}</p>
            </div>
        </div>
    )
}

export default Card;