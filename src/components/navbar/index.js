import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpeg';

const Nav = () => {
    return (
        <div>
            <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt='Logo'/>
                </div>
            </Link>
            <ul className='menu'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/add-race'>
                    <li>Add a race</li>
                 </Link>
            </ul>         
        </div>
    );
}

export default Nav;