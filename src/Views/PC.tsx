import React, { useEffect, useState } from 'react'
import Box from '../Components/Box';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';
import Pokemon from '../interfaces/Pokemon';
import { getBox } from '../Repository/requests';
import '../assets/styles/pc.scss';
import { pokeball } from '../assets/icons';

const PC = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(
        {
            _id: "",
            ability: "",
            dex: 0,
            type1: "",
            type2: "",
            name: "",
            image: "https://pngimg.com/uploads/pokeball/pokeball_PNG8.png",
            sprite: ""
        }
    )

    const selectPokemon = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon)
    }



    return (
        <>
            <NavBar version={'box'} />
            <div className='pc-content'>
                <Box showPokemon={selectPokemon} />
                <Card pokemon={selectedPokemon} />
            </div>
        </>
    )

}

export default PC;
