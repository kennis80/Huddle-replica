import React from 'react'
import './Header.css'
import leg from './Images/backgrddimg.jpeg'
import { useState } from 'react'
const Header = () => {

    const [word, setWord] = useState('Build Your Community Your Fans Will Love')
    const change = () =>{
        setWord('Competency and credibility is everything')

    }
    return (
        <div className= "zubby">
        <h1> {word} </h1>
            <p>Huddle re-imagines th way we build communities. You have a <br/> voice, but so does your audience. Create connections with your <br/> users as you engage in geniue dicussion.<br/></p>
            <button onClick={change}>Get Started for Free</button>

            <img src={leg} alt="" />
        </div>

    )
}

export default Header

