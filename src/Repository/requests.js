import axios from "axios";

export async function  getRandomPokemon() {
    let dexNum = Math.floor(Math.random() * 905) + 1;
    return await axios.get(`${process.env.REACT_APP_POKEAPI}${dexNum}`)
}

export async function catchPokemon(pokemon) {
    const config = {
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    }

    return await axios.post(process.env.REACT_APP_API, pokemon, config)
}

export async function getBox(boxPage) {
    return await axios.get(`${process.env.REACT_APP_API}?page=${boxPage}`)
}

export async function releasePokemon(pokemonId) {
    return await axios.delete(`${process.env.REACT_APP_API}?_id=${pokemonId}`)
}