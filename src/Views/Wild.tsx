import React, { useEffect, useState } from 'react'
import Button from '../Components/Button';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';
import Pokemon from '../interfaces/Pokemon';
import { catchPokemon, getRandomPokemon } from '../Repository/requests';
import '../assets/styles/wild.scss';

const Wild = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({
        _id: "",
        ability: "",
        dex: 0,
        type1: "",
        type2: null,
        name: "",
        image: "",
        sprite: ""
    })

    const getPokemon = async () => {
        const pokemonData = await getRandomPokemon()
        const shinyChance = Math.floor(Math.random() * 4096) === 1;

        const tempPokemon = {
            "_id": "",
            "ability": pokemonData.data.abilities[0].ability.name,
            "dex": pokemonData.data.id,
            "type1": pokemonData.data.types["0"].type.name,
            "type2": pokemonData.data.types.length > 1 ? pokemonData.data.types["1"].type.name : null,
            "name": pokemonData.data.name,
            "image": pokemonData.data.sprites.other.home.front_default,
            "sprite": pokemonData.data.sprites.front_default
        }

        if (shinyChance) {
            tempPokemon.image = pokemonData.data.sprites.other.home.front_shiny;
            tempPokemon.sprite = pokemonData.data.sprites.front_shiny;
        }

        setPokemon(tempPokemon)
    }

    useEffect(() => {
        getPokemon()
    }, [])


    return (
        <>
            <NavBar version={'wild'} />
            <Card pokemon={pokemon} />
            <div className='button-container'>
                <Button type={'catch'} clickFunction={() => { catchPokemon(pokemon); getPokemon() }} />
                <Button type={'run'} clickFunction={() => { getPokemon() }} />
            </div>
        </>
    )
}

export default Wild;
