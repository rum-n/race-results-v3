import React from 'react';
import styles from './styles.css';

import RaceCard from '../../components/raceCard/index';

const Home = () => {
    return (
        <div className='mainContent'>
            <h2 className='heading'>Running Viz</h2>
            <RaceCard 
                name='Sofia Marathon'
                date='Annually in October in Sofia, Bulgaria.'
                image='../../../../img/sofiamarathonlogo.jpg'
            />

            <RaceCard 
                name='Spokes and Spikes'
                date='Annually in May near Kazanluk, Bulgaria'
                image='../../../img/spokes2017.png'
            />

            <RaceCard 
                name='Ludogorets'
                date='Annually in July near Razlog, Bulgaria'
                image=''
            />

            <RaceCard 
                name='Pirin Skyrun'
                date='Annually in August in Pirin Mountains, Bulgaria'
                image=''
            />

            <RaceCard 
                name='Plovdiv Marathon'
                date='Annually around April in Plovdiv, Bulgaria'
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