import React from 'react';

import './styles.css';

const RaceCard = (props) => {
    return (
        <div className='raceCard'>
            <p className='raceName data'>{props.name}</p>
            <img className='raceImage' src={props.image} alt='Race Logo'/>
            <p className='raceDate'>{props.date}</p>
        </div>
    );
}

export default RaceCard;