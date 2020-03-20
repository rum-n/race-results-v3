import React from 'react';

import './styles.css';

const RaceCard = (props) => {
    return (
        <div className='raceCard'>
            <p className='raceName data'>{props.name}</p>
            <p className='raceImage'>{props.image}</p>
            <p className='raceDate'>{props.date}</p>
        </div>
    );
}

export default RaceCard;