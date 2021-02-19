import React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.scss';

const LeftNav = ({cats}) => {

    return (
        <div className="left-nav">
            <div className="left-nav-content">
                {cats && cats.map((cat, index) => (
                    <NavLink 
                        className="left-nav-content-cat" 
                        key={index}
                        to={`/category/${cat.name.replaceAll(' ', '_')}`}
                    >
                        {cat.name}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default LeftNav;
