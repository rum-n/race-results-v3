import React from 'react';
import styles from './styles.css';

import RaceCard from '../../components/raceCard/index';

const Home = () => {
    return (
        <div>
            <h2 className='heading'>Race Results Visualization</h2>
            <RaceCard 
                name='Sofia Marathon 2016'
                date='October 2016'
                image=''
            />

            <RaceCard 
                name='Sofia Marathon 2016'
                date='October 2016'
                image=''
            />
        
        </div>
    );
}

export default Home;