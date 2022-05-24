import React from 'react'
import reactLogo from '../images/logo.svg'
export default function NavBar(){
    return (
        <nav className="nav--container">
            <div className="logo--container">
                <img className="logo" src={reactLogo} alt="Logo"/>
                <h3 className="logo-text">ReactFacts</h3>
            </div>
            <div className="nav-text--container">
                <p className="nav-text">React Course - Project 1</p>
            </div>
        </nav> 
    )
}