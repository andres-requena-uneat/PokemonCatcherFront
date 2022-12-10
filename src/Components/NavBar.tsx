import React from 'react'
import '../assets/styles/navbar.scss';
import { logo } from "../assets/images/index.js"
import { Link } from 'react-router-dom';

interface NavBarProps {
    version: "wild" | "box"
}

const NavBar = ({version}: NavBarProps) => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <img className="navbar-logo" src={logo} alt="" />
                <button className='navbar-button'>
                    {
                        version === "wild" ?
                        <Link to="/pc">MY POKEMON</Link> :
                        <Link to="/">EXPLORE</Link>
                    }
                </button>
            </div>
        </div>
    )

}

export default NavBar;