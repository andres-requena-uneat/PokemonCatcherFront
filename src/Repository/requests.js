import axios from "axios";

export async function  getRandomPokemon() {
    return await axios.get(process.env.REACT_APP_API)
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

export async function renamePokemon(pokemonId, nickname) {
    return await axios.put(`${process.env.REACT_APP_API}?_id=${pokemonId}&nickname=${nickname}`)
}