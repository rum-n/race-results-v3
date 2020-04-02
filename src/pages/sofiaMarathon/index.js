import React from 'react';
import logo from './sofiamarathonlogo.jpg';
import RaceCard from '../../components/raceCard/index';

const SofiaMarathon = () => {

    return (
        <div className='mainContent'>
            <RaceCard 
                name='Sofia Marathon 2016'
                date='October 2016'
                image={logo}
            />
        </div>
    );
}

export default SofiaMarathon;