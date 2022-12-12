import  { useEffect, useState } from "react";
import Pokemon from "../interfaces/Pokemon";
import { getBox, releasePokemon } from "../Repository/requests";
import '../assets/styles/box.scss';
import { arrow, xbutton } from "../assets/icons";

interface BoxProps {
    showPokemon: Function
    boxPage: number
    setBoxPage: Function
}

const Box = ({ showPokemon,boxPage,setBoxPage }: BoxProps) => {
    const placeholderPokemon: Pokemon = {
        _id: "",
        ability: "",
        dex: 0,
        type1: "",
        type2: "",
        name: "",
        image: "https://pngimg.com/uploads/pokeball/pokeball_PNG8.png",
        sprite: ""
    }
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([
        {
            _id: "",
            ability: "",
            dex: 0,
            type1: "",
            type2: "",
            name: "",
            image: "",
            sprite: "",
        }
    ])

    const fetchPokemonInBox = async () => {
        const box = await getBox(boxPage);
        setPokemonList(box.data)
    }

    useEffect(() => {
        fetchPokemonInBox()
    }, [boxPage])

    return <div className="box-container">
        <div className="box-name">
            <button className="box-name-button-previous" onClick={() => { if (boxPage > 1) setBoxPage(boxPage - 1) }}>
                <img src={arrow} alt='' />
            </button>
            <div>{`CAJA ${boxPage}`}</div>
            <button className="box-name-button-next" onClick={() => setBoxPage(boxPage + 1)}>
                <img src={arrow} alt='' />
            </button>
        </div>
        <div className="box-grid">
            {pokemonList.map((pokemon) => {
                return (
                    <div>
                        <div className="box-cell" key={pokemon._id} onClick={() => showPokemon(pokemon)}>

                            <img src={pokemon.sprite} alt="" />
                        </div>
                        <div
                            className="box-delete-button"
                            onClick={() => {
                                releasePokemon(pokemon._id);
                                fetchPokemonInBox();
                                showPokemon(placeholderPokemon)
                            }}
                        >
                            <img src={xbutton} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Box