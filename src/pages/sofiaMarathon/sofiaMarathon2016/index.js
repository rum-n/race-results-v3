import React from 'react';
import './styles.css';
import { Bar, Line, Pie, Scatter } from 'react-chartjs-2';
import results from './data.js';

// const yob = results.map();
// console.log(yob);

const SofiaMarathon2016 = () => {
    return (
        <div className='raceContent'>
            <h1 className='heading'>Sofia Marathon 2016</h1>
            <div className='barChart'>
                <Bar
                    data= {{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: '#6b76ff',
                            // borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 5, 2, 20, 30, 45],
                        }]
                    }}
                />
            </div>
            <div className='lineChart'>
                <Line
                    data= {{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: '#6b76ff',
                            // borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 5, 2, 20, 30, 45],
                        }]
                    }}
                />
            </div>
            <div className='pieChart'>
                <Pie
                    data= {{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: '#6b76ff',
                            // borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 5, 2, 20, 30, 45],
                        }]
                    }}
                />
            </div>
            <div className='scatterChart'>
                <Scatter
                    data= {{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                            label: "My First dataset",
                            backgroundColor: '#6b76ff',
                            // borderColor: 'rgb(255, 99, 132)',
                            data: [0, 10, 5, 2, 20, 30, 45],
                        }]
                    }}
                />
            </div>
        </div>
    );
}

export default SofiaMarathon2016;