import { useState } from 'react'
import Box from '../Components/Box';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';
import Pokemon from '../interfaces/Pokemon';
import '../assets/styles/pc.scss';

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
    const [boxPage, setBoxPage] = useState(1);


    return (
        <>
            <NavBar version={'box'} />
            <div className='pc-content'>
                <Box showPokemon={setSelectedPokemon} boxPage={boxPage} setBoxPage={setBoxPage}/>
                <Card pokemon={selectedPokemon} currentPage={boxPage} editable />
            </div>
        </>
    )

}

export default PC;
