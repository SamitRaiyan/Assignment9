import React from 'react';
import Header from '../Header/Header';
import './staistics.css'
import Chart from './Chart'
const Statistics = () => {
    return (
        <div>
           <header className='progress text-center py-20'>
            <h1 className=' text-5xl font-mono font-bold text-gray-600'> Your OverAll Progress</h1>
           </header>
           <div className='mx-20 py-11'>
            <Chart></Chart>
           </div>
           
            
        </div>
    );
};

export default Statistics;