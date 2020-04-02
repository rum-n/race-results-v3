import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
};

const SofiaMarathon = () => {

    return (
        <div className='mainContent'>
            <ul className='marathonYears'>
                <Link style={linkStyle} to='/sofiamarathon2016'>
                    <li>Sofia Marathon 2016</li>
                </Link>
                <li>Sofia Marathon 2017</li>
                <li>Sofia Marathon 2018</li>
                <li>Sofia Marathon 2019</li>
                <li>Sofia Marathon 2020</li>
            </ul>
        </div>
    );
}

export default SofiaMarathon;