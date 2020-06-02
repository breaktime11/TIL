import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item">Blog </NavLink>
            <NavLink to="/youtube" className="item">Youtube</NavLink>
            <NavLink to="/weather" className="item">Weather</NavLink>
        </div>
    );
};

export default Header;