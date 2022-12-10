import React from 'react'
import { pokeball, run } from '../assets/icons';
import '../assets/styles/button.scss';

interface ButtonProps {
    type: "catch" | "run",
    clickFunction: Function
}

const Button = ({ type, clickFunction }: ButtonProps) => {
    return <div className={`button ${type}`} onClick={() => clickFunction()}>
            {(type).toUpperCase()}
            {
                type === "run" ?
                    <img src={run} alt='' /> :
                    <img src={pokeball} alt='' />

            }
        </div>
}

export default Button;