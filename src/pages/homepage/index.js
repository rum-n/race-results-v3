import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import sofialogo from '../../img/sofia-marathon-logo.jpeg';
import spokeslogo from '../../img/spokes2017.png';
import ludologo from '../../img/ludogorets.jpg';
import pirinlogo from '../../img/pirinSkyrun.png';
import plovdivlogo from '../../img/plovdiv-marathon.jpeg';

import RaceCard from '../../components/raceCard/index';

const linkStyle = {
    textDecoration: 'none'
};

const Home = () => {

    return (
        <div>
            <div className='mainContent'>
                <Link style={linkStyle} to='/sofiamarathon'>
                    <RaceCard 
                        name='Sofia Marathon'
                        date='Annually in October in Sofia, Bulgaria.'
                        image={sofialogo}
                    />
                </Link>

                <RaceCard 
                    name='Spokes and Spikes'
                    date='Annually in May near Kazanluk, Bulgaria'
                    image={spokeslogo}
                />

                <RaceCard 
                    name='Ludogorski Marathon'
                    date='Annually in July near Razlog, Bulgaria'
                    image={ludologo}
                />

                <RaceCard 
                    name='Pirin Skyrun'
                    date='Annually in August in Pirin Mountains, Bulgaria'
                    image={pirinlogo}
                />

                <RaceCard 
                    name='Plovdiv Marathon'
                    date='Annually around April in Plovdiv, Bulgaria'
                    image={plovdivlogo}
                />

            </div>
        </div>
    );
}

export default Home;