import React from 'react';
import img from '../logo-got.jpg';

const Navbar = () => {
    return (
        <div className='navbar'>
        <img src ={img} alt="" className="logo" />
        <ul>
            <li>Home</li>
            <li>Characters</li>      
        </ul>     
        </div>
    )
}

export default Navbar;